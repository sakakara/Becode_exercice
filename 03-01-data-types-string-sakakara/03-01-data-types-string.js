// stringManipulation.js

// Function 1
function createString() {
  let myName = "Jason";
  return myName;
  // Your code here
}

// Function 2
function stringLength(str) {
  return str.length;
  // Your code here
}

// Function 3
function stringConcat(str1, str2) {
  return (str1 + str2);
  // Your code here
}

// Function 4
function stringUpperCase(str) {
  return str.toUpperCase();
  // Your code here
}

// Function 5
function stringLowerCase(str) {
  return str.toLowerCase();
  // Your code here
}

// Function 6
function stringSubstring(str, start, end) {
  return str.substr(start, end);
  // Your code here
}

module.exports = {
  createString,
  stringLength,
  stringConcat,
  stringUpperCase,
  stringLowerCase,
  stringSubstring,
};
