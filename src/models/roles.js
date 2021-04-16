const pool = require("../database")

module.exports = function(){
    async function ListarRol(){
       let sql='select * from roles'
       return await pool.query(sql);
    }

    return{
        ListarRol
    }
}