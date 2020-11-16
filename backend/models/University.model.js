const mongoose = require("mongoose");
const uuid = require("uuid");

const universitySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuid.v4,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const universityModel = mongoose.model("University", universitySchema);

module.exports = universityModel;
