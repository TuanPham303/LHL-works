// jshint esversion: 6
// const pg = require("pg");
const settings = require("./settings");

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: settings.database
  },
  searchPath: 'knex,public'
});

const person = process.argv[2];


  console.log("Searching ...");
  knex.select('*').from('famous_people').where({
    last_name: person 
  }).orWhere({
    first_name: person
  }).asCallback(function (err, rows) {
    if (err) {
      console.err(err);
    } else {
      console.log(`${rows[0].id}: ${rows[0].first_name} ${rows[0].last_name}, born "${rows[0].birthdate}"`);
    }
    knex.destroy();
  });



// using normal query //

// client.connect((err) => {
  // if (err) {
  //   return console.error("Connection Error", err);
  // }
  /*client.query(`SELECT * FROM famous_people WHERE first_name = '${person}' OR last_name = '${person}'`, (err, results) => {
    if(err) throw err;

    console.log(`${results.rows[0].id}: ${results.rows[0].first_name} ${results.rows[0].last_name}, born "${results.rows[0].birthdate}"`);

    client.end((err) => {
      if(err) throw err;
    });
  });*/
// });



