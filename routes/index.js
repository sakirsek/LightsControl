var express = require('express');
var router = express.Router();

var Light = require('../models/light');

/* GET home page. */

router.get('/', function(req, res, next) {

	Light.find(function(err,results){
		if(results.length){
			res.render('index',{ lights: results });
		} 
		else{
			res.send("There is not any lighting.");
		}
	});
});

module.exports = router;
