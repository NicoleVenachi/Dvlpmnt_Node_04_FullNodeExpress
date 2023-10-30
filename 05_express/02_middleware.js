
//importo express
const express = require('express');

const app = express(); // creo app de Exress

// ***** Middlewares*****
// req => middleware => res


const logger = (req, res, next) => {
  //---- middleware definition---- sería esta logica pero dentro de una funcion
  const {method, url} = req
  const time = new Date().getFullYear()

  //middleware/mostrar el método accedido, el path y la hora de acceso
  console.log(method, url, time); 

  next() //pase a siguiente funcion (e.g., app.get)
}

// ---- paso el middleware aen el routing ----
app.get('/', logger, logger, (req, res) => {

  //simple send de donde estoy
  res.send( 'Home')
})


app.get('/about', logger, (req, res) => {
  res.send( 'About')
})

// port definition
const PORT = process.env.PORT || 3000; //regularmente, el servicio de deploy me asigna el puerto

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:/${PORT}`);
})