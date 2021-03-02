const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_rol', async(req,res)=>{
    const {id_rol}= req.params;
    const roles= await pool.query('delete from roles where id_rol = ?',[id_rol]);
    res.redirect('/roles/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('roles/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { rol} = req.body;
            const newRoles = {
            rol,}
            
            await pool.query('insert into roles set ?',[newRoles]);
                res.redirect('/roles/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const roles = await pool.query('select * from roles ');
         res.render('roles/consultar',{roles});
});    


router.get('/editar/:id_rol',async(req,res)=>{
    const {  id_rol } = req.params;
    const roles = await pool.query('select * from roles where id_rol= ?',[id_rol]);
    res.render('roles/modificar',{roles});

});

router.post('/editar/:id_rol',async(req,res)=>{
    const {id_rol} = req.params;
    const {rol} = req.body;
    const updateRol ={rol};
    await pool.query('update roles set ? where id_rol= ?',[  updateRol ,id_rol]);
    res.redirect('/roles/consultar');
});


module.exports = router;