const pool = require("../database")

module.exports = function () {
    async function ListarUsuario() {
        let sql = 'select * from usuarios'
        return await pool.query(sql);
    }

    async function AgregarUsuario(datos) {
        let sql = "insert into usuarios set ?"
        return await pool.query(sql, datos);
    }

    async function EliminarUsuario(datos) {
        let sql = "delete from usuarios where id_usuario = ?"
        return await pool.query(sql, datos);
    }

    async function ModificarUsuario(datos) {
        let sql = "update usuarios set nombres=?, apellidos=?, n_telefono=?, correo=?, direccion=?, id_ciudad=?, id_barrio=?, roles_id_rol=? where id_usuario=? "
        return await pool.query(sql, datos);
    }

    return {
        ListarUsuario,
        AgregarUsuario,
        EliminarUsuario,
        ModificarUsuario
    }
}