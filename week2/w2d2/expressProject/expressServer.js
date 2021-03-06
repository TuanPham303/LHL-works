var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080

//body parse the data from the user
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

var urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//home page
app.get('/', (request, response) => {
  ersponse.render('urls_index');
});

//show the list of url and shortcut
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

//get user's input and update the urlDatabase
app.post("/urls", (request, response) => {
  let shortURL = generateRandomString();
  urlDatabase[shortURL] = request.body.longURL;

  let templateVars = {
    urls: urlDatabase
  };

  response.render('urls_index', templateVars);
});

//redirecting short url to long url
app.get('/urls/:id', (request, response) => {
  let longURL = urlDatabase[request.params.id];
  response.redirect(longURL);
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

//start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

