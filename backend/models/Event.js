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
  cupo: {
    type: Number,
    required: true,
  },
  ubicacion: {
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
