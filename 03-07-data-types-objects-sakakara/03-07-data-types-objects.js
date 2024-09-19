// objectOperations.js

// Function 1
function createObject(key1, value1, key2, value2) {
  let obj = {};
  obj[key1] = value1;
  obj[key2] = value2;
  return obj;
  // Your code here
}

// Function 2
function accessPropertyValue(obj, property) {
  return obj[property];
  // Your code here
}

// Function 3
function checkProperty(obj, property) {
  return property in obj;
  // Your code here
}

// Function 4
function addProperty(obj, property, value) {
  obj[property] = value;
  return obj;
  // Your code here
}

// Function 5
function removeProperty(obj, property) {
  delete obj[property];
  return obj;
  // Your code here
}

module.exports = {
  createObject,
  accessPropertyValue,
  checkProperty,
  addProperty,
  removeProperty,
};
