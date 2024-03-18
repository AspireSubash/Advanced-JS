class Student {
  constructor(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }
  Org() {
    return 'I am ' + this.name + ' and my roll no is ' + this.roll;
  }
  getAge() {
    return 'The DOB of ' + this.name + ' is ' + this.age;
  }
  static add(a, b) {
    return a + b;
  }
}
var s1 = new Student('abc', 123, 'Progremmer');
console.log(s1);
console.log(s1.getAge());
console.log(Student.add(10, 20));

class Student1 extends Student {
  constructor(name, age, roll, language, section) {
    super(name, age, roll);
    this.language = language;
    this.section = section;
  }
  getMarks() {
    return 'The marks of ' + this.name + ' is ' + this.marks;
  }
}
var arun = new Student1('Arun', 20, 123, 'English', 'A');
console.log('The Sum of Numbers ' + Student1.add(10, 20));
console.log(arun);
