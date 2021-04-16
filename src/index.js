const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
// inicio
const app = express();

//configuracion
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');


app.set('json spaces', 2);


//MIDDELWARE - peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/usuarios', require('./routes/usuarios/usuarios'));
app.use('/diezmos', require('./routes/diezmos'));
app.use('/barrios', require('./routes/barrios/barrios'));
app.use('/ciudades', require('./routes/ciudades/ciudades'));
app.use('/roles', require('./routes/roles/roles'));
app.use('/marcas', require('./routes/marcas/marcas'));
app.use('/servicios', require('./routes/servicios/servicios'));
app.use('/categorias', require('./routes/categorias/categorias'));
app.use('/productos', require('./routes/productos/productos'));
app.use('/pedidos', require('./routes/pedidos/pedidos'));
app.use('/facturas', require('./routes/facturas/facturas'));

// public - navegador puede acceder
app.use(express.static(path.join(__dirname, 'public')));

//iniciar servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});