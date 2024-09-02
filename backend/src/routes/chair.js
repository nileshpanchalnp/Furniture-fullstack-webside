const express = require("express");
const {
  getChair,
  createChair,
  deleteChair,
  updateChair,
} = require("../controlls/chair");
const { multerConfig } = require("../config/multer_config");

const chair_route = express.Router();

chair_route.get("/get", getChair);
chair_route.post("/create", multerConfig.single("img"), createChair);
chair_route.delete("/delete/:id", deleteChair);
chair_route.put("/update/:id", updateChair);
module.exports = { chair_route };
