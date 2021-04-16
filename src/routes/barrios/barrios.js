const express= require('express')
const router = express.Router();
const barriosController = require('../../controllers/barriosController')

router.get('/listarbarrio', barriosController.ListarBarrios)


module.exports = router;