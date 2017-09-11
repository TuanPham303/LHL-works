var https = require('https');

module.exports = function getHTML (option, callback) {
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
};