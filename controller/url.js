const shortid = require("shortid");
const URL = require("../models/user");

async function generateShotURL(req, res) {
  const body = req.body;
  const shortId = shortid();

  const data = new URL({
    shortId,
    originalURL: body.name,
  });

  await data.save();
  res.send({
    shortId,
  });
}

module.exports = generateShotURL;
