// jshint esversion: 6

const settings = require("./settings");
var knex = require("knex")({
  client: 'pg',
  connection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: settings.database
  },
  searchPath: 'knex,public'
});
const firstName = process.argv[2];
const lastName  = process.argv[3];
const DoB = process.argv[4];

console.log("Adding...");

knex("famous_people").insert({
  first_name: firstName,
  last_name: lastName,
  birthdate: DoB
}).returning("*").asCallback((err, results) => {
  if(err){
    console.log(err);
  } else {
    console.log(results);
  }
  knex.destroy();
});