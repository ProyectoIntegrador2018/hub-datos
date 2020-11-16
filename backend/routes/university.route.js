const { Router } = require("express");
const project = require("../controllers/University");

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
  await project.getAllUniversity(req, res);
});

router.post("/", async (req, res) => {
  await project.newUniversity(req, res);
});

module.exports = router;
