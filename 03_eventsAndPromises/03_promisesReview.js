
// simulo ---resultado codigo asincono---
const fulfilledPromise = false

// ----creo promesa (lanzo codigo asicrono)----
const testPromise = new Promise((resolve, reject) => {

  //----codigo asincorno--- (tendria respuesta positiva o negava, o condiciona para saber si se cumpio ono)
  setTimeout(() => {
    if (fulfilledPromise) {
      //----condicion/caso---- donde el código asincrono se ejecutó bien 
      //la salida de esta promesa, será el argumento enviado
      resolve('Fulfilled promise')
    } else {
      //-----condicion/caso------ donde el código asincrono no se ejecutó mal 
      //la salida de esta promesa, será el argumento enviado
      reject(new Error('Rejected primse'))
    }
  }, 2000);
})


// -- defino callbacks--- para operar resultado de codigo asincrono


testPromise
  .then((data) => {
    console.log(data); //simplemene imprimo resultado codigo asincorno
  })
  .catch((err) => {
    //console.log(err); 
    throw err; //arrojo error si se ejecuto mal
  })

