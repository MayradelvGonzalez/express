// Curso de express: framework de node.js
const express = require('express')
const app = express() //equivale al server

const port = 3000
app.get('/', (req,res) => {
  res.sendFile('./static/index.html')
})

//crear una ruta para el metodo post

app.listen(port, (req,res) => {
    console.log("Escuchando en puerto 3000");
})
