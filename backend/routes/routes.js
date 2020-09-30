const express = require("express");
const router = express.Router();

const project = require("../controllers/Project");

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

//La ruta no existe
router.get("*", function (req, res) {
  res.send("La ruta no existe", 404);
});

module.exports = router;
