const express= require('express')
const router = express.Router();
const rolesController = require('../../controllers/rolesController')

router.get('/listarrol', rolesController.ListarRoles)


module.exports = router;