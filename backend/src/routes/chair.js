const express = require("express");
const path = require("path");
// tokenAuth
const { authToken } = require("../middleware/tokenAuth");

const {
  getChair,
  createChair,
  upolad,
  deleteChair,
  updateChair,
} = require("../controlls/chair");

const chair_route = express.Router();

chair_route.use("/img", express.static(path.join(__dirname, "../imgs")));

chair_route.get("/get", authToken, getChair);
chair_route.post("/create", upolad.single("poster"), createChair);
chair_route.delete("/delete/:id", deleteChair);
chair_route.put("/update/:id", upolad.single("poster"), updateChair);
module.exports = { chair_route };
