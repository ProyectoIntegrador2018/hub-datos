const jwt = require("jsonwebtoken");
const userModel = require('./../models/User');

const { SECRET_TOKEN } = require('./../config');

const auth = ( req, res, next ) => {
    const { sessiontoken } = req.headers;

    if( !sessiontoken ) {
        res.statusMessage = "Session token missing in headers";
        return res.status(406).end();
    }

    jwt.verify( sessiontoken, SECRET_TOKEN, (err, decoded) => {
        if(err) {
            res.statusMessage = "Su sesión ha expirado. Por favor inicie sesión nuevamente.";
            return res.status(401).end();
        }
        userModel.findOne( { email: decoded.email })
            .then( user => {
                if(!user) {
                    res.statusMessage = "Usuario no encontrado"
                    return res.status(400).end();
                }
                req.user = user;
                next();
            })
    });

};

module.exports = auth;