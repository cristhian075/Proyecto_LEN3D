const ciudadModel = require("../models/ciudades")

async function ListarCiudades(req, res) {
    const ciudades = await ciudadModel().ListarCiudad()
    res.render('ciudades/consultar', {ciudades})


}

module.exports = {
    ListarCiudades
}