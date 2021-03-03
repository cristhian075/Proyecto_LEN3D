const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/consultar', async(req,res)=>{
    const diezmos = await pool.query('select * from diezmos ');
        res.render('diezmos/consultar',{diezmos});
});  

router.get('/agregar', async(req, res) => {

    const usuarios = await pool.query('select * from usuarios');
    const ciudades = await pool.query('select * from ciudades');

    res.render('diezmos/agregar', { usuarios,ciudades });

});    

router.post('/agregar', async(req,res)=>{
    const {id_usuario} = req.body;
    const newDiezmo = {
        id_usuario}
        
        await pool.query('insert into diezmos set ?',[newDiezmo]);
            res.redirect('/diezmos/consultar');
}); 


module.exports = router;