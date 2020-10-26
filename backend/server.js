const app = require("./app");
require('dotenv').config()
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
