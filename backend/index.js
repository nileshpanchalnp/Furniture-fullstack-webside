const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { chair_route } = require("./src/routes/chair");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/chair/img", express.static("src/imgs"));
app.use("/chair", chair_route);

app.listen(8000, () => {
  mongoose.connect("mongodb://localhost:27017/chair-data");
  console.log("server started at http://localhost:8000/");
});
