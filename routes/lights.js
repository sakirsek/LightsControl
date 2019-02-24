var express = require('express');
var router = express.Router();

var Light = require('../models/light');

/* GET users listing. */
router.get('/init', function(req, res, next) {

	var arr = [
		{name:'LIGHTING1', status:false},
		{name:'LIGHTING2', status:false},
		{name:'LIGHTING3', status:false},
		{name:'LIGHTING4', status:false},
		{name:'LIGHTING5', status:false},
		{name:'LIGHTING6', status:false},
		{name:'LIGHTING7', status:false},
		{name:'LIGHTING8', status:false},
		{name:'LIGHTING9', status:false},
		{name:'LIGHTING10', status:false},
		{name:'LIGHTING11', status:false},
		{name:'LIGHTING12', status:false},
	];
	Light.insertMany(arr, function(err, docs) {
		if(err) {
			res.send('records have already been created.');
		} else {
			res.send(docs.length + ' lightings have been created.');
		}
	});
	
});

router.get('/:id/on', function(req, res, next) {
	Light.findOneAndUpdate({name: 'LIGHTING' + req.params.id}, { status: true },function(err,results) {
		res.send(req.params.id + ' is on');
	});
});

router.get('/:id/off', function(req, res, next) {
	Light.findOneAndUpdate({name: 'LIGHTING' + req.params.id}, { status: false },function(err,results) {
		res.send(req.params.id + ' is off');
	});
});

module.exports = router;
