function noMatch(req,res,next){
	if(req.xhr){
		return res.send({message:'route not match'});
	}
	// return res.render('404',{message:'404 not found'});
}
module.exports = noMatch;