const express= require('express')
const router = express.Router();
const marcasController = require('../../controllers/marcasController')

router.get('/listarmarca', marcasController.ListarMarcas)


module.exports = router;