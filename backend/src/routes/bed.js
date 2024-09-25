const express = require("express");
const path = require("path");
const { authToken } = require("../middleware/tokenAuth");

const {
  getBed,
  createBed,
  deletebed,
  updateBed,
  upload,
} = require("../controlls/bed");

const bed_routes = express.Router();
bed_routes.use("/img", express.static(path.join(__dirname, "../imgs")));

bed_routes.get("/get", authToken, getBed);
bed_routes.post("/create", upload.single("poster"), createBed);
bed_routes.delete("/delete/:id", authToken, deletebed);
bed_routes.put("/update/:id", upload.single("poster"), updateBed);
module.exports = { bed_routes };
