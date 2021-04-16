const express= require('express')
const router = express.Router();
const categoriasController = require('../../controllers/categoriasController')

router.get('/listarcategoria', categoriasController.ListarCategorias)


module.exports = router;