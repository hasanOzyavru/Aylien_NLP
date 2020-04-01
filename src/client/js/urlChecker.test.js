import {
    checkForUrl
} from './urlChecker';

test('Is a valid url', () => {
    expect(checkForUrl('https://www.udacity.com')).toBeTruthy()
})