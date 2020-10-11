const projectModel = require("../models/Project");

const getAllProjects = async function (req, res) {
  const projects = await projectModel.find({});
  const paginas = 1;
  if (projects.length > 12) {
    paginas = Math.ceil(projects.length / 12);
  }
  try {
    res.status(200).send({
      projects,
      paginas,
    });
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
    res.status(200).send(project);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getProjectByID = async function (projectId, res) {
  const idParam = projectId;
  const project = await projectModel.findOne({
    id: idParam,
  });
  try {
    if (project) {
      return res.status(200).send(project);
    } else {
      return res.status(404).send({
        error: `No se encontro el proyecto con id ${idParam}`,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getHello = async function (req, res) {
  try {
    res.status(200).send("hello world");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllProjects: getAllProjects,
  newProject: newProject,
  getProjectByID: getProjectByID,
  getHello: getHello,
};
