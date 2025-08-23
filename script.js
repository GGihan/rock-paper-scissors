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

let roundCounter = 0;
let humanScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let results = document.querySelector("#results");
let resultPara = document.createElement("p");
results.appendChild(resultPara);
let resultScore = document.createElement("p");
results.appendChild(resultScore);
function playRound(humanChoice, computerChoice) {
    computerSelection = getComputerChoice();
    if (humanChoice === computerChoice) {
        resultPara.textContent = "I'ts a draw!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore = humanScore + 1;
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore = humanScore + 1;
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore = humanScore + 1;
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore = computerScore + 1;
        resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
    roundCounter += 1;
    resultScore.textContent = `Player-Score: ${humanScore} / Computer-Score: ${computerScore}`;
    fullGame();
}

function fullGame() {
    if (roundCounter == 5) {
        anounceScore(humanScore, computerScore);
        roundCounter = 0;
        humanScore = 0;
        computerScore = 0;
    }
}

function anounceScore(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return alert("You won the game!");
    } else if (humanScore < computerScore) {
        return alert("You lost the game!");
    } else {
        return alert("The game is a draw, try again!");
    }
}

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "rock":
            playRound("rock", computerSelection);
            break;
        case "paper":
            playRound("paper", computerSelection);
            break;
        case "scissors":
            playRound("scissors", computerSelection);
            break;
    }
});