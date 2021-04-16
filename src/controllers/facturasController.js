const facturaModel = require("../models/facturas")

async function ListarFacturas(req, res) {
    const facturas = await facturaModel().ListarFactura()
    res.render('facturas/consultar', {facturas})


}

module.exports = {
    ListarFacturas
}