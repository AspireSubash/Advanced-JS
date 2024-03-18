// function abc(call) {
//   call();
//   call();
//   call();
//   call();
//   call();
//   call();
// }
// function call() {
//   console.log('Hello');
// }
// abc(call);

// function one() {
//   setTimeout(function () {
//     console.log('one');
//     two();
//   }, 3000);
// }
// function two() {
//   console.log('two');
// }
// one();

function person(friend, person2) {
  setTimeout(() => {
    console.log('My friend is ' + friend);
    person2();
  }, 3000);
}
function person2() {
  console.log('I am person 2');
}
person('Subash', person2);

// person(person2)
