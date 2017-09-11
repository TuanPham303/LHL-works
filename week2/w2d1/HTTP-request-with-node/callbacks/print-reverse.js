var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reserve.html'
};

function reverse (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, reverse);