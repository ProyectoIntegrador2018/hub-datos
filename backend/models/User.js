const mongoose = require("mongoose");
const uuid = require("uuid");
var validator = require("validator");

const roles = ["alumno", "maestro", "investigador", "administrador", "socio_comercial", "socio_tecnologico", "super_admin'"];
const universities = ["ITESM", "UANL", "UDEM", null];
const companies = ["microsoft", "google", "chevron", null];

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
    enum: roles,
    required: true,
  },
  universidad: {
    type: String,
    default: null,
    required: function () {
      return this.role == "alumno";
    },
    enum: universities,
  },
  compañia: {
    type: String,
    default: null,
    required: function () {
      return this.role == "socio_comercial";
    },
    enum: companies,
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
