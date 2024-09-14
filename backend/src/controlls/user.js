const express = require("express");
const Users = require("../model/user");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Create User
const createUser = async (req, res) => {
  try {
    const { firstname, lastname, username, password, email } = req.body;
    if (!firstname || !lastname || !username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    await Users.create({ firstname, lastname, email, password, username });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Can't Create User ", error);
    res.status(400).json({ message: error.message });
  }
};

// Get All Users (Protected)
const getUSer = async (req, res) => {
  try {
    const user = await Users.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if ((!email && !username) || !password) {
      return res
        .status(400)
        .json({ message: "Username, Email and password are required" });
    }
    const user = await Users.findOne({
      $or: [{ email }, { username }],
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Can't Login User ", error);
    res.status(500).json({ message: error.message });
  }
};

// Delete User (New Functionality)
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from URL params
    const user = await Users.findByIdAndDelete(id); // Find and delete user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Can't Delete User ", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUSer, loginUser, deleteUser };
