// switchStatements.js

// Function 1
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Invalid day number';

  }

  // Your code here
}

// Function 2
function calculateDiscount(itemType) {
let discount = ''; // Définir une réduction initiale à 0

switch (itemType.toLowerCase()) { // pour être insensible à la case (maj et min)
  case 'electronics':
    discount = '20% Discount'; // 20% de réduction
    break;
  case 'clothing':
    discount = '15% Discount'; // 15% de réduction
    break;
  default:
    discount = 'No Discount'; // Pas de réduction pour les autres types d'articles
    break;
}

return discount; //
}

  
  // Your code here}

// Function 3
function getSeason(month) {
  switch(month) {
    case 12:
    case 1:
    case 2:
      return 'Winter';
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 9:
    case 10:
    case 11:
      return 'Fall';
    
  }
  // Your code here
}

// Function 4
function convertGrade(grade) {
  let letterGrade;

  // Déterminer la catégorie de note
  switch (true) {
    case (grade >= 90):
      letterGrade = 'A';
      break;
    case (grade >= 75):
      letterGrade = 'C';
      break;
    default:
      letterGrade = 'F';
  }

  return letterGrade;
}


// Function 5
function getShippingCost(weight, type) {
  let costPerWeightUnit = 1; // Coût par unité de poids
  let additionalCost; // Coût supplémentaire basé sur le type de service

  // Calcul du coût supplémentaire en fonction du type
  switch (type.toLowerCase()) { 
    case 'standard':
      additionalCost = 5;
      break;
    case 'express':
      additionalCost = 15;
      break;
    case 'overnight':
      additionalCost = 20;
      break;
  }

  // Calcul du coût total
  const totalCost = (weight * costPerWeightUnit) + additionalCost;

  return totalCost;
}

  // Your code here


// Function 6
function calculateTax(amount, state) {
  let taxRate;

  // Déterminer le taux de taxe en fonction de l'état
  switch (state.toUpperCase()) { 
    case 'NY':
      taxRate = 0.0825; // 8.25% en décimal
      break;
    case 'CA':
      taxRate = 0.10; // 10% en décimal
      break;
    case 'TX':
      taxRate = 0; 
      break;
    
  }

  // Calculer la taxe
  const tax = amount * taxRate;

  return tax;

}

// Function 8
function getTrafficSignalColor(code) {
  switch(code) {
    case 1:
      return 'Red';
    case 2: 
      return 'Yellow';
    case 3:
      return 'Green';
      break;
  }
  return code;
  // Your code here
}

module.exports = {
  getDayName,
  calculateDiscount,
  getSeason,
  convertGrade,
  getShippingCost,
  calculateTax,
  getTrafficSignalColor

};


