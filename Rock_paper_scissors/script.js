

// variables globales
let userscore = 0;
let computerscore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Math.random() génère un nombre aléatoire entre 0 et 1, multiplié par 3 pour obtenir un index entre 0 et 2
    return choices[randomIndex];
}
   





function playRound(userChoice, computerChoice){
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
        return `It's a Draw!`;

    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
      
      userscore++; // le joueur gagne un point  
      return `You win!${userChoice} beats ${computerChoice}`;

    } else {
        computerscore++;
        return `You lose! ${computerChoice} beats ${userChoice}`;
    }
    
}

// Fonction pour jouer une partie quand l'utilisateur clique sur un bouton
function playGame(userChoice) {
    if (round >= 5) return; // Ne pas jouer si 5 rounds sont déjà joués
    
    const computerChoice = getComputerChoice();
    const resultText= playRound(userChoice, computerChoice);
    round++; // on passe au round suivant

    document.getElementById("result").textContent = resultText
    document.getElementById("score").textContent = `score : You ${userscore} - computer ${computerscore}`;

    if (round === 5) {
        let lastMessage = '';
        if (userscore > computerscore) {
            lastMessage = "You win the game !";
    }       else if (computerscore > userscore) {
            lastMessage = "You lose the game"; 
    }       else {
            lastMessage = "its a draw";
    }

    document.getElementById("finalResult").textContent = lastMessage;

    // affichage rejouer
    document.getElementById("restartBtn").style.display = "inline-block";

    }
}


// Fonction pour réinitialiser le jeu
function resetGame() {
    
    userscore = 0;
    computerscore = 0;
    round = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "";
    document.getElementById("finalResult").textContent = "";
    
    // cacher le bouton de redémarrage
    document.getElementById("restartBtn").style.display = "none";
}