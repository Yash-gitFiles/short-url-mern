const URL = require("../models/user");

async function generateShotURL(req, res) {
  const { originalURL } = req.body;
  const shortId = Date.now();
  const data = new URL({
    shortId,
    originalURL: originalURL,
    createdBy: req.user._id,
  });

  await data.save();
  return res.render("home", {
    id: shortId,
  });
  // res.send({
  //   shortId,
  // });
}

module.exports = generateShotURL;
