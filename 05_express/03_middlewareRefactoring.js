
//importo express
const express = require('express');

const app = express(); // creo app de Exress

//importo middleware
const logger = require('./middlewares/logger')

//  --- paso middleware a las rutas/routers ----
app.use(logger)
// app.use('/', logger) //solo a root, 


// *******Routing**** 
// ---- paso el middleware en el routing ---
app.get('/', (req, res) => {

  //simple send de donde estoy
  res.send( 'Home')
})
app.get('/about', (req, res) => {
  res.send( 'About')
})

// port definition
const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})