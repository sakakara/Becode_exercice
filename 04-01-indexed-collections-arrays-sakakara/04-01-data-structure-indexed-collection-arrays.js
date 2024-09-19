// indexedArrays.js

// Function 1
function createArray(size) {
return new Array(size);  // Your code here
}

// Function 2
function getArrayLength(arr) {
  return arr.length;
  // Your code here
}

// Function 3
function accessArrayElement(arr, index) {
  return arr[index];
  // Your code here
}

// Function 4
function updateArrayElement(arr, index, value) {
  arr[index] = value;
  return arr;
  // Your code here
}

// Function 5
function addArrayElement(arr, value) {
  arr.push(value);
  // Your code here
}

// Function 6
function removeArrayElement(arr, index) {
  arr.splice(index, 1);
  // Your code here
}

// Function 7
function getUniqueValues(arr) {
  return [...new Set(arr)];
  // Your code here
}

// Function 8
function reverseArray(arr) {
  return arr.reverse();
  // Your code here
}

// Function 9
function findMaxValue(arr) {
  return Math.max(...arr);
  // Your code here
}

// Function 10
function findMinValue(arr) {
  return Math.min(...arr);
  // Your code here
}

// Function 11
function sortArray(arr) {
  // Your code here
  return arr.sort(function (a, b) {return a - b});
}

// Function 12
function flattenNestedArray(arr) {
  return arr.flat(Infinity);
  // Your code here
}

// Function 13
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
  // Your code here
}

// Function 14
function rotateArray(arr, steps) {
  const n = arr.length;
  steps = ((steps % n) + n) % n;
  const part1 = arr.splice(-steps);
  arr.unshift(...part1);

  // Your code here
}

// Function 15
function removeDuplicates(arr) {
  return [...new Set(arr)];
  // Your code here
}

// Function 16
function findCommonElements(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter(element => set2.has(element));
  // Your code here
}

module.exports = {
  createArray,
  getArrayLength,
  accessArrayElement,
  updateArrayElement,
  addArrayElement,
  removeArrayElement,
  getUniqueValues,
  reverseArray,
  findMaxValue,
  findMinValue,
  sortArray,
  flattenNestedArray,
  mergeArrays,
  rotateArray,
  removeDuplicates,
  findCommonElements

};
