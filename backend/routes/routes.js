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
router.get("/registrar/alumno", (req, res) => {
  res.send("Registrar alumno");
});
router.get("/registrar/maestro", (req, res) => {
  res.send("registrar maestro");
});
router.get("/registrar/admin", (req, res) => {
  res.send("registrar admin");
});
router.get("/registrar/socio_comercial", (req, res) => {
  res.send("registrar socio comercial");
});
router.post("/registrar/alumno");
router.post("/registrar/maestro");
router.post("/registrar/admin");
router.post("/registrar/socio_comercial");

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;
