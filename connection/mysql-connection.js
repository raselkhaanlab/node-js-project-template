const mysql = require('mysql2');
 function mysqlConnection (){
		const connection = mysql.createPool({
			host:process.env.MYSQL_HOST, 
			user: process.env.MYSQL_USER, 
			database: process.env.MYSQL_DATABASE,
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0,
			multipleStatements:true
		});
		// console.log(connection);
		return connection.promise();
	}

module.exports = mysqlConnection;