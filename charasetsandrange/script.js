var regex = /[^def]def/
var str1 = "This string contains adef";
var output = regex.test(str1);
console.log(output)