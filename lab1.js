/* You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle */

const getThirdAngle = (a, b) => {
  if (a > 0 && b > 0 && !isNaN(a) && !isNaN(b)) {
    let thirdAngle = 180 - a - b;
    console.log(`Third Angle is ${thirdAngle}`);
    return thirdAngle;
  } else {
    console.error("Invalid input");
  }
};
getThirdAngle(60, 50);

/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. 
Example: 
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7 */

const basicOp = (operation, value1, value2) => {
  let result = eval(`${value1} ${operation} ${value2}`);
  console.log(result);
  return result;
};
basicOp('*', 5, 5);

/* The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
Example output:
Hello, Mr. Spock  */

const sayHello = (name) => {
  let greeting;
  !isNaN(name) ? console.error("Invalid input. Only string format is valid") :
    greeting = `Hello, ${name}`;
  console.log(greeting);
  return greeting;
};
sayHello("Mr. Spock");

/* Your task is to sum the differences between consecutive pairs in the array in descending order
For example:
sumOfDifferences([2, 1, 10])
Returns 9
Descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell). */

const sumOfDifferences = (array) => {
  let sum = 0;
  array.sort(function (a, b) { return b - a; }); //sort in descending order

  for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i], array[i + 1]);
    sum += array[i] - array[i + 1];
    console.log(sum);
  }
  console.log(sum);
  return sum;
};
sumOfDifferences([2, 1, 10]);