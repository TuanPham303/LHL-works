var https = require('https');

function getAndPrintHTML(){
  var requetOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requetOptions, function(response){
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

getAndPrintHTML();