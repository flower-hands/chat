const express = require("express");
const router  = express.Router();

//router.use(express.static("./../../views"));
//router.use(express.static("./test.html"));

router.get("/", (req, res) => {
    console.log(__dirname);
    dir = __dirname
    dir = dir.slice(0, dir.length - 6)
    //res.sendFile("C:/Users/18t304/Desktop/chat/views/index.html");
    res.sendFile(dir + "views/login.html");
    console.log(dir);
    
    //res.send("aaa");
});


module.exports = router;