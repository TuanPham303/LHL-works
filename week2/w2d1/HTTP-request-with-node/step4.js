var https = require('https');

function getHTML (option, callback) {
  https.get(option, function(response){
    var output = '';
    
    response.setEncoding('utf8');
    
    response.on('data', function(data){
      output += data;
    });

    response.on('end', function(){
      callback(output);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);