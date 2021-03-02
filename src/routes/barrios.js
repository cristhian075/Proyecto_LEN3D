const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_barrio', async(req,res)=>{
    const {id_barrio}= req.params;
    const barrios= await pool.query('delete from barrios where id_barrio = ?',[id_barrio]);
    res.redirect('/barrios/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('barrios/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { barrio} = req.body;
            const newBarrio = {
            barrio,}
            
            await pool.query('insert into barrios set ?',[newBarrio]);
                res.redirect('/barrios/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const barrios = await pool.query('select * from barrios ');
         res.render('barrios/consultar',{barrios});
});    


router.get('/editar/:id_barrio',async(req,res)=>{
    const {  id_barrio } = req.params;
    const barrios = await pool.query('select * from barrios where id_barrio= ?',[id_barrio]);
    res.render('barrios/modificar',{barrios});

});

router.post('/editar/:id_barrio',async(req,res)=>{
    const {id_barrio} = req.params;
    const {barrio} = req.body;
    const updateBarrio ={barrio};
    await pool.query('update barrios set ? where id_barrio= ?',[  updateBarrio ,id_barrio]);
    res.redirect('/barrios/consultar');


});


module.exports = router;