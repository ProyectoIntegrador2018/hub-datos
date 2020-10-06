const express = require("express");
const morgan = require("morgan");
const app = express();
require("./db/mongoose");
const cors = require("./middleware/cors");
const router = require("./routes/routes");

var port = 8000;

app.use(cors);
app.use(express.json()); // parsea a json
app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
