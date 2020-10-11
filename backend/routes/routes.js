const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");
const user = require("../controllers/User");
const auth = require("./../middleware/auth");

router.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

/*
 * PROJECTS ROUTES
 * GET /projects - Returns all the projects
 * POST /projects - Creates a new project in the data base.
 * GET /projects/:id - Searches a project by id
 */
router.get("/projects", async (req, res) => {
  await project.getAllProjects(req, res);
});

router.post("/projects", async (req, res) => {
  await project.newProject(req, res);
});

router.get("/projects/:id", async (req, res) => {
  await project.getProjectByID(req.params.id, res);
});

/*
REGISTER ROUTES
* GET /registrar/alumno - Returns all registered users
*/
router.get("/users", async (req, res) => {
  await user.getAllUsers(req, res);
});

router.get("/registrar/alumno", auth, async (req, res) => {
  res.send("registrar alumno");
});

router.get("/registrar/maestro", (req, res) => {
  res.send("registrar maestro");
});

router.get("/registrar/admin", (req, res) => {
  res.status(200).send("registrar admin");
});

router.get("/registrar/socio_comercial", (req, res) => {
  res.send("registrar socio comercial");
});

router.post("/registrar/alumno", async (req, res) => {
  await user.userRegister(req.body, "alumno", res);
});

router.post("/registrar/maestro", async (req, res) => {
  await user.userRegister(req.body, "maestro", res);
});

router.post("/registrar/admin", async (req, res) => {
  await user.userRegister(req.body, "admin", res);
});

router.post("/registrar/socio_comercial", async (req, res) => {
  await user.userRegister(req.body, "socio_comercial", res);
});

/*
 * Iniciar sesión
 * POST /iniciar-sesion - Generates a jsonwebtoken for a users with the correct credentials
 */
router.post("/iniciar-sesion", async (req, res) => {
  await user.login(req, res);
});

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;
