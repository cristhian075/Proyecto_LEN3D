const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_usuario', async(req,res)=>{
    const {id_usuario}= req.params;
    const usuarios= await pool.query('delete from usuarios where id_usuario = ?',[id_usuario]);
    res.redirect('/usuarios/consultar');
}); 


router.post('/agregar', async(req,res)=>{
            const { nombres,apellidos,n_telefono,correo,direccion,id_ciudad,id_barrio,roles_id_rol} = req.body;
            const newUsuario = {
                nombres,
                apellidos,
                n_telefono,
                correo,
                direccion,
                id_ciudad,
                id_barrio,
                roles_id_rol}
            
            await pool.query('insert into usuarios set ?',[newUsuario]);
                res.redirect('/usuarios/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const usuarios = await pool.query('select * from usuarios ');
         res.render('usuarios/consultar',{usuarios});
});    

router.get('/agregar', async(req, res) => {

    const ciudades = await pool.query('select * from ciudades');
    const barrios = await pool.query('select * from barrios');
    const roles = await pool.query('select * from roles');

    res.render('usuarios/agregar', { ciudades, barrios, roles });

});  

router.get('/editar/:id_usuario',async(req,res)=>{
    const {  id_usuario } = req.params;
    const usuarios = await pool.query('select * from usuarios where id_usuario= ?',[id_usuario]);
    res.render('usuarios/modificar',{usuarios});

});

router.post('/editar/:id_usuario',async(req,res)=>{
    const {id_usuario} = req.params;
    const {nombres,apellidos,n_telefono,correo,direccion,id_ciudad,id_barrio,roles_id_rol} = req.body;
    const updateUsuario ={nombres,apellidos,n_telefono,correo,direccion,id_ciudad,id_barrio,roles_id_rol};
    await pool.query('update usuarios set ? where id_usuario= ?',[  updateUsuario ,id_usuario]);
    res.redirect('/usuarios/consultar');


});


module.exports = router;