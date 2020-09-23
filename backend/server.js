const express = require("express");
const morgan = require("morgan");
const app = express();
const data = require("./data/data.json");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/api/v1", (req, res) => {
  res.json(data);
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
