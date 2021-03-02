const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_marca', async(req,res)=>{
    const {id_marca}= req.params;
    const marcas= await pool.query('delete from marcas where id_marca = ?',[id_marca]);
    res.redirect('/marcas/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('marcas/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { marca} = req.body;
            const newMarca = {
            marca,}
            
            await pool.query('insert into marcas set ?',[newMarca]);
                res.redirect('/marcas/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const marcas = await pool.query('select * from marcas ');
         res.render('marcas/consultar',{marcas});
});    


router.get('/editar/:id_marca',async(req,res)=>{
    const {  id_marca } = req.params;
    const marcas = await pool.query('select * from marcas where id_marca= ?',[id_marca]);
    res.render('marcas/modificar',{marcas});

});

router.post('/editar/:id_marca',async(req,res)=>{
    const {id_marca} = req.params;
    const {marca} = req.body;
    const updateMarca ={marca};
    await pool.query('update marcas set ? where id_marca= ?',[  updateMarca ,id_marca]);
    res.redirect('/marcas/consultar');


});


module.exports = router;