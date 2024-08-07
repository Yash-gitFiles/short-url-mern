const express = require("express");
const generateShotURL = require("../controller/url");

const router = express.Router();

router.post("/", generateShotURL);

module.exports = router;
