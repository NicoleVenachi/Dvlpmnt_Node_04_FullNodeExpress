
//importo express
const express = require('express');

const app = express(); // creo app de Exress

const {coursesInfo} = require('./cursos') //importo la data hardcodeada

// console.log(coursesInfo);

// ***Routing ***
app.get('/', (req,res) => { //root (home)
  res.send('Welcome to the server')
})

app.get('/api/courses', (req,res) => { //all courses
  res.send(JSON.stringify(coursesInfo)) //envio pero antes de Tx lo paso a texto
})

app.get('/api/courses/programming', (req,res) => { //programming courses
  res.send(JSON.stringify(coursesInfo.programming)) //envio pero antes de Tx lo paso a texto
})

app.get('/api/courses/programming/:language', (req,res) => { //handle :URL PARAMETERS

  // console.log(req.params);
  const language = req.params.language //saco los url params

  const coursesToShow = coursesInfo.programming.filter(course => course.language === language) //filtro info del curso buscado

  //mando results

  if (coursesToShow.length === 0) {
    //res.status(404); // not found resource (envio rta en una unica linea)
    return res.status(404).send(`No ${language} courses found `)
  }

  res.send(JSON.stringify(coursesToShow)) //
})

app.get('/api/courses/mathematics', (req,res) => { //mathematics courses
  res.send(JSON.stringify(coursesInfo.mathematics)) //envio pero antes de Tx lo paso a texto
})

app.get('/api/courses/mathematics/:topic', (req,res) => { //handle :URL PARAMETERS

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