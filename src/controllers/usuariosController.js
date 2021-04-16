const usuarioModel = require("../models/usuarios")

async function ListarUsuarios(req, res) {
    const usuarios = await usuarioModel().ListarUsuario()
    res.render('usuarios/consultar', { usuarios })
}
async function ListarUsuariosApi(req, res) {
    const usuarios = await usuarioModel().ListarUsuario()
    res.status(200) . json(usuarios)
}

async function AgregarUsuarios(req, res) {
    const data = req.body;
    await usuarioModel().AgregarUsuario(data);
    res.redirect('/usuarios/listarusuario')
}
async function AgregarUsuariosApi(req, res) {
    const data = req.body;
    await usuarioModel().AgregarUsuario(data);
    res.status(200) . json({
        message:"Agregado con exito"
    })
}

async function EliminarUsuarios(req, res) {
    const data = req.params.id;
    await usuarioModel().EliminarUsuario(data);
    res.redirect('/usuarios/listarusuario')
}
async function EliminarUsuariosApi(req, res) {
    const data = req.params.id;
    await usuarioModel().EliminarUsuario(data);
    res.status(200) . json({
        message:"Eliminado con exito"
    })
}

async function ModificarUsuarios(req, body, res) {

    const data = {
        req, body, nombres,
        req, body, apellidos,
        req, body, n_telefono,
        req, body, correo,
        req, body, direccion,
        req, body, id_ciudad,
        req, body, roles_id_rol,
        req, params, id

    }
    await usuarioModel().ModificarUsuario(data);
    res.redirect('/usuarios/listarusuario')
}

module.exports = {
    ListarUsuarios,
    AgregarUsuarios,
    EliminarUsuarios,
    ModificarUsuarios,
    ListarUsuariosApi,
    AgregarUsuariosApi,
    EliminarUsuariosApi
}