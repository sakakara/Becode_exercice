// typeofOperations.js

// Function 1
function getType(value) {
  return typeof value;
  // Your code here
}

// Function 2
function checkTypes(...values) {
return values.map((x) => typeof x);  
  // Your code here
}

// Function 3
function compareTypes(value1, value2) {
  return typeof value1 === typeof value2;
  
  // Your code here
}

module.exports = {
  getType,
  checkTypes,
  compareTypes,
};
