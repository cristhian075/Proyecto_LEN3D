const express= require('express')
const router = express.Router();
const productosController = require('../../controllers/productosController')

router.get('/listarproducto', productosController.ListarProductos)


module.exports = router;