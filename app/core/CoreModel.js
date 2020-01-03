const {mysql,knex} =require('./../providers/database-connection-provider');
class CoreModel {
	   constructor (){
	   	this.db = {
	   		mysql:mysql(),
	   		knex:knex()
	   	};
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