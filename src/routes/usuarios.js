const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_usuario', async(req,res)=>{
    const {id_usuario}= req.params;
    const usuarios= await pool.query('delete from usuarios where id_usuario = ?',[id_usuario]);
    res.redirect('/usuarios/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('usuarios/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { nombre,edad,correo} = req.body;
            const newUsuario = {
            nombre,
            edad,
            correo}
            
            await pool.query('insert into usuarios set ?',[newUsuario]);
                res.redirect('/usuarios/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const usuarios = await pool.query('select * from usuarios ');
         res.render('usuarios/consultar',{usuarios});
});    


router.get('/editar/:id_usuario',async(req,res)=>{
    const {  id_usuario } = req.params;
    const usuarios = await pool.query('select * from usuarios where id_usuario= ?',[id_usuario]);
    res.render('usuarios/modificar',{usuarios});

});

router.post('/editar/:id_usuario',async(req,res)=>{
    const {id_usuario} = req.params;
    const {nombre,edad,correo} = req.body;
    const updateUsuario ={nombre,edad,correo};
    await pool.query('update usuarios set ? where id_usuario= ?',[  updateUsuario ,id_usuario]);
    res.redirect('/usuarios/consultar');


});



module.exports = router;