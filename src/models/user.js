'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    }
});

module.exports = mongoose.model('user', user);
