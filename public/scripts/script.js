var socketio = io.connect("http://localhost:3000");

socketio.on("message", function(msg) {
    inner.insertAdjacentHTML('beforeend', "<div class='bubble-base'><div class='not-select'>" + msg + "</div><div class='other-bubble'>" + msg + "</div></div>");
    
    var a = document.documentElement;
    var y = a.scrollHeight - a.clientHeight;
    window.scroll(0, y);
});

function sendMessage(msg) {
    inner.insertAdjacentHTML('beforeend', "<div class='bubble-base'><div class='not-select'>" + msg + "</div><div class='my-bubble'>" + msg + "</div></div>");
    socketio.emit("message", msg);

    var a = document.documentElement;
    var y = a.scrollHeight - a.clientHeight;
    window.scroll(0, y);
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