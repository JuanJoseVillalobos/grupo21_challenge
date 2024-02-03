const express = require('express');
const app = express();

const PORT = 3030;

const home = require('./routes/home');

app.set("views", "../../client/mi-proyecto/views");

app.use(home);

app.listen(PORT, console.log(`Servidor iniciado en el puerto ${PORT}`));