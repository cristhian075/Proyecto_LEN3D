const pool = require("../database")

module.exports = function(){
    async function ListarMarca(){
       let sql='select * from marcas'
       return await pool.query(sql);
    }

    return{
        ListarMarca
    }
}