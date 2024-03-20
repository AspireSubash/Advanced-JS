let regex = /Welc?ome?/;
let str1 = 'Welcom to our Youtube channel. say Welcome';
let output = regex.test(str1);
console.log(output);

let op = regex.exec(str1);
console.log(op);
