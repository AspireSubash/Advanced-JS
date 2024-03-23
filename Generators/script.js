function* generator() {
  let i = 0;
  var cars = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Nissan'];
  for (i = 0; i < cars.length; i++) {
    yield cars[i];
  }
}
let cars = generator();
console.log(cars.next());
console.log(cars.next().value);
console.log(cars.next().value);
console.log(cars.next().value);
