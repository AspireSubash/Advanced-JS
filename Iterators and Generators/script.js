var cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Nissan'];
console.log(cars);
console.log(cars.length);
// for (let i of cars) {
//   console.log(i);
// }
function myIterator(cars) {
  let i = 0;
  return {
    next: function () {
      if (i < cars.length) {
        return { value: cars[i++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}
var iteratos = myIterator(cars);
console.log(iteratos.next().value);
console.log(iteratos.next().value);
console.log(iteratos.next().value);
console.log(iteratos.next().value);
console.log(iteratos.next().value);
console.log(iteratos.next());
