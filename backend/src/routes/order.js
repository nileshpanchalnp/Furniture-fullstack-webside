const express = require("express");
const { checkOut, getOrder } = require("../controlls/order");

const OrderRouter = express.Router();

OrderRouter.post("/order", checkOut);
OrderRouter.get("/get", getOrder);

module.exports = { OrderRouter };
