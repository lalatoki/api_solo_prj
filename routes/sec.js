// const { application } = require("express");
const express = require("express");
const router = express.Router();
const secController = require("../sec/sec.controller");

// GET method for DB
router.get("/", secController.index);

// POST method
router.post("/", secController.save);

// PUT method
router.put("/:id", secController.update);

// DELETE method
router.delete("/:id", secController.delete);



module.exports = router;