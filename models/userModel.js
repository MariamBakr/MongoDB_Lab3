const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 15
    },
    password:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        min: 13
    }
})

const User=mongoose.model('users',userSchema);

module.exports= User;