//i - for case insesitive
//g - global for comming multiple  times
//exec - for execute and return object
//test - for testing return boolean
var regex = /Hello/g;
var str1 = 'Welcome to our Youtube channel. say Hello ignore me';
// var output = regex.exec(str1);
// console.log(output);
// var output = regex.test(str1);
// console.log(output);
//match - for matching
// var output = str1.match(regex);
// console.log(output);
//replace - for replacing
var output = str1.replace(regex, 'Hi');
console.log(output);
