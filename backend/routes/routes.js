const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");

router.get("/", (req, res) => {
  res.send("hola mundo");
});

/*
PROJECTS ROUTES
*/
router.get("/projects", project.getAllProjects);
router.post("/projects", project.newProject);
router.get("/projects/:id", project.getProjectByID);

//La ruta no existe
router.get("*", function (req, res) {
  res.send("La ruta no existe", 404);
});

module.exports = router;
