function makeOrder(Coffee) {
  return new Promise((resolve, reject) => {
    console.log('Making request for ' + Coffee);
    if (Coffee == 'Black Coffee') {
      resolve('Here is your Black Coffee');
    } else {
      reject('Sorry we are out of ' + 'Black Coffee');
    }
  });
}
function processOrder(order) {
  return new Promise((resolve, reject) => {
    console.log('Processing ' + order);
    resolve('Extra information for ' + order);
  });
}
// makeOrder('')
//   .then((order) => {
//     console.log('Order has been received');
//     return processOrder(order);
//   })
//   .then((processOrder) => {
//     console.log(processOrder);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function func1() {
  try {
    const order = await makeOrder('Black Coffe');
    console.log(order);
    const processOrders = await processOrder(order);
    console.log(processOrders);
  } catch (err) {
    console.log(err);
  }
}
func1();
