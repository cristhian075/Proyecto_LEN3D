const express= require('express')
const router = express.Router();
const ciudadesController = require('../../controllers/ciudadesController')

router.get('/listarciudad', ciudadesController.ListarCiudades)


module.exports = router;