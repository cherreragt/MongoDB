'use strict';

module.exports = {
    cback_postUser: (req, res) =>{
        res.send('cback_getUser').status(200);
    },
    cback_putUser: (req, res) =>{
        res.send('cback_getUser').status(200);
    },
    cback_getUser: (req, res) =>{
        res.send('cback_getUser').status(200);
    },
    cback_deleteUser: (req, res) =>{
        res.send('cback_deleteUser').status(200);
    },
    cback_getAllUsers: (req, res) =>{
        res.send('cback_getAllUsers').status(200);
    }
};
