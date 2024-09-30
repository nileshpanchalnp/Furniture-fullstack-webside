const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { chair_route } = require("./src/routes/chair");
const { sofa_routes } = require("./src/routes/sofa");
const { bed_routes } = require("./src/routes/bed");
const { user_router } = require("./src/routes/user");
const { Order_bed_Router } = require("./src/routes/order_bed");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chair", chair_route);
app.use("/sofa", sofa_routes);
app.use("/bed", bed_routes);
app.use("/user", user_router);
app.use("/checkout", Order_bed_Router);

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log(`server started at ${process.env.LOCAL_HOST}/`);
});
