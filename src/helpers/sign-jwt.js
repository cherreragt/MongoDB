'use strict';

const jwt = require('jsonwebtoken');

module.exports = (id) =>{
    return new Promise((resolve, reject)=>{
        const payload = {
            id
        };
        // eslint-disable-next-line no-process-env
        jwt.sign(payload, process.env.SECRETCODE, {
            expiresIn:'12h'
        }, (res, err)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(res);
        });
    });
};
