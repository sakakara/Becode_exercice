// const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let listtask = [];

function seeTask() {
  if (listtask.length === 0) {
      console.log("Il n'y a aucune tâche pour l'instant.");
  } else {
      console.log("Voici toutes vos tâches :");
      listtask.forEach((task, index) => {
      const status = task.done ? '[Fait]' : '[Pas fait]'; // ? = condition 1 = fait, sinon = pas fait
      console.log(`${index + 1}. ${task.name} ${status}`);

    });
    mainMenu();

  }

}


function addTask(){
  rl.question("Entrez une nouvelle tache: " , (newTask) => {
    listtask.push({name: newTask , done: false}); //ajoute la tache dans le tableau et ajoute false à done
    console.log(`Tâche ajoutée : "${newTask}"`);
    mainMenu();

  })


}

function deleteTask() {
  if (listtask.length === 0) {
    console.log("Il n'y a aucune tâche à supprimer.");
    mainMenu();  // Retourne au menu principal si aucune tâche
  } else {
    // Afficher les tâches avant de demander le numéro de tâche à supprimer
    console.log("Voici toutes vos tâches :");
    listtask.forEach((task, index) => {
      const status = task.done ? '[Fait]' : '[Pas fait]';
      console.log(`${index + 1}. ${task.name} ${status}`);
    });

    // Demander à l'utilisateur quelle tâche supprimer
    rl.question('Entrez le numéro de la tâche à supprimer : ', (taskNumber) => {
      const index = parseInt(taskNumber) - 1;  // Convertir la réponse en index
      if (isNaN(index) || index < 0 || index >= listtask.length) {
        // Si le numéro est invalide, afficher un message d'erreur
        console.log("Numéro de tâche invalide.");
      } else {
        // Si le numéro est valide, supprimer la tâche
        const deletedTask = listtask.splice(index, 1);  // Supprime la tâche
        console.log(`Tâche supprimée : "${deletedTask[0].name}"`);
      }
      mainMenu();  // Retour au menu principal après la suppression ou l'erreur
    });
  }
}



function markDone() {
  if (listtask.length === 0) {
    console.log("Il n'y a aucune tâche à marquer comme terminée.");
    mainMenu();
  } else {
    // Afficher la liste des tâches avant de demander le numéro
    console.log("Voici toutes vos tâches :");
    listtask.forEach((task, index) => {
      const status = task.done ? '[Fait]' : '[Pas fait]';
      console.log(`${index + 1}. ${task.name} ${status}`);
    });

    // Demander le numéro de la tâche à marquer comme terminée
    rl.question('Entrez le numéro de la tâche à marquer comme terminée : ', (taskNumber) => {
      const index = parseInt(taskNumber) - 1; // Convertir l'entrée en index
      if (isNaN(index) || index < 0 || index >= listtask.length) {
        // Si le numéro est invalide, afficher un message d'erreur
        console.log("Numéro de tâche invalide.");
      } else {
        // Si le numéro est valide, marquer la tâche comme terminée
        listtask[index].done = true; 
        console.log(`Tâche marquée comme terminée : "${listtask[index].name}"`);
      }
      mainMenu();  // Revenir au menu principal après avoir traité la réponse
    });
  }
}



function mainMenu() {
  rl.question('what do you want to do :\n1: to see all your task. \n2: to add a task. \n3: to delete a task. \n4: To mark a task as done. \n5: To exit the task manager.\n' , (answer) => {
  if(answer.toLowerCase()=== '1') {
    seeTask();
  }
  else if(answer.toLowerCase() === '2') {
    addTask();
  }
  else if(answer.toLowerCase() === '3') {
    deleteTask();
  }
  else if(answer.toLowerCase() === '4') {
    markDone();
  }

  else if(answer.toLowerCase() === '5') {
    console.log('merci et à bientôt')
    rl.close() //ferme l'interface
  }
  else {
    console.log('Option non valide')
    mainMenu();
  }
});

 }


 
  
  mainMenu();
