const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_produvto', async(req,res)=>{
    const {id_produvto}= req.params;
    const productos= await pool.query('delete from productos where id_produvto = ?',[id_produvto]);
    res.redirect('/productos/consultar');
}); 


router.post('/agregar', async(req,res)=>{
            const { nombre,stock,precio,codigo,imagen,id_marca,id_categoria} = req.body;
            const newProducto = {
                nombre,
                stock,
                precio,
                codigo,
                imagen,
                id_marca,
                id_categoria}
            
            await pool.query('insert into productos set ?',[newProducto]);
                res.redirect('/productos/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const productos = await pool.query('select * from productos ');
         res.render('productos/consultar',{productos});
});    

router.get('/agregar', async(req, res) => {

    const marcas = await pool.query('select * from marcas');
    const categorias = await pool.query('select * from categorias');

    res.render('productos/agregar', { marcas, categorias });

});  

router.get('/editar/:id_produvto',async(req,res)=>{
    const {  id_produvto } = req.params;
    const productos = await pool.query('select * from productos where id_produvto= ?',[id_produvto]);
    res.render('productos/modificar',{productos});

});

router.post('/editar/:id_produvto',async(req,res)=>{
    const {id_produvto} = req.params;
    const {nombre,stock,precio,codigo,imagen,id_marca,id_categoria} = req.body;
    const updateProducto ={nombre,stock,precio,codigo,imagen,id_marca,id_categoria};
    await pool.query('update productos set ? where id_produvto= ?',[  updateProducto ,id_produvto]);
    res.redirect('/productos/consultar');


});


module.exports = router;