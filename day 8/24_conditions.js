"use strict";
let thing1 = 'ball';
let thing2 = 'bat';
let thing3 = 'hat';
let things = ['ball', 'bat', 'hat'];
console.log(thing1 == things[0]);
console.log(thing2 != thing1);
console.log(thing3 == thing1);
console.log(thing3 == thing1);
let num1 = 1;
let num2 = 9;
let num3 = 10;
console.log(num1 == num3 + num2);
console.log(num3 == num2 + num1);
console.log(num3 != num1 + num2);
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num3 + num2);
console.log(num1 > num2 / num3);
console.log(num1 <= num2);
console.log(num1 >= num2);
let str1 = "Hello";
let str2 = "hello";
console.log(str1.toLowerCase() === str2); // True
console.log(str1.toLowerCase() !== str2); // False
let number = 24;
console.log(number == 24 && number < 30 || number < 20);
console.log(number != 20 || number <= 30 && number > 40);
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // True
console.log(arr.includes(6)); // False
