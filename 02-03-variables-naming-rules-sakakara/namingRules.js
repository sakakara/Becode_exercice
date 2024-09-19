// namingRules.js

// Function 1
function validVariableName() {
  let currentName = "jason";
  return currentName;
  // Your code here
}

// Function 2
function invalidVariableName() {
  let let = invalide;
  return let;
  // Your code here
}

// Function 3
function camelCaseVariableName() {
  let myPcName = "Dell";
  return myPcName;
  // Your code here
}

// Function 4
function snake_caseVariableName() {
  let boisson_favorite = "eau";
  return boisson_favorite;
  // Your code here
}

// Function 5
function PascalCaseVariableName() {
  let FavoriteAnimal = "chien";
  return FavoriteAnimal;  
  // Your code here
}

module.exports = {
  validVariableName,
  invalidVariableName,
  camelCaseVariableName,
  snake_caseVariableName,
  PascalCaseVariableName,
};
