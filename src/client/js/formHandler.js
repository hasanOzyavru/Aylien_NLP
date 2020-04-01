import {
  checkForUrl
} from "./urlChecker";

async function handleSubmit(event) {
  event.preventDefault();
  const inputUrl = document.getElementById("name").value;
  const result1UI = document.getElementById("result1");
  const result2UI = document.getElementById("result2");

  if (!checkForUrl(inputUrl)) {
    resultUI.textContent = "Not a valid url.";
    return;
  }

  const urlData = {
    url: inputUrl
  };

  const res = await postData("/postURL", urlData);
  result1UI.textContent = `The polarity is ${res.pol}`;
  result2UI.textContent = `The polarity confidence is ${res.con}`;
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export {
  handleSubmit,
  postData
};