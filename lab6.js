// 1) Given an array of integers nums and an integer target, return array with their indices
// nums = [2,7,11,15], target = 9 // Expected Output : [0,1]

const checkIndices = (array, target) => {
  for (let i = 0; i < array.length; i++) {  //i = 2
    for (let j = 1; j < array.length - 1; j++) { //j=1 ... 3
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};
console.log(checkIndices([2, 7, 11, 15], 9));

// 2) Given a square matrix, return the sum of the matrix diagonals. Write a function that returns the sum
// let matrix = [[1, 2, 3],
//              [4, 5, 6],
//              [7, 8, 9] ] // Expected Output : 25

const getMatrixDiagonals = (matrix) => {
  let diagonal1 = 0, diagonal2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      // Get elements for the main diagonal (diagonal-1). So I need to increment the i and j equally
      if (i === j) {
        diagonal1 += matrix[i][j];
      }
      // Get elements for the secondary diagonal (diagonal-2). So I need to decrement j. Taking the value of the inner array from reverse (i.e. last element comes first)
      if (j = (matrix.length) - i - 1) {
        diagonal2 += matrix[i][j];
      }
    }
  }
  return diagonal1 + diagonal2;
};
//console.log(getMatrixDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));;


// 3) Given a string. Count the number of lower and upper characters in it.S = "ckjkUUYII" Expected Output:  [4, 5]

const countNumOfLetter = (string) => {
  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  let upperCount = 0;
  let lowerCount = 0;
  for (let i = 0; i < string.split("").length; i++) {
    if (string.split("")[i].match(upper)) {
      upperCount++;
    } else if (string.split("")[i].match(lower)) {
      lowerCount++;
    }
  }
  return [lowerCount, upperCount];
};;
console.log(countNumOfLetter("ckjkUUYII"));;

// 4) Given a string str containing alphanumeric characters. The task is to calculate the sum of all the numbers present in the string.
// str = "1abc23" // Expected Output : 6

const calcSumOfNum = (str) => {
  let sum = 0;
  for (let i = 0; i < str.split("").length; i++) {
    if (!isNaN(str.split("")[i])) {
      sum += parseInt(str.split("")[i]);
    }
  }
  return sum;
};
console.log(calcSumOfNum("1abc23"));;

// 5) A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"NOTE: The secret society's name should be entirely uppercased.

const createName = (array) => {
  let name = "";
  for (let i = 0; i < array.length; i++) {
    name += array[i].slice(0, 1);
  }
  return name.split("").sort().join("");
};
console.log(createName(["Adam", "Sarah", "Malcolm"]));;

// 6) Write a function that converts an object into an array of keys and values.
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const objToArray = (obj) => {
  let array = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      array.push([key, obj[key]]);
    }
  }
  return array;
};
console.log(objToArray({
  D: 1,
  B: 2,
  C: 3
}));;

// NOTE: You cannot use Prebuild Object functions