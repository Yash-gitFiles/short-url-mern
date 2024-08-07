const mongoose = require("mongoose");

function connectionToDB() {
  console.log("connect to db");
  return mongoose.connect("mongodb://127.0.0.1:27017/short-url-practise");
}

module.exports = connectionToDB;
