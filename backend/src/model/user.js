const mongoose = require("mongoose")

const UserShcema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})