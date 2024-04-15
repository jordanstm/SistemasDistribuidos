require('dotenv').config();
const knex = require('knex')({
    client: "mssql",
    connection: {
      host : process.env.HOSTDB,
      user : process.env.USERDB,
      password : process.env.PWDDB,
      database : process.env.DATABASE,
    
      port: Number(process.env.PORTDB),
      "options": {
        "encrypt": false,
        "enableArithAbort": true,
        "requestTimeout":40000,
        "connectTimeout":40000
        }
    }
  });

 module.exports = {knex}