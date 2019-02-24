var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var mongoDB = 'mongodb://localhost/LightsControl';

mongoose.connect(mongoDB,function(err){
	if(err){
		console.log("Couldn't connect to Database. Error: " + err);
	}
	else{
		console.log('Database connection has been established.');	
	}
});
