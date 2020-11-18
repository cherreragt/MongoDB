'use strict';

const user = require('../../models/user');

var result;

module.exports = {
    createUser: async (data) =>{
        try {
            const { username, password } = data;

            result = await user.create({
                username,
                password
            });
            return result;
        } catch (error) {
            console.log(`El error es: ${error}`);
            return false;
        }
    },
    updateUser: async (data, _id) =>{
        try {
            const { username, password } = data;

            result = await user.findOneAndUpdate({
                _id 
            },
            {
                username,
                password
            });
            return result;
        } catch (error) {
            console.log(`El error es: ${error}`);
            return false;
        }
    },
    findOneUser: async (_id) =>{
        try {
            result = await user.findById({
                _id 
            });
            return result;
        } catch (error) {
            console.log(`El error es: ${error}`);
            return false;
        }
    },
    findAllUsers: async () =>{
        try {
            result = await user.find();
            return result;
        } catch (error) {
            console.log(`El error es: ${error}`);
            return false;
        }
    },
    deleteOneUser: async (_id) =>{
        try {
            result = await user.findOneAndDelete({_id});
            return result;
        } catch (error) {
            console.log(`El error es: ${error}`);
            return false;
        }
    }
};

