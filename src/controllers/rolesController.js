const rolModel = require("../models/roles")

async function ListarRoles(req, res) {
    const roles = await rolModel().ListarRol()
    res.render('roles/consultar', {roles})


}

module.exports = {
    ListarRoles
}