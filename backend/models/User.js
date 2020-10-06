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
    enum: ["alumno", "maestro", "investigador", "administrador, socio_comercial", "socio_tecnologico", "super_admin'"],
    required: true,
  },
  universidad: {
    type: String,
    default: null,
    required: function () {
      return this.role == "alumno";
    },
    enum: ["ITESM", "UANL", "UDEM", null],
  },
  compañia: {
    type: String,
    default: null,
    required: function () {
      return this.role == "socio_comercial";
    },
    enum: ["microsoft", "google", "chevron", null],
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
