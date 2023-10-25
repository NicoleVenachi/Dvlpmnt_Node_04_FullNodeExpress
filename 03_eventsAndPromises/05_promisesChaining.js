//func aysnc, pues no sé eso al server cuanto le tome

//creo función asíncrona
function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Sorting ${producto} from the store`);

    //simulo código asincrono
    setTimeout(() => {
      if (producto === 'tasse') { //valido/simulo que el producto es valido
        //asumamos que se simula ordenar el producto
        resolve('Product sorted')
      } else {
        reject('This product is not avaliable right now') //explicamos proque no se ordenó, porque no existe!
      }
    }, 2000);
  })
}

//ahora, debería crear callbacks (que hacer una vez se corre el código asincrnono)
//esta ser'a otra promesa a encaddenar/otra funcion as'incrona
function deliveryProcessing(respuesta) {
  //rta es lo que retorne el c'odigo as'incrono que lo llame
  return new Promise((resolve, reject) => {
    console.log('Processing response.....');
    console.log(`The response was: ${respuesta}`);

    setTimeout(() => {
      resolve(`thanks for your purchase, enjoy your product`);
    }, 4000);
  })
}

ordenarProducto('tasse')
  .then(response => {
    console.log('Response received');
    console.log(response);
    return deliveryProcessing(response)
  })
  .then(processedResponse => {
    console.log(processedResponse);
  })



