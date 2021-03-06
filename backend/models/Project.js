const mongoose = require("mongoose");
const uuid = require("uuid");
const companyModel = require("./Company.model");

const projectSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: uuid.v4,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    encargado: {
      type: String,
      required: true,
    },
    socios: {
      type: [String],
      required: true,
    },
    descripcionCorta: {
      type: String,
      required: true,
      minlength: 50,
      maxlength: 200,
    },
    descripcionLarga: {
      type: String,
      required: true,
      minlength: 100,
    },
    fechaInicio: {
      type: Date,
      required: true,
    },
    finalizo: {
      type: Boolean,
      required: true,
    },
    fechaFin: {
      type: Date,
      required: true
    },
    imagen: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;
