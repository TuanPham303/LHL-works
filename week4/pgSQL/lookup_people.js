// jshint esversion: 6
const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

const person = process.argv[2];

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  console.log("Searching ...");
  client.query(`SELECT * FROM famous_people WHERE first_name = '${person}' OR last_name = '${person}'`, (err, results) => {
    if(err) throw err;

    console.log(`${results.rows[0].id}: ${results.rows[0].first_name} ${results.rows[0].last_name}, born "${results.rows[0].birthdate}"`);

    client.end((err) => {
      if(err) throw err;
    });
  });
});



