const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    created_at : {
        type: Date,
        default: Date.now
    },
    updated_at :{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', userSchema); 