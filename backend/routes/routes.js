const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");
const user = require("../controllers/User");

router.get("/", (req, res) => {
  res.send("hola mundo");
});


/*  "/projects"
 *    GET: finds all projects
 *    POST: creates a new project
 */
router.get("/projects", project.getAllProjects);
router.post("/projects", project.newProject);

/*  "/projects/:id"
 *    GET: find project by id
 */

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
