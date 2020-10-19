const mongoose = require("mongoose");
const uuid = require("uuid");
var validator = require("validator");

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
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email invalido");
      }
    },
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  fechaDeNacimiento: {
    type: Date,
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
    default: null,
    required: false,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
