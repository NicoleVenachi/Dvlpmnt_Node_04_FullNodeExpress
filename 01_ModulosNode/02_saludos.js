function saludar(nombre) {
  return `Hola ${nombre}`
}

function saludarHolaMundo() {
  return 'Hola people'
}


//----con dot notaion
// module.exports.saludar = saludar; //es un objeto, lo modifico con dot notation
// module.exports.saludarHolaMundo = saludarHolaMundo;

//---asignando todo un objeto

module.exports = {
  saludar,
  saludarHolaMundo
}

// console.log(module.exports);