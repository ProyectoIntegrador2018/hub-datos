const { Router } = require('express');
const user = require("../controllers/User");
const { auth, verifyRole } = require("../middleware/auth");

const router = new Router();

/*
 * REGISTER ROUTES
 * GET  /users                      - Returns all registered users
 * POST /users/super_admin          - Create a new user with role super_admin    
 * POST /users/socio_tecnologico    - Create a new user with role socio_tecnologico
 * POST /users/investigador         - Create a new user with role investigador
 * POST /users/alumno               - Create a new user with role alumno
 * POST /users/maestro              - Create a new user with role maestro
 * POST /users/admin                - Create a new user with role admin
 * POST /users/socio_comercial      - Create a new user with role socio_comercial
 */
router.get("/", async (req, res) => {
    await user.getAllUsers(req, res);
});

router.post("/super_admin", auth, verifyRole(["super_admin"]), async (req, res) => {
    await user.userRegister(req.body, "super_admin", res);
});

router.post("/socio_tecnologico", async (req, res) => {
    await user.userRegister(req.body, "socio_tecnologico", res);
});

router.post("/investigador", async (req, res) => {
    await user.userRegister(req.body, "investigador", res);
});

router.post("/alumno", async (req, res) => {
    await user.userRegister(req.body, "alumno", res);
});

router.post("/maestro", async (req, res) => {
    await user.userRegister(req.body, "maestro", res);
});

router.post("/admin", auth, verifyRole(["super_admin"]), async (req, res) => {
    await user.userRegister(req.body, "administrador", res);
});

router.post("/socio_comercial", async (req, res) => {
    await user.userRegister(req.body, "socio_comercial", res);
});

module.exports = router;