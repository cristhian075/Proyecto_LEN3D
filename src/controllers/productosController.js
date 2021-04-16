const productoModel = require("../models/productos")

async function ListarProductos(req, res) {
    const productos = await productoModel().ListarProducto()
    res.render('productos/consultar', {productos})


}

module.exports = {
    ListarProductos
}