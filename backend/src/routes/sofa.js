const express = require("express")
const path = require("path")
const { getSofa, createSofa, deleteSofa, updateSofa, upload } = require("../controlls/sofa")
const { authToken } = require("../middleware/tokenAuth");


const sofa_routes = express.Router()
sofa_routes.use("/img", express.static(path.join(__dirname, "../imgs")));

sofa_routes.get("/get", authToken, getSofa);
sofa_routes.post("/create", upload.single("poster"), createSofa);
sofa_routes.delete("/delete/:id", authToken, deleteSofa);
sofa_routes.put("/update/:id",upload.single("poster"),updateSofa);
module.exports={sofa_routes}