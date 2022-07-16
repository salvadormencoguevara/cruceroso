const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB

app.use(express.json());

app.use('/api/registrar', require('./routes/registro'));

app.listen(4000, () => {
        console.log('el servidor funciona por el puerto 4000');
    })