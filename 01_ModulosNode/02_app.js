//const saludo = require('./02_saludos')

const {saludar: saludarRenamed, saludarHolaMundo} = require('./02_saludos')

//console.log(saludo.saludar('criaturitas del señor'));
//console.log(saludo.saludarHolaMundo());

console.log(saludarRenamed('criaturitas del señor'));
console.log(saludarHolaMundo());