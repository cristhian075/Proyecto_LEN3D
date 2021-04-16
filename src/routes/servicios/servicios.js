const express= require('express')
const router = express.Router();
const serviciosController = require('../../controllers/serviciosController')

router.get('/listarservicio', serviciosController.ListarServicios)


module.exports = router;