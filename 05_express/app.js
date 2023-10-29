
//importo express
const express = require('express');

const app = express(); // creo app de Exress

const {coursesInfo} = require('./datos/cursos') //importo la data hardcodeada
// console.log(coursesInfo);

// importo routers
const routerMathematics = require('./routers/mathematics')
const routerProgramming = require('./routers/programming')

// ********* Routers ********

app.use('/api/courses/programming', routerProgramming) //asigno router a un path


app.use('/api/courses/mathematics', routerMathematics)

// *** *****Routing (para rutas principales las dejo aquí)***
app.get('/', (req,res) => { //root (home)
  res.send('Welcome to the server')
})

app.get('/api/courses', (req,res) => { //all courses
  res.send(JSON.stringify(coursesInfo)) //envio pero antes de Tx lo paso a texto
})


// *******port definition
const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})