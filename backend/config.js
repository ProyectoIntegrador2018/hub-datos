module.exports.connectionURL = "mongodb+srv://admin:d32hEQeyV9EeTWPk@hubdatos.fjeed.mongodb.net/HUBDatos?retryWrites=true&w=majority";

module.exports.secret = "suSuperSecret";

// JWT Token
module.exports.SECRET_TOKEN = process.env.SECRET_TOKEN || "YEpbS5akfAz5";
//module.exports.SECRET_TOKEN = process.env.SECRET_TOKEN || "secret"
//contraseña de mongoDB: d32hEQeyV9EeTWPk
// PORT
module.exports.PORT = process.env.PORT || "8000";
