var socketio = io.connect("http://localhost:3000");

socketio.on("message", function(msg) {
    inner.insertAdjacentHTML('beforeend', '<ul>' + msg + '</ul>');
});

function sendMessage(msg) {
    //alert(msg);
    socketio.emit("message", msg);
}
/*
var app = new Vue ({
    el: '#app',
    methods: {
        sendMessage(msg) {
            alert("aaaaa")
            //socketio.emit("message", msg)
        }
    }
});
*/