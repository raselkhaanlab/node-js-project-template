function noMatch(req,res,next){
	if(req.xhr){
		return res.status(404).send({message:'404 not found /route not match'});
	}
	else{
		return res.render('404',{message:'404 not found'});
	}
	
}
module.exports = noMatch;