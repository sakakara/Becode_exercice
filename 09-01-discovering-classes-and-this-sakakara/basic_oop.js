class OrangeTree {
    constructor() {
      this.age = 0; // L'âge de l'arbre
      this.height = 0; // La hauteur de l'arbre
      this.fruits = 0; // Le nombre de fruits disponibles
      this.isDead = false; // Statut de l'arbre (mort ou vivant)
    }
  
    // Méthode pour savoir si l'arbre est mort
    isDead() {
      return this.isDead;
    }
  
    // Méthode pour connaître l'âge de l'arbre
    getAge() {
      return this.age;
    }
  
    // Méthode pour mesurer la hauteur de l'arbre
    getHeight() {
      return this.height;
    }
  
    // Méthode pour savoir combien de fruits sont sur l'arbre
    getFruits() {
      return this.fruits;
    }
  
    // Méthode pour cueillir un fruit (si disponible)
    pickAFruit() {
      if (this.fruits > 0) {
        this.fruits -= 1;
      } else {
        console.log("No fruits left to pick!");
      }
    }
  
    // Méthode qui simule le passage d'une année
    oneYearPasses() {
      // L'arbre vieillit de 1 an
      this.age += 1;
  
      // Vérifier si l'arbre est mort ou doit mourir
      if (this.age >= 50) {
        // Après 50 ans, l'arbre a une probabilité de mourir qui augmente chaque année
        const deathChance = (this.age - 50) * 2; // Probabilité de mourir en %
        if (Math.random() * 100 < deathChance || this.age >= 100) {
          this.isDead = true;
        }
      }
  
      if (!this.isDead) {
        // Si l'arbre est encore vivant, il continue de pousser et produire des fruits
  
        // Croissance de l'arbre jusqu'à 10 ans
        if (this.age <= 10) {
          this.height += 1;
        }
  
        // Production de fruits en fonction de l'âge
        if (this.age > 5 && this.age < 10) {
          this.fruits = 100;
        } else if (this.age >= 10 && this.age < 15) {
          this.fruits = 200;
        } else {
          this.fruits = 0; // Plus de fruits après 15 ans
        }
      } else {
        this.fruits = 0; // Pas de fruits si l'arbre est mort
      }
    }
  }
  
  module.exports = OrangeTree; // Export de la classe pour les tests
  