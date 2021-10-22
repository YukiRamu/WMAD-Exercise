// 1) Write a function to count odd and even numbers in an array
// let array = [1,4,11,20,55,0,4] // Expected Output = [3, 4]

const countOddAndEvenNum = (array) => {
  let oddCounter = 0;
  let evenCounter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenCounter++;
    } else {
      oddCounter++;
    }
  }
  return [oddCounter, evenCounter];
};
console.log(countOddAndEvenNum([1, 4, 11, 20, 55, 0, 4]));

// 2) Write a function to Move all the 0's on left and 1's on right
// let array = [1,0,1,1,1,0,1,0,0] // Expected Output [0,0,0,0,1,1,1,1,1]

const sortZeroAndOne = (array) => {
  let sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      sortedArray.unshift(array[i]);
    } else {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
};
console.log(sortZeroAndOne([1, 0, 1, 1, 1, 0, 1, 0, 0]));

function segregateArray(array) {
  let low = 0;
  let high = array.length - 1;
  
  while(high > low) {
 
 
     if (low > high) {
         break;
     }
 
     if (array[low] === 0 && array[high] === 1) {
         high--;
         low++;
     }
 
     if (array[low] === 0 && array[high] === 0) {
     low++;
     }
 
     if (array[low] === 1 && array[high] === 1) {
         high--;
     }
 
     if (array[low] === 1 && array[high] === 0) {
         let temp = array[low];
         array[low] = array[high];
         array[high] = temp;
     }
 
  }
     return array;
 
 }
 

// 3) Write a function to sort the array without using ES6 SORT function
// let array = [11,20,0,-20,4,22,1,0] --> // Expected Output [-20, 0, 0, 1, 4,11,20, 22]
const sortArray = (array) => {
  let sortedArr = [];
  let minNum;
  while (array.length > 0) {
    minNum = Math.min(...array);
    sortedArr.push(minNum);
    array.splice(array.indexOf(minNum), 1);
  }
  return sortedArr;
};
console.log(sortArray([11, 20, 0, -20, 4, 22, 1, 0]));;

// 4)  Write the polyfill of Foreach Function for Array
Array.prototype.forEachPolyfill = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// 5) Write the polyfill of Some Function for Array
Array.prototype.somePolyfill = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      return true;
    } else {
      return false;
    }
  }
};

// 6) Write the polyfill of Every Function for Array
Array.prototype.everyPolyfill = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i]) === true) {
        counter++;
        if (counter === this.length) {
          return true;
        }
      } else {
        return false;
      }
    }
  }
};