const { Router } = require("express");
const project = require("../controllers/Project");
const { auth, verifyRole } = require("../middleware/auth");
const upload = require('./../services/imageUpload');

const router = new Router();

/*
 * PROJECTS ROUTES
 * GET      /projects             - Returns all the projects
 * POST     /projects             - Creates a new project in the data base.
 * GET      /projects/:id         - Searches a project by ID
 * PUT      /projects/:id         - Edit a project by ID
 * DELETE   /projects/:id         - Delete a project by ID
 * GET      /projects/my-projects - All projects created by a user
 */
router.get("/", async (req, res) => {
  await project.getAllProjects(req, res);
});

router.get("/my-projects", auth, project.userProjects);

router.post("/",
  auth,
  verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]),
  upload,
  async (req, res) => {
    if (!req.file) {
      res.statusMessage = "La imagen del proyecto es requerida."
      return res.status(400).end();
    }
    await project.newProject(req, res);
});

router.get("/:id", async (req, res) => {
  await project.getProjectByID(req.params.id, res);
});

router.put("/:id",
  auth,
  verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]),
  upload,
  async (req, res) => {
    await project.editProjectByID(req, res);
});

router.delete("/:id", auth, verifyRole(["administrador"]), async (req, res) => {
  await project.deleteProjectByID(req.params.id, res);
});

module.exports = router;
