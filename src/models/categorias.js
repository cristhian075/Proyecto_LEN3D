const pool = require("../database")

module.exports = function(){
    async function ListarCategoria(){
       let sql='select * from categorias'
       return await pool.query(sql);
    }

    return{
        ListarCategoria
    }
}