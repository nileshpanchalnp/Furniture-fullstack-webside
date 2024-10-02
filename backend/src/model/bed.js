const mongoose = require("mongoose");

const bedScrema = new mongoose.Schema({
  bed_name: {
    type: String,
    require: true,
  },
  option: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  poster: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const bedData = mongoose.model("bedData", bedScrema);
module.exports = { bedData };
