const express = require("express");
const bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var persona = "";

app.get('/', function(req, res){
    if(req.query.nombre){
        persona = req.query.nombre;
    }else{
        persona = "desconocido";
    }
    res.send("<h1>Hola "+persona+"!</h1>");
});

app.listen(3000);
console.log("Server ok");