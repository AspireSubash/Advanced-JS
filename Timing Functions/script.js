// function Start() {
//   setTimeout(() => {
//     console.log('Good to learn Timing Functions in JS');
//   }, 2000);
// }

// var message = () => {
//   console.log('Good to learn Timing Functions in JS');
// };
// function Start() {
//   console.log('start');
//   setTimeout(message, 2000);
// }
var id = 0;
var message = () => {
  console.log('Good to learn Timing Functions in JS \n');
};

function Start() {
  id = setInterval(message, 2000);
}
function Stop() {
  clearInterval(id);
}
