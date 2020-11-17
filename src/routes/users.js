'use strict';

const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { body, query } = require('../controllers/validations/users');
const { cback_postUser, cback_putUser, cback_deleteUser, cback_getUser, cback_getAllUsers } = require('../controllers/users');

module.exports = () => {
    
    router.post('/users', 
        validator.body(body()),
        cback_postUser
    );

    router.put('/users', 
        validator.body(body()),
        cback_putUser
    );

    router.get('/Allusers/', cback_getAllUsers);

    router.get('/users/', 
        validator.query(query()),
        cback_getUser
    );

    router.delete('/users/', 
        validator.query(query()),
        cback_deleteUser
    );

    return router;
};

