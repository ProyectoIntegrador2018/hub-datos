const app = require("./index");
const { PORT } = require("./config");
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
