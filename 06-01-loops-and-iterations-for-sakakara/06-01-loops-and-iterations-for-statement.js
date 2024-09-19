// forStatement.js

// Function 1
function sumOfNumbers(start, end) {
  // Your code here
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;

}

// Function 2
function generatePattern(rows) {
  // Your code here
  // Pattern:
  // if rows = 1 -> "*\n"
  // if rows = 3 -> "*\n**\n***\n"
  // if rows = 5 -> "*\n**\n***\n****\n*****\n"
  let pattern = ''; 
  for (let i = 1; i <= rows; i++) {
    pattern += '*'.repeat(i) + '\n';
  }
  return pattern; // Return the complete pattern
}


// Function 3
function reverseString(str) {
  // create a empty string that will host the new created string
  let newString = "";
  // starting point of the loop will be (str.length - 1) wich correspond to the last character of the string.
  //as long as i is greater or equals 0, the loop will go on we decrement i after each iteration.
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
  // Your code here
}

// Function 4
function filterOddNumbers(arr) {
  let result = []; // Initialise un tableau vide pour stocker les nombres pairs
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { //Pour chaque élément du tableau, on vérifie s'il est pair en utilisant l'opérateur modulo (%). Si arr[i] % 2 === 0, cela signifie que le nombre est pair.

      result.push(arr[i]);
    }
  }
  return result;

  // Your code here
}

module.exports = {
  sumOfNumbers,
  generatePattern,
  reverseString,
  filterOddNumbers,
};
