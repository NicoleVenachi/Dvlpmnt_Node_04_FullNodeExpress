
//importo express
const express = require('express');

const app = express(); // creo app de Exress

const {coursesInfo} = require('./cursos') //importo la data hardcodeada

// console.log(coursesInfo);

// ***Routing ***
app.get('/', (req,res) => {
  res.send('All courses')
})

const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})