

console.log("Hello World");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
        
    } else if (randomNumber === 1) {
            return "paper";
    
    } else {
        return "scissors";
    }
}

function getuserChoice() {
    let input = prompt("Choose rock, paper, or scissors:");
    return input.toLowerCase();
}

let userscore = 0;
let computerscore = 0;

function playRound(userChoice, computerChoice){
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
        console.log("It's a Draw!");

    } else if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${userChoice} beats ${computerChoice}`);
      userscore++;  

    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        computerscore++;
    }
    console.log(`Score => You: ${userscore} | Computer : ${computerscore}`);

}

function game() {
    
    userscore = 0;
    computerscore = 0;
    for (let i = 0; i < 5; i++) {
      const user = getuserChoice();
      const computer = getComputerChoice();
      playRound(user, computer);
    }


    if (userscore > computerscore) {
        console.log("You won the game!");
    } else if (computerscore > userscore) {
        console.log("Computer won the game!");

    } else {
        console.log("The game is a draw!");
    }
}


game();
