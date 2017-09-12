var request = require('request');
var GITHUB_USER = "TuanPham303";
var GITHUB_TOKEN = "fadf6a99cb8d9623f693151e804124612926e93a";

function getRepoContributors(repoOwner, repoName, cb){
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': '@TuanPham303'
    }
  };
  request(options, function(error, response, body){
    cb(error, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  var profile = JSON.parse(result);
  profile.forEach(function(ele){
    console.log(ele.avatar_url);
  }); 
});





/*var options = {
  url: 'http://api.github.com/users/davidvandusen/repos',
  header: {
    'User-Agent': 'macaroon'
  }
};


request(options, function(error, response, body){
  if(error){
    console.log(error);
    return;
  }
  console.log(body);
});*/