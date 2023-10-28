
const http = require('http'); //importo el modulo

const courses = require('./cursos');// data harcodeada a simular sobre cursos


//creo el server (handle req's and res')
const server = http.createServer((req,res) => {

  const {method} = req; //saco el method de la request

  // valido request por method
  switch (method) {
    case 'GET':
      
      return handleGetRequest(req,res)
    
    case 'POST':

      return handlePostRequest(req,res)

    default:

      console.log(`The server can't handle the method: ${method}`);
      break;
  }
})

// defino como manejo la request GET
function handleGetRequest(req,res) {
  const {url: path} = req //saco path de la request

  //valido request por path
  if (path === '/') {
    // en rooot, digo que tod bien y mando respuesta
    res.statusCode = 200;
    return res.end('Welco to this server and API created using Node')
  } else if (path === '/courses') {
      // en /cursos, mando la info de todos los cursos
      res.statusCode = 200;
      return res.end(JSON.stringify(courses.coursesInfo)) //mando en respuesta los datos de los cursos (en forma ee texto apra Tx)
  } else if(path === '/courses/programming') {
     // en /cursos/programming, mando la info de los cursos de programacion
      res.statusCode = 200;
      return res.end(JSON.stringify(courses.coursesInfo.programming)) //mando en respuesta los datos de los cursos de programacion
  }

    // en cualquier otra ruta, error y digo que recurso no existe
    res.statusCode = 400;
    return res.end("The requested resource doesn't exists") 
}

// defino como manejo la request POST
function handlePostRequest(req,res) {
  const {url: path} = req //saco path de la request

  //valido request por path
  if (path === '/courses/programming') {
    // vamos a agregar cursos en programacion (simulado de momento)
    res.statusCode = 200;
    return res.end('The server reeibed a POST request on /courses/programming')
  }

}


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
}) //defijo el puerto donde está escuchando y digo qué hacer al prenderse.