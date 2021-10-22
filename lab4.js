// #1 Write a function that takes an array as a parameter and returns true if a value is repeated twice or more, else returns false
// Does the following array contains a duplicate
/* let array = [1,4,2,11,1,4,5];  Expected Output -  true */

const checkDuplicate = (array) => {
  const result = array.filter((elem, index) => array.indexOf(elem) === index);
  if (array.length > result.length) {
    return true;
  } else {
    return false;
  }
};
console.log(checkDuplicate([1, 4, 2, 11, 1, 4, 5]));

//#2 Write a function that takes in an array, and returns an object having keys as the  array items with their counts
// For given array, return an object with numbers and their counts
/* let array = [1,4,22,1,0,22,4,1];  Expected Output : { 1: 3, 4: 2, 22: 2, 0: 1} */

const getObjOfNumCount = (array) => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    if (Object.keys(obj).length === 0) {     // first time to create key
      obj[array[i]] = 1;
    } else if (obj.hasOwnProperty(array[i])) {
      obj[array[i]] += 1;
    } else { // no key yet
      obj[array[i]] = 1;
    }
  }
  return obj;
};
console.log(getObjOfNumCount([1, 4, 22, 1, 0, 22, 4, 1]));

// #3 Write a function that returns a new array/same array after removing Duplicates from an array
// let array = [1,4,22,1,0,22,4,1]; // Expected Output: [1,4,22,0]; // order can change

const removeDup = (array) => {
  return Array.from(new Set(array));
};
console.log(removeDup([1, 4, 22, 1, 0, 22, 4, 1]));

// #4 Write a function that returns a  the missing integer, provided a given array
// let array = [1,2,3,4,6,7,8,9,10]; * Expected Output: 5 / 

const findMissingInt = (array) => {
  for (let i = 0; i < array.length + 1; i++) {
    if (array[i] !== i + 1) {
      return i + 1;
    }
  }
};
console.log(findMissingInt([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// #5 Write a function that returns smallest and largest in an array
// let array = [1,11,-20,5,25,0, 3];  Expected output [-20, 25] */

const smallAndLarge = (array) => {
  const min = array.reduce((a, b) => Math.min(a, b));
  const max = array.reduce((a, b) => Math.max(a, b));
  return [min, max];
};
console.log(smallAndLarge([1, 11, -20, 5, 25, 0, 3]));

// #6  Write a function that Reverses an array without using Es6 Reverse Method
// let array = [1,2,3,4] -->Expected Output [4,3,2,1]

const reverseArray = (array) => {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};
console.log(reverseArray([1, 2, 3, 4]));