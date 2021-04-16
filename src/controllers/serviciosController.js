const servicioModel = require("../models/servicios")

async function ListarServicios(req, res) {
    const servicios = await servicioModel().ListarServicio()
    res.render('servicios/consultar', {servicios})


}

module.exports = {
    ListarServicios
}