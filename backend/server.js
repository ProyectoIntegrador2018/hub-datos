const express = require("express");
const morgan = require("morgan");
const app = express();
require("./db/mongoose");
const data = require("./db/data.json");
const dbConfig = require("./config.js");
const mongoose = require("mongoose");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/api/v1", (req, res) => {
  res.json(data);
});

app.get("/api/v1/:id", (req, res) => {
  res.json(data.map((name) => name == req.param.id));
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
