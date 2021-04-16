const barrioModel = require("../models/barrios")

async function ListarBarrios(req, res) {
    const barrios = await barrioModel().ListarBarrio()
    res.render('barrios/consultar', {barrios})


}

module.exports = {
    ListarBarrios
}