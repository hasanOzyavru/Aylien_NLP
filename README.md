# About Evaluate News Article with NLP Project

This Repo is part of the Frontend Developer Udacity Nanodegree. It utilizes NLP capabilities of the Aylien('https://aylien.com/') API.

You are expected to paste a URL into the form and submit to get sentiment analyses of the content. Aylien will analyse the sentiment of the page and return the polarity and the confidence level of polarity.

## Getting started

1. Clone or download this repo to your machine.

`cd` into your new folder and run:

2. `npm install` to get npm modules needed in the program.

To get access to Aylien, you need to get your own API ID and Key so:

3. Signup for an API key

Go to [here](https://developer.aylien.com/signup). Signing up will result in an API key. It is free up to a certain limit (1000 trial/day).

4. Hide your Key using a .env file

- [ ] Use npm install the dotenv package `npm install dotenv` to enable usage of environment variables we set in a new file
- [ ] Create a new `.env` file in the root of your project
- [ ] Go to your .gitignore file and add `.env` - this will make sure that we don't push our environment variables to Github!
- [ ] Fill the .env file with your API keys like this:

```
API_ID=**************************
API_KEY=**************************
```

5. `npm run build-prod` to create the dist folder

6. `npm start`to start your node server

7. Check the port in your computer where your node server is running. So in the browser `localhost:4000`. Start using it!

## Credits

8. AYLIEN Text Analysis API

   The [AYLIEN](https://aylien.com) Text Analysis API is a package of Natural Language Processing and Machine Learning-powered APIs for analyzing and extracting various kinds of information from textual content.
