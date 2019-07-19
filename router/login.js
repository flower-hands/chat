const express = require("express");
const router  = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
    //console.log(path.resolve("views/login.html"));
});

router.post("/", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
    //console.log(path.resolve("views/login.html"));
});

module.exports = router;