const express = require('express');
const app = express();

const PORT = 3030;

const api = require('./routes/api');

app.use(api);

app.listen(PORT, console.log(`Servidor iniciado en el puerto ${PORT}`));