const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("is mob.");
})
router.get("/info", (req, res) => {
    res.send("is mob info.");
})

module.exports = router;