const pool = require("../database")

module.exports = function(){
    async function ListarPedido(){
       let sql='select * from pedidos'
       return await pool.query(sql);
    }

    return{
        ListarPedido
    }
}