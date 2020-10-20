const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");
const user = require("../controllers/User");
const { auth, verifyRole } = require("./../middleware/auth");

/*
 * PROJECTS ROUTES
 * GET /projects - Returns all the projects
 * POST /projects - Creates a new project in the data base.
 * GET /projects/:id - Searches a project by id
 */
router.get("/projects", async (req, res) => {
  await project.getAllProjects(req, res);
});

router.post("/projects", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]), async (req, res) => {
  await project.newProject(req, res);
});

router.get("/projects/:id", async (req, res) => {
  await project.getProjectByID(req.params.id, res);
});

router.put("/projects/edit/:id", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]), async (req, res) => {
  await project.editProjectByID(req, res);
});
router.delete("/projects/delete/:id", auth, verifyRole(["administrador"]), async (req, res) => {
  await project.deleteProjectByID(req.params.id, res);
});

/*
REGISTER ROUTES
* GET /registrar/alumno - Returns all registered users
*/
router.get("/users", async (req, res) => {
  await user.getAllUsers(req, res);
});

router.post("/registrar/super_admin", auth, verifyRole(["super_admin"]), async (req, res) => {
  await user.userRegister(req.body, "super_admin", res);
});

router.post("/registrar/socio_tecnologico", async (req, res) => {
  await user.userRegister(req.body, "socio_tecnologico", res);
});

router.post("/registrar/investigador", async (req, res) => {
  await user.userRegister(req.body, "investigador", res);
});

router.post("/registrar/alumno", async (req, res) => {
  await user.userRegister(req.body, "alumno", res);
});

router.post("/registrar/maestro", async (req, res) => {
  await user.userRegister(req.body, "maestro", res);
});

router.post("/registrar/admin", auth, verifyRole(["super_admin"]), async (req, res) => {
  await user.userRegister(req.body, "administrador", res);
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
