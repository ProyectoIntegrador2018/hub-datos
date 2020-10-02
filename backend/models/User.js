const mongoose = require("mongoose");
const uuid = require("uuid");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuid.v4,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["alumno", "maestro", "administrador, socio_comercial"],
    required: true,
  },
  universidad: {
    type: String,
    required: function () {
      return this.role == "alumno";
    },
    enum: ["ITESM", "UANL", "UDEM"],
  },
  compañia: {
    type: String,
    required: function () {
      return this.role == "socio_comercial";
    },
    enum: ["microsoft", "google", "chevron"],
  },
  password: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
