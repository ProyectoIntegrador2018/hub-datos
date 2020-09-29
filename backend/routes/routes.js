const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");

router.get("/", (req, res) => {
  res.send("hola mundo");
});

router.get("/api/all", project.getAllProjects);
router.get("/api/:projectid", project.getProjectByID);
router.post("/create", project.newProject);

//La ruta no existe
router.get("*", function (req, res) {
  res.send("La ruta no existe", 404);
});

module.exports = router;
