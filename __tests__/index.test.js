//really simple test that calls the 'index' file, clicks the 'magicButton' button, and checks that we are getting the expected result.

'use strict';

jest.mock('../index');

//using Jest we can set up a real simple DOM system. Hooray! We'll place it out here because it's used in two places.
document.body.innerHTML =
  '<div>' +
  '  <span id="theMessage">A message.</span>' +
  '  <button id="magicButton" />' +
  '</div>';

const magicButton = require('../index');

test('Check for original text.', () => {
  expect(document.getElementById("theMessage").innerHTML).toEqual('A message.');
});

test('Clicks, then checks again', () => {
  const magicButton = require('../index');

  document.getElementById("magicButton").click();

  expect(document.getElementById("theMessage").innerHTML).toEqual('<b>CATS! WOW!</b> Page improved 150% at the very <u>least</u>.');
});