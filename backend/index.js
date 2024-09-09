const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { chair_route } = require("./src/routes/chair");
const {sofa_routes} = require("./src/routes/sofa")
const {bed_routes} = require("./src/routes/bed")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/chair", chair_route);
app.use("/sofa", sofa_routes);
app.use("/bed", bed_routes);

app.listen(4000, () => {
  mongoose.connect("mongodb://localhost:27017/chair-data");
  console.log("server started at http://localhost:4000/");
});
