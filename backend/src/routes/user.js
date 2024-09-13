const express = require("express");
const { createUser, getUSer, loginUser } = require("../controlls/user");

const user_router = express.Router();

user_router.get("/get", getUSer);
user_router.post("/register", createUser);
user_router.post("/login", loginUser);

module.exports = { user_router };
