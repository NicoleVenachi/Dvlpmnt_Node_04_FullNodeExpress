//importo express
const express = require('express');
const {programming} = require('../datos/cursos').coursesInfo //importo la data hardcodeada


//  *********** Routers *******
const routerProgramming = express.Router() //creo router

// ****** Routing de este router/objeto******

routerProgramming.get('/', (req,res) => { //programming courses
  res.send(JSON.stringify(programming)) //envio pero antes de Tx lo paso a texto
})

routerProgramming.get('/:language', (req,res) => { //handle :URL PARAMETERS

  // console.log(req.params);
  const language = req.params.language //saco los url params

  const coursesToShow = programming.filter(course => course.language === language) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(404).send(`No ${language} courses found `)
  }

  if (req.query.sort === 'views') {//saco ?QUERY PARAMETERS y ordeno de acuerdo al criterio
    return res.send( JSON.stringify(coursesToShow.sort((a,b)=> a.views - b.views)) ) // b-a, descendente; a=b, ascendente
  }


  res.send(JSON.stringify(coursesToShow)) //
})


routerProgramming.get('/:language/:level', (req,res) => { //handle :URL PARAMETERS (filtrar por 2 URL params)

  // console.log(req.params);
  const {language, level} = req.params //saco los url params



  const coursesToShow = programming.filter(course => ((course.language === language) && (course.level === level)) ) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(404).send(`No ${level} level ${language} courses found `)
  }

  res.send(JSON.stringify(coursesToShow)) //
})


// ******** Exporto router **********
module.exports = routerProgramming //lo asigno directamente al objeto exports, para importarlo de una