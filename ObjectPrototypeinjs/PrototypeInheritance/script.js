// const Employee = {
//   Post: function () {
//     return 'A Software Engineer';
//   },
//   changeName: function (name) {
//     this.name = name;
//   },
// };
// var E1 = Object.create(Employee);
// E1.name = 'xyz';
// E1.role = 'Developer';
// E1.changeName('abc');
// console.log(E1);

// var E1 = Object.create(Employee, {
//   name: { value: 'Subash' , writable: true },
//   role: { value: 'Developer' },
// });

// E1.changeName('Ram');
// console.log(E1);

function Employee(name, id, salary) {
  this.name = name;
  this.id = id;
  this.salary = salary;
}
Employee.prototype.post = function () {
  return this.name + ' ' + 'is a content creator';
};
var E1 = new Employee('Divya', 123, 20000);
console.log(E1);
console.log(E1.post());

function Programmer(name, id, salary, language) {
  Employee.call(this, name, id, salary);
  this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
var P1 = new Programmer('Divya', 123, 20000);
console.log(P1);
