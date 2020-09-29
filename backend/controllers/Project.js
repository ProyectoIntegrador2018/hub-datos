const projectModel = require("../models/Project");

const getAllProjects = async function (req, res) {
<<<<<<< HEAD
  const project = await projectModel.find({}).exec();
=======
  const projects = await projectModel.find({});
  const paginas = 1;
  if(projects.length > 12) {
    paginas = Math.ceil(projects.length / 12);
  }
>>>>>>> backend
  try {
    res.send({projects, paginas});
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

const getProjectByID = async function (req, res) {
<<<<<<< HEAD
  const project = await projectModel.findOne({ id: req.params.projectid }).exec();
  console.log(req.params.projectid);
  try {
    if (project) {
      return res.status(project);
    }
    return res.status(404).send({ error: `Project with ${id} not found.` });
  } catch (err) {
    res.status(500).send(err);
=======
  const id = req.params.id;
  const project = await projectModel.findOne({id});
  if(!project) {
    return res.status(404).send({error: `Project with ${id} not found.`});
  } else {
    return res.status(200).send(project);
>>>>>>> backend
  }
};

module.exports = {
  getAllProjects: getAllProjects,
  newProject: newProject,
  getProjectByID: getProjectByID,
};
