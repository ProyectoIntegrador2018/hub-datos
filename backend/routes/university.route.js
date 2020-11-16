const { Router } = require("express");
const project = require("../controllers/University");

const router = new Router();

/*
 * UNIVERSITY ROUTES
 * GET      /universities             - Returns all universities
 * POST     /universities             - Creates a new university in the data base.
 */
router.get("/", async (req, res) => {
  await project.getAllUniversity(req, res);
});

router.post("/", async (req, res) => {
  await project.newUniversity(req, res);
});

module.exports = router;
