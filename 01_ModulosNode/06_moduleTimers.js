
function mostraTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

// mostraTema('Node'); // llamado directo

setTimeout(mostraTema, 10, 'Node');

function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 2000, 5,6); // llamo y le paso varios args

console.log('sincrono flag -1');
setImmediate(mostraTema,'Python'); //se ejecuta antes que el setTimeOut, porque ese men es asincrono (si "entro"  su rta del stack antes de que ingrese esta)
console.log('sincrono flag -2');

setInterval(mostraTema, 5000, 'Nada')