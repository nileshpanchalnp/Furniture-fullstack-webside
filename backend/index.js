const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { chair_route } = require("./src/routes/chair");
const {sofa_routes} = require("./src/routes/sofa")
const {bed_routes} = require("./src/routes/bed")
const {user_router} = require("./src/routes/user")
const {OrderRouter} = require("./src/routes/order")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/chair", chair_route);
app.use("/sofa", sofa_routes);
app.use("/bed", bed_routes);
app.use("/user",user_router);
app.use("/checkout", OrderRouter);

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log(`server started at ${process.env.LOCAL_HOST}/`);
});
