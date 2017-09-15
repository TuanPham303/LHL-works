/* jshint esversion: 6 */

var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080

//bcrypt
const bcrypt = require('bcrypt');

//body parse the data from the user
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//cookie parser
// var cookieParser =  require('cookie-parser');
// app.use(cookieParser());

//cookie session
const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['tuan'],
}));

app.set('view engine', 'ejs');

const urlDatabase = {
  qwerty: {
    id: 'qwerty',
    longURL: 'http://youtube.com'
  }
};
let err = '';
let usedEmail;
const users = {};
//add all the variables to local by using middleware
app.use(function (req, res, next) {
  res.locals = {
    err: err,
    users: users,
    urls: urlDatabase,
    usedEmail: usedEmail,
    user_id: req.session.user_id,
  };
  next();
});

/////////////REGISTER//////////////
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
    let hashedPassword;
    users[userId] = {};
    users[userId].id = userId;
    users[userId].email = req.body.email;
    hashedPassword = bcrypt.hashSync(req.body.password, 10);
    users[userId].password = hashedPassword;
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
});
app.post('/login', (req, res) => {
  for(let user in users){
    if(users[user].email === req.body.email){
      userId = users[user].id;
    }
  }
  let foundUser ;
  for(let user in users){
    if(req.body.email === users[user].email && bcrypt.compareSync(req.body.password, users[user].password)){
        foundUser = true;
        break;
    } else {
      foundUser = false;
    }
  }
  if(!foundUser){
    res.render('login', {err: 'not found'});
  } else {
    req.session.user_id = req.body.email;

    res.redirect(`/u/${userId}`);
  }
});
app.get('/u/:id', (req, res) => {
  let id = req.params.id;
  res.render('urls_index');
});

////////////LOG OUT///////////////
app.post('/logout', (request, response) => {
  request.session = null;

  response.redirect('/');
});

/////////////HOME PAGE/////////////
app.get('/', (request, response) => {
  response.render('urls_index');
});

//get user's input and update the urlDatabase
app.post("/url", (request, response) => {
  let shortURL = generateRandomString();
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let createdTime = `${hour}:${minute}:${second} ${year}-${month + 1}-${date}`;
  urlDatabase[shortURL] = {};
  urlDatabase[shortURL].longURL = request.body.longURL;
  urlDatabase[shortURL].owner = request.session.user_id;
  urlDatabase[shortURL].createdTime = createdTime;
  console.log(urlDatabase);

  response.redirect('/urls');
});
app.get('/urls', (req, res) => {
  res.render('urls_index');
});

//show url detail
app.get('/urls/:id', (request, response) => {
  let id = request.params.id;
  let url = {};
  url[id] = urlDatabase[id];
  let templateVars = {
    urls: url,
    username: request.session.username
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
app.get('/urls/:id', (req, res) => {

  res.render('urls_show');
});
app.post('/urls/:id/update', (request, response) => {
  let id = request.params.id;
  urlDatabase[id].longURL = request.body.longURL;
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  let hour = d.getHours();
  let minute = d.getMinutes();
  let second = d.getSeconds();
  let updatedTime = `${hour}:${minute}:${second} ${year}-${month + 1}-${date}`;
  urlDatabase[id].updatedTime = updatedTime;

  response.redirect(`/urls/${id}`);
});

//redirecting
/*app.post('/:id', (req, res) => {
  let id = req.params.id;
  res.redirect(`/${id}`);
});*/
app.get('/r/:id', (req, res) => {
  let id = req.params.id;
  console.log(urlDatabase[id].longURL);
  res.redirect(`${urlDatabase[id].longURL}`);
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

