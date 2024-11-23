const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

// Procesar el cuerpo de la solicitud.
routerMatematicas.use(express.json());

//Routes
routerMatematicas.get('/', (req, res) => {
  res.json(matematicas);
});
  
//Route tema
routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema);
  
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.json(resultados);
});

//Metodo post
routerMatematicas.post('/', (req, res) => {
  let cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.json(matematicas);
});

module.exports = routerMatematicas;