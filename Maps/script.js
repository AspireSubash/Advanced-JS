var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
myCar.color = 'red';
myCar.make = 2012;
console.log(myCar);
var myMap = new Map();
myMap.set('make', 'Ford');
myMap.set('model', 'Mustang');
myMap.set('year', 1969);
myMap.set('color', 'red');
console.log(myMap);
console.log(myMap.get('year'));
var cars = [
  [1, 'BMW'],
  [2, 'Mercedes'],
  [3, 'Audi'],
];
var myMap = new Map(cars);
console.log(myMap.get(2));
for (let [key, value] of myMap) {
  console.log(key, value);
}
var yourCar = new Map(cars);
