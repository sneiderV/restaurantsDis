/*
Tomas Venegas: cambiar let por let 
 */
let express = require('express');
let router = express.Router();
let mongodb =require("mongodb");


//let url = "mongodb://localhost:27017/mongo_restaurantes";
let url = process.env.MONGODB||"mongodb://localhost:27017/heroku_pw509l3r";
function getRestaurantes(callBack){
	mongodb.connect(url, (err, dbm)=>{
		if(err) throw err;

		// ESTO NO FUNCIONA PARA MONGO > VERSION 3.0  let tweets =  dbm.collection("tweets");
		// const mydb = dbm.db("mongo_restaurantes");
    /*
		Tomas Venegas: deberían hostear la base de datos en un servidor externo y guardar estos datos en una varible de entorno
*/
		const mydb = dbm.db("heroku_pw509l3r");
		let restaurantes = mydb.collection("restaurantes");


		restaurantes.find({}).toArray((err2, restaurantes)=>{
			if(err2) throw err2;

			callBack(restaurantes);
		})
	});

}

//agregamos en uno los likes
function postLike(_nombre, callback){
	mongodb.connect(url, function(err, dbm) {
		if (err) throw err;

		// const mydb = dbm.db("mongo_restaurantes");
		const mydb = dbm.db("heroku_pw509l3r");

		let myquery = { nombre: _nombre };
		let incLike = { $inc: {calificacion:1} };

		mydb.collection("restaurantes").updateOne(myquery, incLike, function(err, res) {
			if (err) throw err;
			console.log("1 like add");
			dbm.close();
		});

		let restaurantes = mydb.collection("restaurantes");
		let projection = {calificacion: 1};
		restaurantes.find(myquery, projection).toArray((err2, _restaurantes)=>{
			if(err2) throw err2;

			callback(_restaurantes);
		})

		

	});
}

function getLikes(_nombre, callback){
	mongodb.connect(url, function(err, dbm) {
		if (err) throw err;

		const mydb = dbm.db("mongo_restaurantes");

		let myquery = { nombre: _nombre };

		let x =mydb.collection("restaurantes").findOne(myquery, { calificacion: 1}, function(err, res) {
			if (err) throw err;
			callback(x);
			console.log("variable x dentro de findOne: " + x);
			dbm.close();
		})
		console.log("retorna " + JSON.stringify(x));
		;

		

	});
}


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
	postLike(name,(restaurantes)=>{
		let likes = restaurantes[0].calificacion;
		console.log("se envian #likes de "+name+": " + likes);
		res.json({calificacion:likes});

	});
	// getLikes(name,(calificacion)=>{ res.send(calificacion.json());	console.log(calificacion);	});
});

module.exports = router;
