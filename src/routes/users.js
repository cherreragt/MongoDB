'use strict';

const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { body, query } = require('../controllers/validations/users');
const { cback_postUser, cback_putUser, cback_deleteUser, cback_getUser, cback_getAllUsers } = require('../controllers/users');
const validToken = require('../middlewares/verifity-jwt');

module.exports = () => {
    
    router.post('/users', 
        validator.body(body()),
        cback_postUser
    );

    router.put('/users', 
        [
            validToken,
            validator.query(query()),
            validator.body(body())
        ],
        cback_putUser
    );

    router.get('/Allusers/', validToken, cback_getAllUsers);

    router.get('/users/', 
        [validToken, validator.query(query())],
        cback_getUser
    );

    router.delete('/users/', 
        [validToken, validator.query(query())],
        cback_deleteUser
    );

    return router;
};

