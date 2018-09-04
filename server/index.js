const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/', function(req, res) {
	console.log("here");
	res.status(200).json({message : "Hello World"});

})


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log("LISTENING!!!"));