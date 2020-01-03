let {loadmodel} = require('./../../util/loader');
let {mysql,knex} =require('./../providers/database-connection-provider');
class CoreController {
	constructor(){
		this.data = {};
		this.loadmodel = loadmodel;
		this.db ={
			mysql:mysql(),
			knex:knex()
		}
	}
}
module.exports = CoreController;