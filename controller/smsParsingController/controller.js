//var db 			= require('../mongodb.js');
var fs			= require('fs');
var randomstring= require('randomstring');
var MongoClient = require('mongodb').MongoClient;
var url 		= 'mongodb://admin:Y_hiHs9Z-uTz@shopylytics-c0dezer0.rhcloud.com/shopylytics';
MongoClient.connect(url, function(err, database){
	db = database;
	console.log(db, err);
})
// var a = new device.constructor();
// console.log(a),
module.exports = {
	store:function (req, res){
		var obj = req.body;
		
		MongoClient.connect(url, function(err, database){
			db = database;
			console.log(db, err);
			db.collection('sms').insert(obj, function(err, result){
				res.send({error: err, status: result});
			})
		})
		//res.send(req.body);
	}
}