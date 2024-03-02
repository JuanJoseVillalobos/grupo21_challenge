const express = require('express');
const router = express.Router();
const path = require("path")
const cors = require('cors'); // Importa el módulo cors
const multer = require('multer');
const apiController = require('../controllers/api');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathimage = path.join(__dirname, '..', '..', 'uploads');
        cb(null, pathimage);
    },
    filename: (req, file, cb)=>{
        const fileNewName = 'img-' + Date.now() + path.extname(file.originalname);

        cb(null, fileNewName)
    }
})

const upload = multer({ storage })
// Usa el middleware cors en el enrutador
router.use(cors());

// Definición de tus rutas
router.get('/api/aspirantes', apiController.api);
router.get('/api/profesiones', apiController.profe);
router.post("/api/postularse", upload.single('imagen'), apiController.postularse)
module.exports = router;
