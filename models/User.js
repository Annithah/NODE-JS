const mongoose = require('mongoose')

// create the structure of users table
const User = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
});

//export the User model Schema
module.exports = mongoose.model('User',User)