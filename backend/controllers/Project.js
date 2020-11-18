const projectModel = require("../models/Project");
const s3 = require("./../services/aws");

const getAllProjects = async function (req, res) {
  try {
    const projects = await projectModel.find({});
    let paginas = 1;
    if (projects.length > 12) {
      paginas = Math.ceil(projects.length / 12);
    }
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
  try {
    project.socios = JSON.parse(req.body.socios);
  } catch(e) {
    res.statusMessage = 'Error al parsear el arreglo de socios';
    return res.status(400).json(e);
  }
  project.descripcionCorta = req.body.descripcionCorta;
  project.descripcionLarga = req.body.descripcionLarga;
  project.fechaInicio = req.body.fechaInicio;
  try {
    project.finalizo = JSON.parse(req.body.finalizo);
  } catch (e) {
    res.statusMessage = 'Error al parsear finalizo';
    return res.status(400).json(e);
  }
  project.fechaFin = req.body.fechaFin;

  try {
    var s3Response = await s3.uploadS3(req, "projects");
  } catch (e) {
    res.statusMessage = "Error subiendo la foto a S3 (AWS)";
    return res.status(500).json(e);
  }
  project.imagen = s3Response.Location;

  try {
    await project.save();
    return res.status(201).send(project);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getProjectByID = async function (projectId, res) {
  const idParam = projectId;
  try {
    const project = await projectModel.findOne({
      id: idParam,
    });
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
    var query = await projectModel.findOne({ id: req.params.id }).lean();
  } catch (err) {
    return res.status(500).json(err);
  }

  if (!query) {
    res.statusMessage = "Proyecto no encontrado.";
    return res.status(404).end();
  }

  if (req.user.role !== "administrador") {
    if (!query.createdBy.equals(req.user._id)) {
      res.statusMessage = "No tiene permiso para editar este proyecto.";
      return res.status(403).end();
    }
  }

  let project = req.body;
  let fileName = query.imagen.split("/");
  fileName = fileName[fileName.length - 1];
  try {
    delete project.imagen
  } catch(e) {
    res.statusMessage = "Error borrando project.imagen";
    return res.status(500).json(e);
  }
  
  if (req.file) {
    try {
      let s3Response = await s3.uploadS3(req, "projects");
      project.imagen = s3Response.Location;
    } catch (e) {
      res.statusMessage = "Error subiendo la foto a S3 (AWS)";
      return res.status(500).json(e);
    }

    try {
      await s3.deleteS3("projects", fileName);
    } catch (e) {
      res.statusMessage = "Error borrando la foto vieja en S3 (AWS)";
      return res.status(500).json(e);
    }
  }

  try {
    await projectModel.updateOne(query, project, {runValidators: true});
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
  try {
    const query = await projectModel.findOne({
      id: idParam,
    });
    await projectModel.deleteOne(query);
    return res.status(200).send("SUCCES");
  } catch (err) {
    res.status(500).send(err);
  }
};

const userProjects = async (req, res) => {
  let projects;
  try {
    projects = await projectModel.find({ createdBy: req.user._id });
  } catch (e) {
    return res.status(500).json(e);
  }
  return res.status(200).json(projects);
};

module.exports = {
  getAllProjects: getAllProjects,
  newProject: newProject,
  getProjectByID: getProjectByID,
  editProjectByID: editProjectByID,
  deleteProjectByID: deleteProjectByID,
  userProjects: userProjects,
};
