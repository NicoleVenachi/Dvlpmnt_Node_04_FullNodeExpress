
const EventEmitter = require('events'); //clase
// const fs = require('fs') // module, no clase

// ----simulemos un evento llmado compra. genero compra, detecto evento y lo manejo

// creo event instacia del "módulo"
const emisorProductos = new EventEmitter(); //instancia del event emiter


// definir/manjear evento
emisorProductos.on('compra', (tatalCompra, numProductos) => {
  console.log(`Se realizó una compra por $${tatalCompra}`);
  console.log(`Se compró ${numProductos} productos`);
})

//emitir evento
emisorProductos.emit('compra', 500, 4);

