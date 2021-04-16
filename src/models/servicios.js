const pool = require("../database")

module.exports = function(){
    async function ListarServicio(){
       let sql='select * from servicios'
       return await pool.query(sql);
    }

    return{
        ListarServicio
    }
}