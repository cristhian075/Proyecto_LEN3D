const express = require('express')
const router = express.Router();
const usuariosController = require('../../controllers/usuariosController')

//Rutas HBS//
router.get('/listarusuario', usuariosController.ListarUsuarios)
router.post('/agregarusuario', usuariosController.AgregarUsuarios)
router.get('/eliminarusuario/:id', usuariosController.EliminarUsuarios)
router.get('/modificarusuario/:id', usuariosController.ModificarUsuarios)

//Rutas API//
router.get('/api/listarusuario', usuariosController.ListarUsuariosApi)
router.post('/api/agregarusuario', usuariosController.AgregarUsuariosApi)
router.delete('/api/eliminarusuario/:id', usuariosController.EliminarUsuariosApi)

module.exports = router;