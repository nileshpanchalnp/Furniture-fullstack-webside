const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("Users",Users)
