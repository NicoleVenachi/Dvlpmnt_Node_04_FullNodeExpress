
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

app.get('/api/courses/mathematics', (req,res) => { //mathematics courses
  res.send(JSON.stringify(coursesInfo.mathematics)) //envio pero antes de Tx lo paso a texto
})


// port definition
const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})