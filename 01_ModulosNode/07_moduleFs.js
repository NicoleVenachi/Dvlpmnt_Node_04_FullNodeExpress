
const fs = require('fs')

// ------- vamos a leer el html
// fs.readFile('index.html', 'UTF-8', (err, data) => {
  
//   if (err) {
//     // console.log(err);
//     throw err; //con throw del error, para detener ejecucion del terminal
//   } else {
//     console.log(data);
//   }

//   console.log('Mensaje ...');
// })


// ----- cambiemos nombre archibo
// fs.rename('index.html', 'main.html', (err)=> {
//   if (err) {
//     throw err; 
//   }
//   console.log('Nombre cambiado exitosamente!');
// })

// ------- agrgar contenido al final del archivo
// fs.appendFile('index.html', '<p> Hola </p>', (err) => {
//   if (err) {
//     throw err; 
//   }
//   console.log('Archivo actualizado!');
// })

// ------- modificar contenido del archvio
// fs.writeFile('index.html', 'new content', (err) => {
//   if (err) {
//     throw err; 
//   }
//   console.log('Contenido sobre-escrito con éxito!');
// })

//  --------- DELETE del archivo
fs.unlink('index.html', (err) => {
  if (err) {
    throw err; 
  }
  console.log('Arhcivo eliminado!');
})