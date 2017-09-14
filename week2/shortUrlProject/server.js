var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080

//body parse the data from the user
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//cookie parser
var cookieParser =  require('cookie-parser');
app.use(cookieParser());

app.set('view engine', 'ejs');

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//home page
app.get('/', (request, response) => {
  let templateVars = {
    urls: urlDatabase,
    username: request.cookies.username
  };
  response.render('urls_index', templateVars);
});

//get user's input and update the urlDatabase
app.post("/", (request, response) => {
  let templateVars = {
    urls: urlDatabase,
    username: request.cookies.username
  };
  let shortURL = generateRandomString();
  urlDatabase[shortURL] = request.body.longURL;

  response.redirect('/');
});

//show url detail
app.get('/urls/:id', (request, response) => {
  let id = request.params.id;
  let url = {};
  url[id] = urlDatabase[id];
  let templateVars = {
    urls: url,
    username: request.cookies.username
  };

  response.render('urls_show', templateVars);
});

//deleting url
app.post('/urls/:id/delete', (request, response) => {
  let id = request.params.id;
  delete urlDatabase[id];

  response.redirect('/');
});

//update url
app.post('/urls/:id/update', (request, response) => {
  let id = request.params.id;
  urlDatabase[id] = request.body.longURL;

  response.redirect('/');
});

function generateRandomString() {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < 6; i++){
    let ranNumber = Math.floor(Math.random() * chars.length);
    randomString += chars.charAt(ranNumber);
  }
  return randomString;
}

//login
/*app.get('/login', (request, response) => {
  response.render('urls_index');
})*/
app.post('/login', (request, response) => {
  response.cookie('username', request.body.username);
  response.redirect('/');
});

//logout
/*app.get('/logout', (request, response) => {
  response.render('urls_index');
});*/
app.post('/logout', (request, response) => {
  response.clearCookie('username');

  response.redirect('/');
});

//start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

/*//show the list of url and shortcut
app.get('/urls/show', (request, response) => {
  let templateVars = {
    urls: urlDatabase
  };
  response.render('urls_show', urlDatabase);
});
app.get('/urls/new', (request, response) => {
  response.render('urls_new');
});
//display the urlDatabase
app.get('/urls', (request, response) => {
  let templateVars = {
    urls: urlDatabase
  };
  response.render('urls_index', templateVars);
});
//redirecting short url to long url
app.get('/:id', (request, response) => {
  let longURL = urlDatabase[request.params.id];
  response.redirect(longURL);
});
*/


//asdfscgbsjkfcbhsnfgch