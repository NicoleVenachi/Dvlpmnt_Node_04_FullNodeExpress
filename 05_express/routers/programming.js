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
routerProgramming.post('/', (req, res) => { 
  
  let newCourse = req.body;//saco el new course del body

  programming.push(newCourse) //agrego a la data sored

  res.send(JSON.stringify(programming)) //mando como rta todos los cursos
})

// put method
routerProgramming.put('/:id', (req, res) => { 
  
  const {id} = req.params
  let courseToUpdate = req.body;//saco el new course del body

  const dataStoredArrayId = programming.findIndex((course) => course.id == id) //find id from an element into an array (data en programming es un array de objetos)


  if (dataStoredArrayId >= 0){ //sino se encuentra id,envía -1
    programming[dataStoredArrayId] = courseToUpdate //actualizo el en esa posicion con la new info
  }

  res.send(JSON.stringify(programming)) //mando como rta todos los cursos
})

// patch method
routerProgramming.patch('/:id', (req, res) => { //post de
  
  const {id} = req.params
  let infoToUpdate = req.body;//saco el new course del body

  const dataStoredArrayId = programming.findIndex((course) => course.id == id) //find id from an element into an array (data en programming es un array de objetos)


  if (dataStoredArrayId >= 0){ //sino se encuentra id,envía -1
    const courseToUpdate = programming[dataStoredArrayId] //saco el curso correspondiente a ese id

    Object.assign(courseToUpdate, infoToUpdate) // permite atualizar un objeto dentro de otro objeto, fuente que tenga esas mismas keys
  }

  res.send(JSON.stringify(programming)) //mando como rta todos los cursos
})




// ******** Exporto router **********
module.exports = routerProgramming //lo asigno directamente al objeto exports, para importarlo de una