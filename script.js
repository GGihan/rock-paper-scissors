function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What do you choose?", "-- rock, paper or scissors --");
    return choice.toLowerCase();
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    function playRound(humanChoice, computerChoice) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        if (humanChoice === computerChoice) {
            return console.log("I'ts a draw!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore = humanScore + 1;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore = humanScore + 1;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore = humanScore + 1;
            return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore = computerScore + 1;
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }
    playRound(humanSelection, computerSelection);
    
    playRound(humanSelection, computerSelection);
    
    playRound(humanSelection, computerSelection);
    
    playRound(humanSelection, computerSelection);
    
    playRound(humanSelection, computerSelection);
    
    console.log(humanScore, computerScore);
    
    if (humanScore > computerScore) {
        return console.log("You won the game!");
    } else if (humanScore < computerScore) {
        return console.log("You lost the game!");
    } else {
        return console.log("The game is a draw, try again!");
    }
}

playGame();