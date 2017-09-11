const request = require('request');
var GITHUB_USER = "TuanPham303";
var GITHUB_TOKEN = "fadf6a99cb8d9623f693151e804124612926e93a";

function getRepoContributors(repoOwner, repoName, cb){
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  /*request.get(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`)
  .on('error', function(err){
    throw err;
  })
  .on('response', function(response){
    cb();
  });*/
}

getRepoContributors('jquery', 'jquery', function(err, result){
  console.log("error: ", err);
  console.log("result: ", result);
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