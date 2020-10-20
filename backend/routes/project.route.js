const { Router } = require('express');
const project = require("../controllers/Project");
const { auth, verifyRole } = require("../middleware/auth");

const router = new Router();

/*
 * PROJECTS ROUTES
 * GET /projects - Returns all the projects
 * POST /projects - Creates a new project in the data base.
 * GET /projects/:id - Searches a project by id
 */
router.get("/", async (req, res) => {
    await project.getAllProjects(req, res);
});

router.post("/", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]), async (req, res) => {
    await project.newProject(req, res);
});

router.get("/:id", async (req, res) => {
    await project.getProjectByID(req.params.id, res);
});

router.put("/edit/:id", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]), async (req, res) => {
    await project.editProjectByID(req, res);
});

router.delete("/delete/:id", auth, verifyRole(["administrador"]), async (req, res) => {
    await project.deleteProjectByID(req.params.id, res);
});

module.exports = router;