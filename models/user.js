const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  originalURL: {
    type: String,
  },

  shortId: {
    type: String,
  },
});

const URL = mongoose.model("Short-URL", UserSchema);

module.exports = URL;
