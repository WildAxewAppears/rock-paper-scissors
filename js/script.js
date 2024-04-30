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



function playRound (humanChoice, computerChoice) {
    if (humanSelection == "rock") {
        if (computerSelection == 0) {
            alert("You Both played Rock, you draw!")
        }
        else if (computerSelection ==1) {
            alert("Unlucky Rock lose aganist Paper. You lose!")
            computerScore++
        }

        else {
            alert("Letsgoski! Rock wins aganist Scissors. You Win!")
            humanScore++
        }
    }

    if (humanSelection == "paper") {
        if (computerSelection == 0) {
            alert("Letsgoski! Paper wins aganist Rock. You Win!")
            humanScore++
        }
        
        else if (computerSelection == 1) {
            alert("You Both played Paper, you draw!")
            
        }

        else {
            alert("Unlucky Paper lose aganist Scissors. You lose!")
            computerScore++
        }
    }

}

playRound(humanSelection, computerSelection )

