var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  const pair = {
    'ck' : 'x', 
    'er' : '0r', 
    'you' : 'j00',
    'a' : '4', 
    'e' : '3', 
    'l' : '1', 
    'o' : '0', 
    's' : '5', 
    't' : '7', 
  };
  for (var i = 0; i < html.length; i++) {
    var letter = html[i];
    if(Object.keys(pair).indexOf(letter) !== -1){
      html = html.replace(html[i], pair[letter]);
    }
  }
  console.log(html);
}

getHTML(requestOptions, print1337);