const mongoose = require("mongoose");
const uuid = require("uuid");
var validator = require("validator");
const companyModel = require("./Company.model");
const universityModel = require("./University.model");

const roles = ["alumno", "maestro", "investigador", "administrador", "socio_comercial", "socio_tecnologico", "super_admin'"];

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
    required: function () {
      return this.role == "alumno";
    },
    validate: {
      validator: ( universityName ) => {
        return universityModel.exists( { name: universityName} );
      },
      message: "Universidad no registrada en la base de datos."
    }
  },
  compañia: {
    type: String,
    required: function () {
      return this.role == "socio_comercial";
    },
    validate: {
      validator: (name) => {
        // return companyModel.findOne({name})
        //   .then( res => {
        //     if( !res ) {
        //       return Promise.resolve(false);
        //     }
        //     return Promise.resolve(true);
        //   })
        //   .catch( err => {
        //     return Promise.reject(err);
        //   });
        return companyModel.exists({name});
      },
      message: "Compañia no registrada en la base de datos."
    },
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
