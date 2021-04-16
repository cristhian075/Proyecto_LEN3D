const express= require('express')
const router = express.Router();
const pedidosController = require('../../controllers/pedidosController')

router.get('/listarpedido', pedidosController.ListarPedidos)


module.exports = router;