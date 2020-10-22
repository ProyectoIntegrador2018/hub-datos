const { Router } = require('express');
const user = require("../controllers/User");

const router = new Router();

/*
 * Iniciar sesión
 * POST /iniciar-sesion - Generates a jsonwebtoken for a users with the correct credentials
 */
router.post("/", async (req, res) => {
    await user.login(req, res);
});

module.exports = router;
