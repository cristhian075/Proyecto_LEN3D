const categoriaModel = require("../models/categorias")

async function ListarCategorias(req, res) {
    const categorias = await categoriaModel().ListarCategoria()
    res.render('categorias/consultar', {categorias})


}

module.exports = {
    ListarCategorias
}