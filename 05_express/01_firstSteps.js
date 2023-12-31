
//importo express
const express = require('express');

const app = express(); // creo app de Exress

const {coursesInfo} = require('./cursos') //importo la data hardcodeada

// console.log(coursesInfo);

//  *********** Routers *******

const routerProgramming = express.Router() //creo router
app.use('/api/courses/programming', routerProgramming) //asigno router a un path

const routerMathematics = express.Router();
app.use('/api/courses/mathematics', routerMathematics)

// ***Routing ***
app.get('/', (req,res) => { //root (home)
  res.send('Welcome to the server')
})

app.get('/api/courses', (req,res) => { //all courses
  res.send(JSON.stringify(coursesInfo)) //envio pero antes de Tx lo paso a texto
})

routerProgramming.get('/', (req,res) => { //programming courses
  res.send(JSON.stringify(coursesInfo.programming)) //envio pero antes de Tx lo paso a texto
})

routerProgramming.get('/:language', (req,res) => { //handle :URL PARAMETERS

  // console.log(req.params);
  const language = req.params.language //saco los url params

  const coursesToShow = coursesInfo.programming.filter(course => course.language === language) //filtro info del curso buscado

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


routerProgramming.get('/api/courses/programming/:language/:level', (req,res) => { //handle :URL PARAMETERS (filtrar por 2 URL params)

  // console.log(req.params);
  const {language, level} = req.params //saco los url params



  const coursesToShow = coursesInfo.programming.filter(course => ((course.language === language) && (course.level === level)) ) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(404).send(`No ${level} level ${language} courses found `)
  }

  res.send(JSON.stringify(coursesToShow)) //
})



routerMathematics.get('/', (req,res) => { //mathematics courses
  res.send(JSON.stringify(coursesInfo.mathematics)) //envio pero antes de Tx lo paso a texto
})

routerMathematics.get('/:topic', (req,res) => { //handle :URL PARAMETERS

  const topic = req.params.topic;

  const coursesToShow = coursesInfo.mathematics.filter(course => course.topic === topic)

  if (coursesToShow.length===0  ) {
    return res.status(404).send(`No ${topic} courses found `)
  }

  res.send(JSON.stringify(coursesToShow)) //
})




// port definition
const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})