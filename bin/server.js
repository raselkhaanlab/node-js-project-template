const app = require('./../app');
const http = require('http');
const mergeRoute = require('./../routes/route-mapping');
let server = http.createServer(app);
mergeRoute(app);
server.listen (process.env.PORT,()=>{
	console.log('application run on port: '+ process.env.PORT);
})