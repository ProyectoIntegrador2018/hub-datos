const { Router } = require('express');
const userController = require("../controllers/User");
const { auth, verifyRole } = require("../middleware/auth");
const multer = require('multer');

const router = new Router();

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/image\/(jpg|png)$/g)) {
            return cb(null, true);
        }
        return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', {...file, formatosValidos: "Solo se permiten archivos de tipo jpg y png"}), false);
    },
    limits: {
        fileSize: 2 * 1024 * 1024 // Max file sizes is 2MB
    }
}).single("imagen");

/*
 * REGISTER ROUTES
 * GET  /users                          - Returns all registered users
 * POST /users                          - Create a new user with the specified role in the request.   
 * POST /users/password-resets          - Create entry in DB and send link to reset password
 * PUT  /users/password-resets/:token   - Modify user password
 */
router.get("/", async (req, res) => {
    await userController.getAllUsers(req, res);
});

router.post("/", upload, (req, res) => {
    if(!req.file) {
        res.statusMessage = "Las credenciales son requeridas"
        return res.status(400).end();
    }
    userController.register(req, res);
});
router.post("/", auth, verifyRole(["super_admin"]), userController.protectedRegister);

/**
 * @api {post} /users/password-resets Send email
 * @apiParam {String} email Email address to receive the password reset token.
 * @apiSuccess (Success 202) 202 Accepted.
 * @apiError 404 Email doesn't exist
 */
router.post("/password-resets", userController.rpCreate);

/**
 * @api {put} /users/password-resets/:token Submit password
 * @apiParam {String{6..}} password User's new password.
 * @apiSuccess (Success 200) 200 OK.
 * @apiError 404 Token has expired or doesn't exist.
 */
router.put("/password-resets/:token", userController.rpUpdate);

module.exports = router;
