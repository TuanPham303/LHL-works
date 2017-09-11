var https = require('https');

function getAndPrintHTML(option){

  https.get(option, function(response){
    var output = '';
    response.setEncoding('utf8');
    response.on('data', function(data){
      output += data;
    });
    response.on('end', function(){
      console.log(output);
    });
  });
}

var requetOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requetOptions);