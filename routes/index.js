var express = require('express');
var router = express.Router();
var mongodb =require("mongodb");

var url = "mongodb://localhost:27017/mongo_restaurantes";
function getRestaurantes(callBack){
	mongodb.connect(url, (err, dbm)=>{
		if(err) throw err;

		// ESTO NO FUNCIONA PARA MONGO > VERSION 3.0  var tweets =  dbm.collection("tweets");
		const mydb = dbm.db("mongo_restaurantes");
		var restaurantes = mydb.collection("restaurantes");


		restaurantes.find({}).toArray((err2, restaurantes)=>{
			if(err2) throw err2;

			callBack(restaurantes);
		})
	});

}

//agregamos en uno los likes
function postLike(_nombre){
	mongodb.connect(url, function(err, dbm) {
		if (err) throw err;

		const mydb = dbm.db("mongo_restaurantes");

		var myquery = { nombre: _nombre };
		var incLike = { $inc: {calificacion:1} };

		mydb.collection("restaurantes").updateOne(myquery, incLike, function(err, res) {
			if (err) throw err;
			console.log("1 like add");
			dbm.close();
		});

		

	});
}

// function getLikes(_nombre){
// 	mongodb.connect(url, function(err, dbm) {
// 		if (err) throw err;

// 		const mydb = dbm.db("mongo_restaurantes");

// 		var myquery = { nombre: _nombre };

// 		var x =mydb.collection("restaurantes").findOne(myquery, { calificacion: 1}, function(err, res) {
// 			if (err) throw err;
// 		console.log("dentro de findOne ");
// 			dbm.close();
// 		})
// 		console.log("retorna " + JSON.stringify(x));
// 		;

		

// 	});
// }


/* GET home page. */
router.get('/restaurantes', function(req, res) {
	console.log("GET /restaurantes");
	getRestaurantes((restaurantes) => {
		res.json(restaurantes);
	});
});

router.post('/post-like', function(req, res){
	console.log("POST /add-like");
	//console.log("req: "+req);
	console.log("body: "+JSON.stringify(req.body));
	const name = req.body.nombre;
	res.json(req.body);
	postLike(name);
	// getLikes(name);
});

module.exports = router;
