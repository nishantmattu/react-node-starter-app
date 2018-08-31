const express = require('express');
const app = express();


app.get('/', function(req, res) {
	res.status(200).json({message: "Hello World"});
})


const PORT = process.env.PORT || 5000;

app.listen(PORT);