
const http = require('http'); //importo el modulo

const courses = require('./cursos');// data harcodeada a simular sobre cursos


//creo el server (handle req's and res')
const server = http.createServer((req,res) => {

  const {method} = req; //saco el method de la request

  // valido request por method
  switch (method) {
    case 'GET':
      
      return handleGetRequest(req,res)
      break;

    default:

      console.log(`The server can't handle the method: ${method}`);
      break;
  }
})

// defino como manejo la request
function handleGetRequest(req,res) {
  const {url: path} = req //saco path de la request

  //valido request por path
  if (path === '/') {
    // en rooot, digo que tod bien y mando respuesta
    res.statusCode = 200;
    res.end('Welco to this server and API created using Node')
  } else if (path === '/courses') {
      // en /cursos, mando la info de todos los cursos
      res.statusCode = 200;
      res.end(JSON.stringify(courses.coursesInfo)) //mando en respuesta los datos de los cursos (en forma ee texto apra Tx)
  } else {
    
  }
}


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
}) //defijo el puerto donde está escuchando y digo qué hacer al prenderse.