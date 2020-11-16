const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/image\/(jpeg|png)$/g)) {
            return cb(null, true);
        }
        return cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE', {...file, formatosValidos: "Solo se permiten archivos de tipo jpg y png"}), false);
    },
    limits: {
        fileSize: 2 * 1024 * 1024 // Max file sizes is 2MB
    }
}).single("imagen");

module.exports = upload;