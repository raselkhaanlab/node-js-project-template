
function loadRoutes(app){
	/*
| ======== this is customiseable mapping ==== you can crate more route file and load here and just use as follow; 
*/
	const webRoute = require('./web/web.js');
	const apiRoute = require('./api/api.js');
	const noMatchRoute = require('./no-match.js');
	app.use(webRoute);
	app.use('/api',apiRoute);
	app.use(noMatchRoute);
}


function mappingRoutes(app){
	if(!app){
		throw new Error('you must pass app parameter for mapping the of route');
	}
	else if(! Object.keys(app).includes('locals') || ! Object.keys(app).includes('init') ){
			throw new Error('must be pass an express app object');	
	}
	else{
		loadRoutes(app);
	}
}


module.exports = mappingRoutes;