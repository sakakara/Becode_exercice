// doWhileStatement.js

// Function 1
function sumEvenNumbers(limit) {
let sum = 0; // sum initialisé à 0
let i = 0; // on démarre de 0

while ( i <= limit) { // condition tant que i est plus petit ou égal à limit
  if (i % 2 === 0) {// vérifie si le nombre est le même
    sum += i; // ajoute le même nombre à sum
  }
  i++; // on incrémente
}
return sum;
  // Your code here
}

// Function 2
function printNumbersBackwards(n) {
  while (n >= 1) { // boucle qui continue tant que n est suppérieur ou égal à 1
    console.log(n);
    n--; //décrément N à chaque boucle
  }
  // Your code here
}

// Function 3
function reverseString(str) {
  let newString = ""; // chaine vide pour le résultat
  let i = str.length - 1; // commence avec le dernier index de la chaine
  while (i >= 0) { // continue tant que l'index est plus grand ou égal à 0
    newString += str[i];
    i--; // décrément pour passer au caractère précédent
  }
  return newString; 
}

// Function 4
function countOccurrences(arr, val) {
  let count = 0; // initialise le compteur à 0
  let i = 0; // initialise l'index à 0
  while  (i < arr.length) { // tant que l'index est suppérieur à la longueur du tableau
    if(arr[i] === val) { // vérifie si l'élément courant est égal à la valeur recherché
      count++; // incrément le compteur
    }
    i++; // passe à l'élément suivant
  }
  return count;
  // Your code here
}

module.exports = {
  sumEvenNumbers,
  printNumbersBackwards,
  reverseString,
  countOccurrences,
};
