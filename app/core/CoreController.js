let {loadmodel} = require('./../../util/loader');
class CoreController {
	constructor(){
		this.data = {};
		this.loadmodel = loadmodel;
	}
}
module.exports = CoreController;