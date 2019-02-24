var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lightsSchema = new Schema({
	name:{type: String, unique: true},
	status:Boolean
}, {collection: 'lights'});

module.exports = mongoose.model('lights',lightsSchema);
