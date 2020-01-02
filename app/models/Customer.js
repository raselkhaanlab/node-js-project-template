const Model = require('./Model.js');
class Customer extends Model {
	constructor(){
		super();
		
	}

	async getAllCustomer(){
		 try{
		 	let [rows] = await this.db.mysql.query('select * from customers');
		 	return rows;
		 }
		 catch(error){
		 	console.log(error);
		 }
	}

	}
	module.exports = Customer;