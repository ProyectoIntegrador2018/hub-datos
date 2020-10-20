const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const cors = require("./middleware/cors");
const router = require("./routes");
require("./db/mongoose");

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(router);

module.exports = app;
