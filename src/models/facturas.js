const pool = require("../database")

module.exports = function(){
    async function ListarFactura(){
       let sql='select * from facturas'
       return await pool.query(sql);
    }

    return{
        ListarFactura
    }
}