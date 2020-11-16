const universityModel = require("../models/University.model");

const getAllUniversity = async function (req, res) {
  const university = await universityModel.find({});
  try {
    return res.status(200).send({
      university,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const newUniversity = async function (req, res) {
  const university = new universityModel();
  university.name = req.body.name;
  try {
    await university.save();
    return res.status(201).send(university);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  newUniversity: newUniversity,
  getAllUniversity: getAllUniversity,
};
