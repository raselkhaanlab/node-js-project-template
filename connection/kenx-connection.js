let knex = require('knex')({
  client: 'mysql2',
  connection: {
   host:process.env.MYSQL_HOST, 
	user: process.env.MYSQL_USER, 
	database: process.env.MYSQL_DATABASE,
	multipleStatements: true
  }
});

module.exports =knex;