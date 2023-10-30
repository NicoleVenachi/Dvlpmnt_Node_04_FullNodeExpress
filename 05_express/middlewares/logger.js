
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

module.exports = logger