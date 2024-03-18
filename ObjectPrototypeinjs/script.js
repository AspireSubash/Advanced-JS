var abc = {
  Name: 'abc',
  Subject: 'Maths',
  Address: 'abc',
};
// console.log(abc);
function xyz(name, Subject, Address) {
  this.Name = name;
  this.Subject = Subject;
  this.Address = Address;
}
xyz.prototype.getName = function () {
  return this.Name;
};
xyz.prototype.getSubject = function () {
  return this.Subject;
};
xyz.prototype.grades = 'A';
var x1 = new xyz('abc', 'Maths', 'abc');
var x2 = new xyz('def', 'Science', 'def');
console.log(x1);
console.log(x2);
