const { Order } = require("../model/order_bed");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");

// Multer storage configuration for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, "../imgs")); // Ensure the path is correctly set
//   },
//   filename: function (req, file, cb) {
//     const prefix = Date.now() + "-" + Math.round(Math.random() * 100000);
//     cb(null, prefix + "-" + file.originalname);
//   },
// });

// const Upload = multer({ storage });

// CheckOut function to create a new order
const checkOut = async (req, res) => {
  // console.log(req.body);

  const { bed_name, quantity, price, poster, username } = req.body;

  // const poster = req.file ? req.file.filename : " ";
  // const user = req.user["id"];
  // console.log(user);
  const totalAmount = price * quantity; // Calculate total amount based on quantity and price

  try {
    const newOrder = await Order.create({
      poster,
      bed_name,
      quantity,
      price,
      totalAmount,
      username,
    });
    res
      .status(201)
      .json({ message: "Order processed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders from the database
const getOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(501).json({ msg: error.msg });
  }
};

// Delete an order by its ID
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  const order = await Order.findByIdAndDelete({ _id: id });
  try {
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing order by its ID
const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { bed_name, quantity, price } = req.body;
  const poster = req.file ? req.file.filename : null;

  try {
    const order = await Order.findById({ _id: id });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update order fields
    order.bed_name = bed_name || order.bed_name;
    order.quantity = quantity || order.quantity;
    order.price = price || order.price;
    order.totalAmount = order.quantity * order.price; // Update totalAmount based on new quantity and price

    // Update poster if a new file was uploaded
    if (poster) {
      order.poster = poster;
    }

    // Save the updated order
    await order.save();

    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrder, checkOut, deleteOrder, updateOrder };
