const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_pedido', async(req,res)=>{
    const {id_pedido}= req.params;
    const pedidos= await pool.query('delete from pedidos where id_pedido = ?',[id_pedido]);
    res.redirect('/pedidos/consultar');
}); 


router.post('/agregar', async(req,res)=>{
            const { cantidad,id_usuario,id_produvto,id_servicio} = req.body;
            const newPedido = {
                cantidad,
                id_usuario,
                id_produvto,
                id_servicio}
            
            await pool.query('insert into pedidos set ?',[newPedido]);
                res.redirect('/pedidos/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const pedidos = await pool.query('select * from pedidos ');
         res.render('pedidos/consultar',{pedidos});
});    

router.get('/agregar', async(req, res) => {

    const usuarios = await pool.query('select * from usuarios');
    const productos = await pool.query('select * from productos');
    const servicios = await pool.query('select * from servicios');

    res.render('pedidos/agregar', { usuarios, productos, servicios });

});  

router.get('/editar/:id_pedido',async(req,res)=>{
    const {  id_pedido } = req.params;
    const pedidos = await pool.query('select * from pedidos where id_pedido= ?',[id_pedido]);
    res.render('pedidos/modificar',{pedidos});

});

router.post('/editar/:id_pedido',async(req,res)=>{
    const {id_pedido} = req.params;
    const {cantidad,id_usuario,id_produvto,id_servicio} = req.body;
    const updatePedido ={cantidad,id_usuario,id_produvto,id_servicio};
    await pool.query('update pedidos set ? where id_pedido= ?',[  updatePedido ,id_pedido]);
    res.redirect('/pedidos/consultar');


});


module.exports = router;