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

        userModel.findById( decoded._id )
            .then( user => {
                if( !user ) {
                    res.statusMessage = "Usuario no encontrado"
                    return res.status(400).end();
                }
                req.user = user;
                next();
            });
    });

};

const verifyRole = ( rolesList ) => {
    return (req, res, next) => {
        if( rolesList.includes(req.user.role) ) {
            next();
        }
        else {
            res.statusMessage = "El usuario no cuenta con los permisos necesarios para realizar la operación";
            return res.status(403).end();
        }
    };
};

module.exports = {
    auth,
    verifyRole
};