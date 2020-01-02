let Controller = require('./WebController');
let __this ;
class Customer extends Controller  {
	constructor(){
		super();
		__this =this;

	}
	async all(req,res){
		let CustomerModel = __this.loadmodel('Customer');
		res.end();
	}
}
module.exports = Customer;