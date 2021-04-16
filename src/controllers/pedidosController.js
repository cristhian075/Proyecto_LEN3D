const pedidoModel = require("../models/pedidos")

async function ListarPedidos(req, res) {
    const pedidos = await pedidoModel().ListarPedido()
    res.render('pedidos/consultar', {pedidos})


}

module.exports = {
    ListarPedidos
}