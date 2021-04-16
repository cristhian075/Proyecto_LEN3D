const marcaModel = require("../models/marcas")

async function ListarMarcas(req, res) {
    const marcas = await marcaModel().ListarMarca()
    res.render('marcas/consultar', {marcas})


}

module.exports = {
    ListarMarcas
}