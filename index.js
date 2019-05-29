var express = require("express");
var app = express();

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res){
    console.log('HELLOOOOO');
    res.sendFile(__dirname + '/views/index.html');
});