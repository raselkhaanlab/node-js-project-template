let Controller = require('./ApiController');

let __this ;
class Customer extends Controller  {
	constructor(){
		super();
		__this =this;

	}
	async all(req,res){
		let CustomerModel = __this.loadmodel('Customer');
		try{
			let customers = await CustomerModel.getAllCustomer();
			res.json(customers);
		}
		catch(error){
			console.log(error);
		}
	}
}
module.exports = Customer;