const projectModel = require("../models/Project");

const getAllProjects = async function (req, res) {
  const project = await projectModel.find({});
  try {
    res.send(project);
  } catch (err) {
    res.status(500).send(err);
  }
};

const newProject = async function (req, res) {
  const project = new projectModel();
  project.nombre = "proyecto de prueba";
  project.descripcion = "descripcion de prueba";
  project.vision = "vision de prueba";
  project.tipo = "tipo de prueba";
  project.numeroTotalAlumnos = 12;
  project.metodologia = "metodologia de prueba";
  project.entregables = "entregables de prueba";
  project.estatus = "estatus de prueba";
  project.imagen = "imagen de prueba";
  try {
    await project.save();
    res.send(project);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProjectByID = function (req, res) {
  const _id = req.params.id;
  projectModel
    .findOne({ _id })
    .then(function (project) {
      if (!project) {
        return res.status(404).send({ error: `Project with ${_id} not found.` });
      }
      return res.status(project);
    })
    .catch(function (err) {
      return res.status(500).send({ error: error });
    });
};

module.exports = {
  getAllProjects: getAllProjects,
  newProject: newProject,
  getProjectByID: getProjectByID,
};
