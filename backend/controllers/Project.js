const projectModel = require("../models/Project");
const userModel = require("./../models/User");

const getAllProjects = async function (req, res) {
  const projects = await projectModel.find({});
  let paginas = 1;
  if (projects.length > 12) {
    paginas = Math.ceil(projects.length / 12);
  }
  try {
    return res.status(200).send({
      projects,
      paginas,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

const newProject = async function (req, res) {
  const project = new projectModel();
  project.createdBy = req.user._id;
  project.nombre = req.body.nombre;
  project.encargado = req.body.encargado;
  project.socios = req.body.socios;
  project.descripcionCorta = req.body.descripcionCorta;
  project.descripcionLarga = req.body.descripcionLarga;
  project.fechaInicio = req.body.fechaInicio;
  project.finalizo = req.body.finalizo;
  if (req.body.finalizo) {
    project.fechaFinalizo = req.body.fechaFinalizo;
  }
  project.imagen = req.body.imagen;
  try {
    await project.save();
    return res.status(201).send(project);
  } catch (err) {
    return res.status(500).send(err);
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
    return res.status(500).send(err);
  }
};

const editProjectByID = async function (req, res) {
  try {
    var query = await projectModel
      .findOne({
        id: req.params.id,
      })
      .lean();
  } catch (err) {
    return res.status(500).send(err);
  }

  if (!query) {
    res.statusMessage = "Proyecto no encontrado.";
    return res.status(404).end();
  }

  if (req.user.role !== "admin") {
    if (!query.createdBy.equals(req.user._id)) {
      res.statusMessage = "No tiene permiso para editar este proyecto.";
      return res.status(403).end();
    }
  }

  const project = req.body;

  try {
    await projectModel.updateOne(query, project);
    let response = {
      ...query,
      ...project,
    };
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteProjectByID = async function (projectId, res) {
  const idParam = projectId;
  const query = await projectModel.findOne({
    id: idParam,
  });
  try {
    await projectModel.deleteOne(query);
    return res.status(200).send("SUCCES");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllProjects: getAllProjects,
  newProject: newProject,
  getProjectByID: getProjectByID,
  editProjectByID: editProjectByID,
  deleteProjectByID: deleteProjectByID,
};
