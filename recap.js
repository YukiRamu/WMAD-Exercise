// Question 1 :
console.log(y); //undefined
y = 1;
console.log(y); //1
var y = 2;
y = 3;
console.log(y); //3
var y;

// After hoisting
//var y;
//y=1
//y=2
//y=3

// Question 2 :
var a = 1;
console.log(a); //1
var a = 2;
console.log(a); //2

// After hoisting
//var a;
//a=1
//a=2

// Question 3:
var z = 1;
let z; //SyntaxError: Identifier 'z' has already been declared
console.log(z); //1  ----> Wrong answer : we get an error SyntaxError: Identifier 'z' has already been declared
console.log(z); //1
let z = 1;

// After hoisting
//var z;
//let z;
//z=1

// Question 4:
function hoistExample() {
  var a;
  console.log("Before: ", a); //undefined
  a = 10;
  console.log("After: ", a); //10
}
hoistExample();

// Question 5:
function hoistingExample() {
  console.log("Value of a in local scope: ", a); //undefined
}
console.log("Value of a in global scope: ", a);  //still undefined ---> Wrong answer: we get 1 as value because var is global keyword
var a = 1;
hoistingExample();

// After hoisting
// function declaration
// var a;
//a = 1
