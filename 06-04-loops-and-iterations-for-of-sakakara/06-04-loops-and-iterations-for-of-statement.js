// forOfStatement.js

// Function 1
function sumArray(arr) {
  let sum = 0; //initialise la somme à 0  
  for (const number of arr) { // parcourt chaque élément du tableau
    sum += number; // ajoute chaque élément à la somme
  }
  return sum;
  // Your code here
}

// Function 2
function concatenateStrings(arr) {
  let result = ""; //initialise une chaine vide pour stocker le résutlat

  for(const str of arr) { // parcours chaque élément du tableau
    result += str; // concataine chaque chaine à la chaine résultat
  }
  return result;
  // Your code here
}

// Function 3
function findAverage(arr) {

 if (arr.length === 0) { // Vérifie si le tableau est vide
    return 0; // Retourne 0 ou toute autre valeur par défaut pour un tableau vide
  }
  let sum = 0; // Initialise la somme à 0
  
  for (const num of arr) { // Parcourt chaque élément du tableau
    sum += num; // Ajoute chaque nombre à la somme
  }
  
  return sum / arr.length; 

}

// Function 4
function getVowels(str) {
  const voyelles = 'aeiou'; 
  const result = new Set(); //utilisation de l'objet set pour éliminer les doublons.  
  for (const letter of str) { //bloucle sur toutes les lettres du mots fournis
    if(voyelles.includes(letter)) {  //methode includes pour vérifier si nos voyelles sont présente dans les lettres de mots fournis.
      result.add(letter);  //methode pour ajouter à notre set nos voyelles extraites
    }
  }
  return [...result]; //retourne sous forme d'un tableau
  // Your code here
}

module.exports = {
  sumArray,
  concatenateStrings,
  findAverage,
  getVowels,
};
