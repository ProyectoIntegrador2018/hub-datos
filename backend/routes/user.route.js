const { Router } = require('express');
const userController = require("../controllers/User");
const { auth, verifyRole } = require("../middleware/auth");

const router = new Router();

/*
 * REGISTER ROUTES
 * GET  /users  - Returns all registered users
 * POST /users  - Create a new user with the specified role in the request.    
 */
router.get("/", async (req, res) => {
    await userController.getAllUsers(req, res);
});

router.post("/", userController.register);
router.post("/", auth, verifyRole(["super_admin"]), userController.protectedRegister);

module.exports = router;
