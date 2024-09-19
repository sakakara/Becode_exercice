// variableScope.js

let globalVar = 10;

// Function 1
function localScopeExample() {
  const localVar = undefined;
  return localVar;
  // Your code here
}

// Function 2
function globalScopeExample() {
  return globalVar;
  // Your code here
}

// Function 3
function blockScopeExample() {
  if (true) {
    let nombre = 20;
    return nombre;
  }
  // Your code here
}

module.exports = {
  localScopeExample,
  globalScopeExample,
  blockScopeExample,
  globalVar
};
