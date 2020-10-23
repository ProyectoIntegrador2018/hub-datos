module.exports.connectionURL = "mongodb+srv://hubdatos:2WvvsSQG7QmbtwDi@hubdatos.oijcd.mongodb.net/integrador?retryWrites=true&w=majority";

module.exports.secret = "suSuperSecret";

// JWT Token
module.exports.SECRET_TOKEN = process.env.SECRET_TOKEN || "secret"
// PORT
module.exports.PORT = process.env.PORT || "8000";