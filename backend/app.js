const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// const cors = require("./middleware/cors");
const cors = require("cors");
const router = require("./routes");
const { MulterError } = require("multer");
require("./db/mongoose");

const app = express();

function multerErrors(err, req, res, next) {
    if (res.headersSent || !(err instanceof MulterError)) {
        return next(err);
    }
    res.statusMessage = err.name;
    return res.status(400).json(err);
}

// app.use(cors);
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(router);
app.use(multerErrors);

module.exports = app;
