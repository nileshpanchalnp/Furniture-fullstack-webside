const mongoose = require("mongoose")

const sofaScrema = new mongoose.Schema({
    sofa_name:{
        type:String,
        require:true,
    },
    option:{
        type:Number,
        require:true,
    },
    price: {
        type:Number,
        require:true,
    },
    poster:{
        type:String,
        require:true,
    }
})

const sofaData = mongoose.model("sofaData",sofaScrema)
module.exports = {sofaData};