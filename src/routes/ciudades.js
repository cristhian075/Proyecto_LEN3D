const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_ciudad', async(req,res)=>{
    const {id_ciudad}= req.params;
    const ciudades= await pool.query('delete from ciudades where id_ciudad = ?',[id_ciudad]);
    res.redirect('/ciudades/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('ciudades/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { ciudad} = req.body;
            const newCiudad = {
            ciudad,}
            
            await pool.query('insert into ciudades set ?',[newCiudad]);
                res.redirect('/ciudades/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const ciudades = await pool.query('select * from ciudades ');
         res.render('ciudades/consultar',{ciudades});
});    


router.get('/editar/:id_ciudad',async(req,res)=>{
    const {  id_ciudad } = req.params;
    const ciudades = await pool.query('select * from ciudades where id_ciudad= ?',[id_ciudad]);
    res.render('ciudades/modificar',{ciudades});

});

router.post('/editar/:id_ciudad',async(req,res)=>{
    const {id_ciudad} = req.params;
    const {ciudad} = req.body;
    const updateCiudad ={ciudad};
    await pool.query('update ciudades set ? where id_ciudad= ?',[  updateCiudad ,id_ciudad]);
    res.redirect('/ciudades/consultar');


});


module.exports = router;