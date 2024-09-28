const express = require("express");
const { Order } = require("../model/order");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1]; // Extracting token
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

const checkOut = async (req, res) => {
  const { poster, product_name, price, quantity, username } = req.body;
  const totalAmount = quantity * price;
  try {
    const existingOrder = await Order.findOne({ product_name, username });
    if (existingOrder) {
      existingOrder.quantity += quantity;
      existingOrder.totalAmount = existingOrder.quantity * price;
      await existingOrder.save();
      res
        .status(200)
        .json({ message: "Order updated successfully", order: existingOrder });
    } else {
      const newOrder = await Order.create({
        poster,
        product_name,
        price,
        quantity,
        username,
        totalAmount,
      });
      res
        .status(201)
        .json({ message: "Product added to cart", order: newOrder });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(501).json({ msg: error.msg });
  }
};

module.exports = { checkOut, getOrder, verifyToken };
