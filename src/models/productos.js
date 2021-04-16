const pool = require("../database")

module.exports = function(){
    async function ListarProducto(){
       let sql='select * from productos'
       return await pool.query(sql);
    }

    return{
        ListarProducto
    }
}