const express = require('express');
const router = express.Router();
/*
	laodcontroller return a function. which have 3 parameter.
	(controllername=required,controllertype=required,path=optional?if not given take it form laod config);
*/
const {loadcontroller} = require('./../../util/loader'); 
router.get('/',loadcontroller('Welcome','web')['showWelcomePage']);
module.exports = router;