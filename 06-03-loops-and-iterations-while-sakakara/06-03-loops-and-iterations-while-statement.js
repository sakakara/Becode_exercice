// whileStatement.js

// Function 1
function sumOfSquares(n) {
  let sum = 0; //initialise la somme à 0
  let i = 1; // commence par 1 car on veut les carrés des nombres de 1 à n

  while(i <= n) { // tant que i est inférieur ou égal à n
    sum += i * i; // ajoute le carré de i à la somme
    i++; //passe au nombre suivant
  }
  // Your code here
  return sum;
}

// Function 2
function printReverseArray(arr) {
 let i = arr.length -1; // commence avec le dernier index du tableau
 while (i >= 0 ) { // tant que i est plus grand ou égal à 0
  console.log(arr[i]); // affiche l'élément courant du tableau
  i--; // décrémente pour passer au nombre suivant
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
  // Your code here
}

// Function 4
function findMax(arr) {
  // Your code here

  let max = arr[0]; // Initialise le maximum avec le premier élément du tableau
  let i = 1; // Commence avec le deuxième élément (index 1)

  while (i < arr.length) { // Tant que l'index est inférieur à la longueur du tableau
    if (arr[i] > max) { // Compare l'élément courant avec le maximum actuel
      max = arr[i]; // Met à jour le maximum si l'élément courant est plus grand
    }
    i++; // Passe à l'élément suivant
  }

  return max; // Retourne le maximum trouvé

}

module.exports = {
  sumOfSquares,
  printReverseArray,
  reverseString,
  findMax,
};
