
// ----simulo respuesta condigo asicorno
const deliveryStatus = () => {
  const status = Math.random() < 0.5 ? true: false;
  console.log(status);
  return status
}

//-------creo promesa (lanzo codigo asicrono, para hacer pedido)
const myPizzDelivery = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (deliveryStatus()) {
      resolve('No pasa nada viejito, pedido exitoso, pizza en camino')
    } else {
      reject('Se va a quedar con hambre bebé, ocurrió error en el pedido')
    }
  }, 2000);
})

myPizzDelivery
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
    //throw new Error(err);
  })