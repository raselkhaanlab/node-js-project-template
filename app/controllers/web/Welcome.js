let Controller = require('./WebController');
let __this ;
class Welcome extends Controller  {
	constructor(){
		super();
		__this =this;

	}
	async showWelcomePage(req,res){
		res.render('pages/welcome');
	}
}
module.exports = Welcome;