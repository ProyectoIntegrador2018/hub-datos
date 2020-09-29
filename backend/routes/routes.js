const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");
const user = require("../controllers/User");

router.get("/", (req, res) => {
  res.send("hola mundo");
});

/*
PROJECTS ROUTES
*/
router.get("/projects", project.getAllProjects);
router.post("/projects", project.newProject);
router.get("/projects/:id", project.getProjectByID);

/*
REGISTER ROUTES
*/
router.post("/registrar/alumno");
router.post("/registrar/maestro");
router.post("/registrar/admin");

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;
