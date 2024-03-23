let stud1, stud2, stud3;
[stud1, stud2, ...stud3] = ['Subash', 'Arun', 'Ram', 'Sita', 'Gita'];
console.log(stud1, stud2, stud3);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a, b);

const car = {
  name: 'BMW',
  model: 'X5',
  year: 2019,
  wheel: function () {
    console.log('4 wheels');
  },
};

const { name, model, year, wheel } = car;
console.log(name, model, year, wheel);
