'use strict';

const user = require('../models/user');

var result;

function responses(res, status, result, error) {
    return res.status(status).json({
        error:error,
        result:result
    });
}

module.exports = {
    cback_postUser: async (req, res) =>{
        try {
            const { username, password } = req.body;

            result = await user.create({
                username,
                password
            });
            return responses(res, 200, result, false);
        } catch (error) {
            return responses(res, 500, 'error en el servidor', true);
        }
    },
    cback_putUser: async (req, res) =>{
        try {
            const { username, password } = req.body;
            const { id } = req.query;

            result = await user.findOneAndUpdate({
                id 
            },
            {
                username,
                password
            });
            return responses(res, 200, result, false);
        } catch (error) {
            return responses(res, 500, 'error en el servidor', true);
        }
    },
    cback_getUser: async (req, res) =>{
        try {
            const { id } = req.query;
            result = await user.findById({
                id 
            });

            return responses(res, 200, result, false);
        } catch (error) {
            return responses(res, 500, 'error en el servidor', true);
        }
    },
    cback_deleteUser: async (req, res) =>{
        try {
            const { id } = req.query;
            result = await user.findOneAndDelete({id});
            return responses(res, 200, result, false);
        } catch (error) {
            return responses(res, 500, 'error en el servidor', true);
        }
    },
    cback_getAllUsers: async (req, res) =>{
        try {
            result = await user.find();
            return responses(res, 200, result, false);
        } catch (error) {
            return responses(res, 500, 'error en el servidor', true);
        }
    }
};
