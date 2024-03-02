const express = require('express');
const app = express();



require("dotenv").config({ path: "./.env" })

app.use('/uploads', express.static('uploads'));
const puerto = process.env.PORT || 3000;

const api = require('./routes/api');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);


app.listen(puerto, console.log(`Servidor iniciado en el puerto ${puerto}`));