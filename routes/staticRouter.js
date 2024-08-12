const express = require("express");
const URL = require("../models/user");
const router = express.Router();

router.get("/", async (_, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", (_, res) => {
  return res.render("signUp");
});

router.get("/login", (_, res) => {
  return res.render("login");
});

module.exports = router;
