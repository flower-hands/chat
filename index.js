
var express = require("express");
var app = express();
var http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) {
    socket.on("message", function(msg) {
        console.log("message: " + msg);
        io.emit("message", msg);
    });
});

http.listen(PORT, function() {
    console.log("server listening. Port:" + PORT);
});