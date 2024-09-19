const readline = require('readline'); //permet de lire les entrées clavier et de générer des interfaces pour interagir avec les utilisateurs en mode texte.


const rl = readline.createInterface({ // crée une interface de lecture pour permettre les interactions
  input: process.stdin, //le flux d'entrée
  output: process.stdout // le flux de sortie
});

// Fonction pour générer un score pour la banque (entre 16 et 21)
function pickBankScore(){
  let bank_score = Math.floor(Math.random() * (21 - 16 + 1)) + 16;
  return bank_score;
}

// Fonction pour tirer une carte pour le joueur (entre 1 et 11)
function pickPlayerCard(){
  let player_card = Math.floor(Math.random() * 11) + 1;  // Corrigé pour être entre 1 et 11
  return player_card;
}

// Fonction pour afficher l'état du jeu avec les scores du joueur et de la banque
function stateOfTheGame(player_score, bank_score){
  return `Your score is: ${player_score}. The bank's score is: ${bank_score}`;
}

// Fonction pour gérer les messages de fin de partie
function endGameMessage(player_score, bank_score){
  if (player_score > 21) {
    return 'You lost! Your score is over 21.';
  } else if (player_score === 21) {
    return 'Black Jack!';
  } else if (player_score === bank_score) {
    return 'Push'; // Égalité
  } else if (player_score > bank_score) {
    return 'You won! Your score is higher than the bank\'s.';
  } else {
    return 'You lost! The bank\'s score is higher than yours.';
  }
}

// Fonction principale pour jouer au jeu
function playGame(){
  let player_score = pickPlayerCard();
  let bank_score = pickBankScore();

  console.log(stateOfTheGame(player_score, bank_score));

  rl.question('Do you want to draw a new card? (yes/no) ', (decision) => { 
    if (decision.toLowerCase() === 'no') { //permet d'accepter no même en majuscule
      console.log(endGameMessage(player_score, bank_score));
      rl.close();
    } else {
      // Tirer une nouvelle carte pour le joueur
      let new_card = pickPlayerCard();
      player_score += new_card;
      console.log(`You drew a card: ${new_card}. Your new score is: ${player_score}`);
      
      if (player_score > 21) {
        console.log(endGameMessage(player_score, bank_score));
        rl.close();
      } else {
        rl.question('Do you want to draw another card? (yes/no) ', (decision) => {
          if (decision.toLowerCase() === 'no') {
            console.log(endGameMessage(player_score, bank_score));
            rl.close();
          } else {
            // Continue le jeu ou implémente une autre logique
            console.log('End of game logic here');
            rl.close();
          }
        });
      }
    }
  });
}


module.exports = {
  pickBankScore,
  pickPlayerCard,
  stateOfTheGame,
  endGameMessage
};