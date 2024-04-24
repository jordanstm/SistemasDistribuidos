require('dotenv').config();
const knex = require('knex')({
    client: "mssql",
  
    connection: {
      host : process.env.HOSTDB,
      user:"sa",
      password:"123",
      database : process.env.DATABASE,
    
        port: Number(process.env.PORTDB),
      "options": {
        trustedConnection: true,
        instanceName:"SQLEXPRESS"
        }
    }
  });

 module.exports = {knex}