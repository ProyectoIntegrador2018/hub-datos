const { Router } = require("express");
const eventController = require("../controllers/Event");
const { auth, verifyRole } = require("../middleware/auth");
const upload = require('./../services/imageUpload');

const router = new Router();

/*
 * PROJECTS ROUTES
 * GET      /events             - Returns all the projects
 * POST     /events             - Creates a new project in the data base.
 * GET      /events/:id         - Searches a project by ID
 * PUT      /events/:id         - Edit a project by ID
 * DELETE   /events/:id         - Delete a project by ID
 * GET      /events/my-projects - All projects created by a user
 */
router.get("/", async (req, res) => {
  await eventController.getAllEvents(req, res);
});

router.get("/my-events", auth, eventController.userEvents);

router.post("/",
  auth,
  verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador", "maestro"]),
  upload,
  async (req, res) => {
    if (!req.file) {
      res.statusMessage = "La imagen del proyecto es requerida."
      return res.status(400).end();
    }
    await eventController.newEvent(req, res);
});

router.get("/:id", async (req, res) => {
  await eventController.geteEventByID(req.params.id, res);
});

router.put("/:id", auth, verifyRole(["investigador", "socio_comercial", "socio_tecnologico", "administrador"]), async (req, res) => {
  await eventController.editEventByID(req, res);
});

router.delete("/:id", auth, verifyRole(["administrador"]), async (req, res) => {
  await eventController.deleteEventByID(req.params.id, res);
});

module.exports = router;
