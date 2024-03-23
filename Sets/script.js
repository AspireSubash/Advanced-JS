// var mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(5);
// console.log(mySet);

// Set.prototype.getall = function (param) {
//   for (i of param) {
//     console.log(i);
//   }
// };

// mySet.getall(mySet);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mySet = new Set(arr);
mySet.delete(5);
console.log(mySet);
let myArr = Array.from(mySet);
mySet.clear();
console.log(myArr);
console.log(mySet);
