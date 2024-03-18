//Object Constructor and constructor function
//Object Constructor
// //var obj_name = new Object();
// var rect2 = new Object();
// rect2.length = 10;
// rect2.breadth = 20;
// rect2.getarea = function(){
//     return this.length * this.breadth;
// }
// rect2.getperimeter = function(){
//     return 2 * (this.length + this.breadth);
// }
// console.log(rect2.getarea());
// console.log(rect2.getperimeter());
//Object Literal Methods
// var obj_name = {}
//Easy to use and faster than object constructor
// var rect3 = {
//     length: 10,
//     breadth: 20,
//     getarea: function(){
//         return this.length * this.breadth;
//     },
//     getperimeter: function(){
//         return 2 * (this.length + this.breadth);
//     }
// }
// console.log(rect3.getarea());
// console.log(rect3.getperimeter());
//We can create many objects as we want
console.log("Constructor in function in js");
function rect3(length, breadth){
    this.length = length;
    this.breadth = breadth;
    this.getarea = function(){
        return this.length * this.breadth;
    }
    this.getperimeter = function(){
        return 2 * (this.length + this.breadth);
    }
}
var rect4 = new rect3(10, 20);
console.log(rect4.length + " " + rect4.breadth);
console.log(rect4.getarea());
console.log(rect4.getperimeter());