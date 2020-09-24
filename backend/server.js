const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { DATABASE_URL, PORT } = require("./config");
const api = require("./api");

const app = express();

app.use(morgan("dev"));
app.use("/api/v1", api);

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 8080");

    const settings = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    };

    new Promise((resolve, reject) => {
        mongoose.connect(DATABASE_URL, settings, (err) => {
            if (err) {
                return reject(err);
            }
            else {
                console.log("Base de datos conectada.");
                return resolve;
            }
        });
    })
        .catch(err => {
            console.log(err);
        });
});
