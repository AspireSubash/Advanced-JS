// function add(a, b) {
//     return a + b;
// }
// function fun(){
//     console.log("I am learning arrow functions");
// }
var arr1 = (a, b) => a + b;
var arr2 = () => console.log('I am learning arrow functions');
var arr3 = (newname) => console.log('I am a arrow functions');
console.log(arr1(10, 20));
arr2();
arr3();
