const express = require("express");
const {
  getChair,
  createChair,
  upolad,
  deleteChair,
  updateChair,
} = require("../controlls/chair");

const chair_route = express.Router();
chair_route.use("/img", express.static("imgs"));

chair_route.get("/get", getChair);
chair_route.post("/create", upolad.single("poster"), createChair);
chair_route.delete("/delete/:id", deleteChair);
chair_route.put("/update/:id", updateChair);
module.exports = { chair_route };
