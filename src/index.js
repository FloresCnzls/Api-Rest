const express = require('express');
const app = express();
const morgan = require ('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use(require('./routes'));
app.use('/api/integrantes',require('./routes/integrantes'));

//Iniciando el servidor
app.listen(3000, () => {
    console.log(`Server en el puerto ${app.get('port')}`);
});