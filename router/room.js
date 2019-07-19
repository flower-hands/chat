const express = require("express");
const router = express.Router();

//router.use(express.static("./../../views"));
//router.use(express.static("./test.html"));


router.get("/", (req, res) => {
    res.sendFile(path.resolve("views/index.html"));
    //console.log(path.resolve("views/index.html"));
});

module.exports = router;