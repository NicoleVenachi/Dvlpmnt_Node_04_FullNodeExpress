//importo express
const express = require('express');
const {programming} = require('../datos/cursos').coursesInfo //importo la data hardcodeada


//  *********** Routers *******
const routerProgramming = express.Router() //creo router

// ******* Indico tipos de bodys a procesar (Middleware) ****** 

routerProgramming.use(express.json()) //proceso JSON

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

// post method
routerProgramming.post('/', (req, res) => { //post de
  
  let newCourse = req.body;//saco el new course del body

  programming.push(newCourse) //agrego a la data sored

  res.send(JSON.stringify(programming)) //mando como rta todos los cursos

})

// ******** Exporto router **********
module.exports = routerProgramming //lo asigno directamente al objeto exports, para importarlo de una