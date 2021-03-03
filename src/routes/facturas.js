const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/delete/:id_factura', async(req,res)=>{
    const {id_factura}= req.params;
    const facturas= await pool.query('delete from facturas where id_factura = ?',[id_factura]);
    res.redirect('/facturas/consultar');
}); 


router.post('/agregar', async(req,res)=>{
            const { total,fecha_facturacion,id_pedido} = req.body;
            const newFactura = {
                total,
                fecha_facturacion,
                id_pedido}
            
            await pool.query('insert into facturas set ?',[newFactura]);
                res.redirect('/facturas/consultar');

}); 
router.get('/consultar', async(req,res)=>{
     const facturas = await pool.query('select * from facturas ');
         res.render('facturas/consultar',{facturas});
});    

router.get('/agregar', async(req, res) => {

    const pedidos = await pool.query('select * from pedidos');

    res.render('facturas/agregar', { pedidos });

});  

router.get('/editar/:id_factura',async(req,res)=>{
    const {  id_factura } = req.params;
    const facturas = await pool.query('select * from facturas where id_factura= ?',[id_factura]);
    res.render('facturas/modificar',{facturas});

});

router.post('/editar/:id_factura',async(req,res)=>{
    const {id_factura} = req.params;
    const {total,fecha_facturacion,id_pedido} = req.body;
    const updateFactura ={total,fecha_facturacion,id_pedido};
    await pool.query('update facturas set ? where id_factura= ?',[  updateFactura ,id_factura]);
    res.redirect('/facturas/consultar');


});


module.exports = router;