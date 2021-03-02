const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_categoria', async(req,res)=>{
    const {id_categoria}= req.params;
    const categorias= await pool.query('delete from categorias where id_categoria = ?',[id_categoria]);
    res.redirect('/categorias/consultar');
}); 


router.get('/agregar', async(req,res)=>{
    res.render('categorias/agregar');
}); 
router.post('/agregar', async(req,res)=>{
            const { nombre_categoria, } = req.body;
            const newCategorias = {
            nombre_categoria,}
            
            await pool.query('insert into categorias set ?',[newCategorias]);
                res.redirect('/categorias/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const categorias = await pool.query('select * from categorias ');
         res.render('categorias/consultar',{categorias});
});    


router.get('/editar/:id_categoria',async(req,res)=>{
    const {  id_categoria } = req.params;
    const categorias = await pool.query('select * from categorias where id_categoria= ?',[id_categoria]);
    res.render('categorias/modificar',{categorias});

});

router.post('/editar/:id_categoria',async(req,res)=>{
    const {id_categoria} = req.params;
    const {nombre_categoria} = req.body;
    const updateCategoria ={nombre_categoria};
    await pool.query('update categorias set ? where id_categoria= ?',[  updateCategoria ,id_categoria]);
    res.redirect('/categorias/consultar');
});


module.exports = router;