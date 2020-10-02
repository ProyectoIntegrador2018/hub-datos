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
router.get("/projects", async (req, res) => {
  await project.getAllProjects(req, res);
});
router.post("/projects", async (req, res) => {
  await project.newProject(req, res);
});

router.get("/projects/:id", async (req, res) => {
  await project.getProjectByID(req, res);
});
/*
REGISTER ROUTES
*/
router.get("/registrar/alumno", async (req, res) => {
  await user.getAllUsers(req, res);
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

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;
