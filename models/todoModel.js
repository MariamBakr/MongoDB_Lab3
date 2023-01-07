const mongoose= require('mongoose');
const User = require('../models/userModel');

const todoSchema=mongoose.Schema({
    title:{
        type:String,
        indexed: true,
        required: true,
        min:5,
        max: 20
    },
    status:{
        type: String,
        default:"to-do"
    },
    tags:{
        type:[String],
        max: 10
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
} ,{timestamps:true})

const Todo= mongoose.model('todos',todoSchema)
module.exports=Todo