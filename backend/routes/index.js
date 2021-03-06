const { Router } = require("express");
const projectsRoute = require("./project.route");
const usersRoute = require("./user.route");
const authRoute = require("./auth.route");
const universityRoute = require("./university.route");
const companyRoute = require('./company.route');
const eventsRoute = require('./event.route');

const router = new Router();

router.use("/projects", projectsRoute);
router.use("/users", usersRoute);
router.use("/iniciar-sesion", authRoute);
router.use("/universities", universityRoute);
router.use("/companies", companyRoute);
router.use("/events", eventsRoute)

//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});

module.exports = router;
