const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  poster: String,
  product_name: String,
  price: String,
  quantity: { type: Number ,default:1 },
  username: { type: String },
  totalAmount: { type: Number }, // Added validation for total amount
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };
