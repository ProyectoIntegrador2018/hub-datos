const projectModel = require("../models/Project");
const Project = require("../models/Project");

const getAllProjects = function (req, res) {
  Project.find({})
    .then(function (projects) {
      res.send(articulos);
    })
    .catch(function (err) {
      res.status(500).send(error);
    });
};

const newProject = function (req, res) {
  const project = new Project(req.body);
  project
    .save()
    .then(function () {
      return res.send(project);
    })
    .catch(function (err) {
      return res.status(400).send(err);
    });
};

const getProjectByID = function (req, res) {
  const _id = req.params.id;
  Project.findOne({ _id })
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
