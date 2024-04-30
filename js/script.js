function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper or Scissors to play!").toLowerCase();
    return humanChoice
}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function playRound (humanSelection, computerSelection) {
   
}


console.log(playRound)

