
//importo express
const express = require('express');

const {mathematics} = require('../datos/cursos').coursesInfo //importo la data hardcodeada


//  *********** Routers *******

const routerMathematics = express.Router(); //creo router


// ****** Routing de este router/objeto******


routerMathematics.get('/', (req,res) => { //mathematics courses
  res.send(JSON.stringify(mathematics)) //envio pero antes de Tx lo paso a texto
})

routerMathematics.get('/:topic', (req,res) => { //handle :URL PARAMETERS

  const topic = req.params.topic;

  const coursesToShow = mathematics.filter(course => course.topic === topic)

  if (coursesToShow.length===0  ) {
    return res.status(404).send(`No ${topic} courses found `)
  }

  res.send(JSON.stringify(coursesToShow)) //
})


// ******** Exporto router **********
module.exports = routerMathematics //lo asigno directamente al objeto exports, para importarlo de una