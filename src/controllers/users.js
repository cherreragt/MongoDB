'use strict';

const { createUser, updateUser, findOneUser, findAllUsers, deleteOneUser } = require('./functions/users');

var result;

module.exports = {
    cback_postUser: async (req, res) =>{
        result = await createUser(req.body);
        res.send(result).status(200);
    },
    cback_putUser: async (req, res) =>{
        result = await updateUser(req.body, req.query.id);
        res.send(result).status(200);
    },
    cback_getUser: async (req, res) =>{
        result = await findOneUser(req.query.id);
        res.send(result).status(200);
    },
    cback_deleteUser: async (req, res) =>{
        result = await deleteOneUser(req.query.id);
        res.send(result).status(200);
    },
    cback_getAllUsers: async (req, res) =>{
        result = await findAllUsers();
        res.send(result).status(200);
    }
};
