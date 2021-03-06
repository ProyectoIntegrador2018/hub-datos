const mongoose = require("mongoose");
const uuid = require("uuid");

const eventSchema = new mongoose.Schema({
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
  fecha: {
    type: Date,
    required: true,
  },
  encargado: {
    type: String,
    required: true
  },
  socios: {
    type: [String],
    required: true
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
  finalizo: {
    type: Boolean,
    required: true
  },
  cupo: {
    type: Number,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
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
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;
