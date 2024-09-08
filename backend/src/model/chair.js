const mongoose = require("mongoose");

const chairSchema = new mongoose.Schema({
  chair_name: String,
  option: Number,
  price: {
    type: Number,
    require: true,
  },
  poster: {
    type: String, 
    required: true,
  },
});

const chairData = mongoose.model("chairData", chairSchema);

module.exports = {chairData};
