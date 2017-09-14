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

const urlDatabase = {};

//add all the variables to local by using middleware
app.use(function (req, res, next) {
  res.locals = {
    err: err,
    users: users,
    urls: urlDatabase,
    usedEmail: usedEmail,
    user_id: req.cookies.user_id
  };
  next();
});

/////////////REGISTER//////////////
const users = {};
let err = '';
let usedEmail;
app.get('/register', (req, res) => {
  res.render('register');
});
app.post('/register', (req, res) => {
  //error handling
  if (req.body.email === '' || req.body.password === '') {
    err = true;
    res.redirect('/register');
  } else {
    let userId = generateRandomId();
    users[userId] = {};
    users[userId].id = userId;
    users[userId].email = req.body.email;
    users[userId].password = req.body.password;
    res.redirect('/');
  }
});

function generateRandomId() {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < 9; i++){
    let ranNumber = Math.floor(Math.random() * chars.length);
    randomString += chars.charAt(ranNumber);
  }
  return randomString;
}

///////////LOGIN/////////////////
app.get('/login', (req, res) => {
  res.render('login');
})
app.post('/login', (req, res) => {
  let foundUser 
  for(let user in users){
    if(req.body.email === users[user].email && req.body.password === users[user].password){
        foundUser = true;
        break;
    } else {
      foundUser = false;
    }
  }
  if(!foundUser){
    res.render('login', {err: 'not found'})
  } else {
    res.cookie('user_id', req.body.email);

    res.redirect('/');
  }
})

////////////LOG OUT///////////////
app.post('/logout', (request, response) => {
  response.clearCookie('user_id');

  response.redirect('/');
});

/////////////HOME PAGE/////////////
app.get('/', (request, response) => {
  response.render('urls_index');
});

//get user's input and update the urlDatabase
app.post("/url", (request, response) => {
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

//redirecting
app.get('/:id', (req, res) => {
  let id = req.params.id;
  res.render('<% urls[id] %>');
})

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

