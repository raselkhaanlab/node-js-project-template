let dotEnv = require('dotenv');
dotEnv.config();
const {knex:db} =require('./app/providers/database-connection-provider');
let fs = require('fs');
let path = require('path');
let __rootdir = __dirname;
let databasePath = path.join(__rootdir,'database');
let sqlFnPath = path.join(databasePath,'custom-function');
let sqlStroeProcedure = path.join(databasePath,'store-procedure');
 function checkifDirecoryExist(dir){
 	return fs.existsSync(dir);
 }

 function load(loadingPath){
 	if(! checkifDirecoryExist(loadingPath)){
 		console.log('Invalid directory for  loading file');
 		return;
 	}
 	else{
 		fs.readdir(loadingPath,async(error,filenames)=>{
 			if(!error){
 				filenames.forEach(async (filename)=>{
 					let filePath = path.join(loadingPath,filename);
 					fs.readFile(filePath, 'utf-8',async(error,content)=>{
 					  if(!error){
 					  		try{
 					  			await db.raw(content);
 					  			console.log(loadingPath,filename,' execute successfully');
 					  		}
 					  		catch(error) { 
 					  			throw error;
 					  		}
 					  }
 					  else{
 					  	throw error;
 					  }
 					});
 				})

 			}
 			else{
 				throw error;
 			 }
 		})
 	}
 }
 load( );
 load(sqlFnPath);


