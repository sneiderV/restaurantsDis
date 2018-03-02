var express = require('express');
var router = express.Router();
var mongodb =require("mongodb");

var url = "mongodb://localhost:27017/node_mongo1";
function getTweets(callBack){
	mongodb.connect(url, (err, dbm)=>{
		if(err) throw err;

		// ESTO NO FUNCIONA PARA MONGO > VERSION 3.0  var tweets =  dbm.collection("tweets");
		const mydb = dbm.db("node_mongo1");
		var tweets = mydb.collection("tweets");


		tweets.find({}).toArray((err2, tweets)=>{
			if(err2) throw err2;

			callBack(tweets);
		})
	})
}


/* GET home page. */
router.get('/tweets', function(req, res) {
	console.log("GET /tweets");
	getTweets((tweets) => {
		res.json(tweets);
	});
});

module.exports = router;
