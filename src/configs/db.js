'use strict';

const mongoose = require('mongoose'); 

module.exports = (url) =>{
    mongoose.Promise = global.Promise;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    console.log('Conectado a mongo DB');

    return mongoose;
};
