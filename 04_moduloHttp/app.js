// import del modulo
const http = require('http');

// crear server
const server = http.createServer((req,res) => {
  res.end('Arbitrary server response.')
});

// defino donde escucha el server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`);
})

