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


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("I'ts a draw, try again!");
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(humanSelection);

playRound(humanSelection, computerSelection);