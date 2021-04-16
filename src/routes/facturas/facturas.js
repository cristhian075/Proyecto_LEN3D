const express= require('express')
const router = express.Router();
const facturasController = require('../../controllers/facturasController')

router.get('/listarfactura', facturasController.ListarFacturas)


module.exports = router;