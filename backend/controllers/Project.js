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
  project.nombre = req.body.nombre;
  project.descripcion = req.body.descripcion;
  project.vision = req.body.vision;
  project.tipo = req.body.tipo;
  project.numeroTotalAlumnos = req.body.numeroTotalAlumnos;
  project.metodologia = req.body.metodologia;
  project.entregables = req.body.entregables;
  project.estatus = req.body.estatus;
  project.imagen = req.body.imagen;
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
