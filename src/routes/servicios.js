const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_servicio', async(req,res)=>{
    const {id_servicio}= req.params;
    const servicios= await pool.query('delete from servicios where id_servicio = ?',[id_servicio]);
    res.redirect('/servicios/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('servicios/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { servicio, precio} = req.body;
            const newServicio = {
            servicio,
            precio}
            
            await pool.query('insert into servicios set ?',[newServicio]);
                res.redirect('/servicios/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const servicios = await pool.query('select * from servicios ');
         res.render('servicios/consultar',{servicios});
});    


router.get('/editar/:id_servicio',async(req,res)=>{
    const {  id_servicio } = req.params;
    const servicios = await pool.query('select * from servicios where id_servicio= ?',[id_servicio]);
    res.render('servicios/modificar',{servicios});

});

router.post('/editar/:id_servicio',async(req,res)=>{
    const {id_servicio} = req.params;
    const {servicio, precio} = req.body;
    const updateServicio ={servicio, precio};
    await pool.query('update servicios set ? where id_servicio= ?',[  updateServicio ,id_servicio]);
    res.redirect('/servicios/consultar');
});


module.exports = router;