const { Router } = require("express");
const project = require("../controllers/Event");
const { auth, verifyRole } = require("../middleware/auth");

const router = new Router();

/*
 * PROJECTS ROUTES
 * GET      /events               - Returns all the projects
 * POST     /events             - Creates a new project in the data base.
 * GET      /events/:id         - Searches a project by ID
 * PUT      /events/:id         - Edit a project by ID
 * DELETE   /events/:id         - Delete a project by ID
 * GET      /events/my-projects - All projects created by a user
 */
router.get("/", async (req, res) => {
  await project.getAllEvents(req, res);
});

router.get("/my-projects", auth, project.userProjects);

router.post("/", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]), async (req, res) => {
  await project.newEvent(req, res);
});

router.get("/:id", async (req, res) => {
  await project.geteEventByID(req.params.id, res);
});

router.put("/:id", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador"]), async (req, res) => {
  await project.editEventByID(req, res);
});

router.delete("/:id", auth, verifyRole(["administrador"]), async (req, res) => {
  await project.deleteEventByID(req.params.id, res);
});

module.exports = router;
