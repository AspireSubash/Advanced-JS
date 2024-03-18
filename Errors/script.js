// function f1() {
//   console.log('This is function 1');
// }
// function f2() {
//   console.log('This is function 2');
// }
// f1();
// f1(); //Reference Errors
// function makeOrder() {
//   console.log('Order has been made');
// }
// try {
//   makeOrder();
//   DeviceMotionEvent();
// } catch (err) {
//   console.log('An error occured in your Program');
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// }

var a = 9;
if (a < 10) {
  throw new Error('a is less than 10');
} else {
  console.log('Working fine');
}
