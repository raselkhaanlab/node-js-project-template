let mysqldb = require('./../../connection/mysql-connection');
class CoreModel {
	   constructor (){
	   	this.db = {};
	   	this.db.mysql = mysqldb();
	   	this.data = {};
	   	this.table = {
			name:null,
			primaryKey:null,
			columns:[],
			foreignKey:null
		};
	   }
}
module.exports = CoreModel;