const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const universityModel = mongoose.model("University", universitySchema);

module.exports = universityModel;