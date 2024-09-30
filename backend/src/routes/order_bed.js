const express = require("express");
const {
  checkOut,
  getOrder,
  deleteOrder,
  updateOrder,

} = require("../controlls/order_bed");
// const { upload } = require("../controlls/sofa");

const Order_bed_Router = express.Router();
Order_bed_Router.post("/order",  checkOut);
Order_bed_Router.get("/get", getOrder);
Order_bed_Router.delete("/delete/:id", deleteOrder);
Order_bed_Router.put("/update/:id", updateOrder);

module.exports = { Order_bed_Router };
