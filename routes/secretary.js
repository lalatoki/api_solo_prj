// const { application } = require("express");
const express = require("express");
const data = require("../data");
const secretaryController = require("../controller/secretary");
const secs = data.secs;
const router = express.Router();

const secController = require("../sec/sec.controller");

// const secs = [
//     { name: "a-san", id: 1},
//     { name: "b-san", id: 2},
//     { name: "c-san", id: 3},
//     { name: "d-san", id: 4}
// ]

// console.log("secs in secretary.js", secs);
// router.get("/", (req, res) => {
//     res.send(secs);
// })

// GET method for DB
router.get("/", secController.index);


// GET method for json (for express testing)
router.get("/:id", (req, res) => {
    // const reqData = req.params.id;
    // res.send(`${req.params.id} info is shown`);
    // res.send(`${sec} info is shown`);

    // find single sec
    const sec = secs.find((s) => s.id == parseInt(req.params.id)); 
    res.send(sec);
})
// router.get("/info", (req, res) => {
//     res.send("is sec info.");
// })

// POST method for json
// router.post("/", (req, res) => {
//     const sec = {
//         name: req.body.name,
//         id: secs.length + 1
//     };
//     secs.push(sec);
//     res.send(secs);
// })

// POST method for DB
router.post("/", secretaryController.createSecretary);

// PUT method
router.put("/:id", (req, res) => {
    // find target sec by given id from URL
    const sec = secs.find((s) => s.id == parseInt(req.params.id)); 
    // update found sec
    sec.name = req.body.name;
    res.send(sec);
})

// DELETE method
router.delete("/:id", (req, res) => {
    // find target sec by given id from URL
    const sec = secs.find((s) => s.id == parseInt(req.params.id));
    // find the position of sec
    const idx = secs.indexOf(sec);
    // array.splice() remove item in position i from the array
    secs.splice(idx, 1); 
    res.send(sec);
})



module.exports = router;