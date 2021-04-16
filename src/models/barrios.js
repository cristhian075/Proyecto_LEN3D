const pool = require("../database")

module.exports = function(){
    async function ListarBarrio(){
       let sql='select * from barrios'
       return await pool.query(sql);
    }

    return{
        ListarBarrio
    }
}