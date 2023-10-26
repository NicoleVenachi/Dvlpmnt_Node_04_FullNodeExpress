
// import del modulo
const http = require('http');

// crear server
const server = http.createServer((req,res) => {

  console.log('===> request (solucitud)');
  console.log(req.url); //veo el path de la solicitud
  console.log(req.method); //method HTTP de la solicitud
  console.log(req.headers); //headers de la request;

  console.log('===> response (respuesta)');
  res.statusCode = 500;
  console.log(res.statusCode); //accedo al código de estado de la response
  
  console.log(res.getHeaders()); //accedo al header de la respsonse
  res.setHeader('content-type', 'application/json') // modificar el header de la response
  console.log(res.getHeaders()); //accedo al header de la respsonse

  res.end('response'); //envio respeuesta
});

// defino donde escucha el server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
})

