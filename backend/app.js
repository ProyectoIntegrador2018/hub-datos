const express = require("express");
const morgan = require("morgan");
const app = express();
require("./db/mongoose");
const cors = require("./middleware/cors");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

app.use(cors);
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(router);

module.exports = app;
