const pool = require("../database")

module.exports = function(){
    async function ListarCiudad(){
       let sql='select * from ciudades'
       return await pool.query(sql);
    }

    return{
        ListarCiudad
    }
}