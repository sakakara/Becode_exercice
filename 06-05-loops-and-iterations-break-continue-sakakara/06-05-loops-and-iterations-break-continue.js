// breakContinue.js

// Function 1
function findElement(arr, val) {
  let index = 0;
  for(const element of arr) { // parcours chaque élément du tableau
    if (element === val) { // vérifie si l'élément courant est égal à 0
      return index; 
    }
    index++;
  }
  return -1; //retourne -1 si l'élément n'a pas été trouvé
    // Your code here
}

// Function 2
function sumUntilStop(arr) {
  let sum = 0; // initialise la somme à 0
  for (const num of arr) { //parcours chaque élément du tableau
    if (num === 0) { //vérifie si l'élément est = à 0
      break; // arrête la boucle si l'élément est 0
    }
    sum  += num;
  }
  return sum;
  // Your code here
}

// Function 3
function skipStrings(arr) {
  let sum = 0; //initialise la somme à 0
  
  for(const element of arr) { // parcours les éléments du tableau
    if(typeof element === 'number') { //vérifie si l'élément est un nombre  
      sum += element; // ajoute le nombre à la somme
    }
  }
  return sum;
  // Your code here
}

// Function 4
function countVowels(str) {
  const voyelles = 'aeiouAEIOU';
  let count = 0;
  for (const char of str) {
    if (voyelles.includes(char)) {
      count++;
    }
  }
  // Your code here
  return count;
}

module.exports = {
  findElement,
  sumUntilStop,
  skipStrings,
  countVowels,
};
