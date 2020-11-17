'use strict';

const Joi = require('joi');

module.exports = {
    body:() => Joi.object({
        user: Joi.string().required(),
        password: Joi.string().required()
    }),
    query:() => Joi.object({
        id:Joi.string().required()
    })
};

