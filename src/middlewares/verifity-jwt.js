'use strict';

const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) =>{
    try {
        const { token } = req.headers;

        if(!token){
            return res.status(401).json({
                error:true,
                msg: 'no hay token'
            });
        }
        // eslint-disable-next-line no-process-env
        const { uid } = jwt.verify(token, process.env.SECRETCODE);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(500).json({
            error:true,
            msg: 'token invalido'
        });
    }
};