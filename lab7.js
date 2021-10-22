// 1. Write a function/polyfill for all objects to calculate their size.
// let object = { a : 1, b: 2, c: 3 }, object.getSize() // Expected output 3
Object.prototype.getSize = (obj) => {
  return Object.keys(obj).length;
};
console.log(Object.getSize({ a: 1, b: 2, c: 3 }));


// 2. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Note: Volume of a cylinder : V = πr2h

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolumeOfCylinder() {
    return Math.PI.toFixed(4) * this.radius * this.radius * this.height;
  }
}

const cylinder1 = new Cylinder(2, 3);
console.log(cylinder1.getVolumeOfCylinder());

// 3. Write a JavaScript program to create a Clock.
// Note: The output will come every second.

// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

let timer = setInterval(() => {
  const date = new Date();
 // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);

const getTime = () => {
  clearInterval(timer);
  timer = 0;
};
//show result for 10 seconds
setTimeout(() => {
  getTime();
}, 10000);

// 4. Write a function that prints 1, 2,3...10 after every 1 second

let counter = 1;
let timer2 = setInterval(() => {
 // console.log(counter);
  counter++;
  if (counter > 10) {
    stop();
  }
}, 1000);

const stop = () => {
  clearInterval(timer2);
  timer2 = 0;
};

// ************ OUTPUT BASED QUESTIONS *******************

const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);


// 6. console.log({a:1} == {a:1});console.log({a:1} === {a:1});


function getAge() {
  'use strict';
  let age = 21;
  console.log(age);
}

getAge();


console.log(!!null);
console.log(!!'');
console.log(!!1);


// 9. console.log([...'Ayush']);

// 10. let lang = 'javascript';(function(){
// let lang = 'java';
// })();

// console.log(lang);
// (function(){
// var lang2 = 'java';
// })();

// console.log(lang2);




// 11. const obj = { a: 'one', b: 'two', a: 'three' };console.log(obj)