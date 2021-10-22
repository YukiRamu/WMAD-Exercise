/* 1.What are the 3 types of for loop 
// 1: for - of
// 2: for - in 
// 3: for
*/

/* 2. Convert a standard javascript function to an arrow function */
function greeting(name) {
  return console.log(`Hello ${name}`);
}
greeting("Mary");

const greeting = (name) => {
  return console.log(`Hello ${name}`);
};
greeting("Mary");


/* 3. Use a switch statement to answer this 
https://www.codewars.com/kata/basic-mathematical-operations/train/javascript */

const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      break;
  }
};
basicOp('+', 4, 7);

// 4. Use any looping to answer this;
// https://www.codewars.com/kata/reversed-sequence/train/javascript
const reverseSeq = n => {
  let array = [];
  if (n > 0) {
    for (let i = 0; 0 < n; i++) {
      array.push(n);
      n--;
    }
    console.log(array);
  } else {
    console.error("please input a number bigger than 0");
  }
  return array;
};
reverseSeq(8);;

// 5. Just a comparison but good for understanding English
// https://www.codewars.com/kata/transportation-on-vacation/train/javascript

const rentalCarCost = (days) => {
  if (0 < days && days < 3) {
    console.log(40 * days);
    return 40 * days;
  } else if (3 <= days && days < 7) {
    console.log(40 * days - 20);
    return 40 * days - 20;
  } else if (7 <= days) {
    console.log(40 * days - 50);
    return 40 * days - 50;
  };
};
rentalCarCost(8);

//   6. Use conditions to answer this(a little harder ?);
// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

const feast = (beast, dish) => {
  let beastNameArray = [];
  let dishNameArray = [];
  beastNameArray = beast.split("");
  dishNameArray = dish.split("");

  if (beastNameArray.slice(-1)[0] == dishNameArray.slice(-1)[0] && beastNameArray[0] == dishNameArray[0]) {
    return true;
  } else {
    return false;
  }
};
feast("great blue heron", "garlic naan");