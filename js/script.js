
function playGame() {

    humanScore = 0
    computerScore = 0

    while (humanScore < 5 && computerScore < 5) {
        playRound();
    }

    if (humanScore >= 5) {
        alert("Congratulations! You won the game!");
    } else {
        alert("Computer wins. Better luck next time!");
    }

    
    function playRound () {

        function getComputerChoice() {
            let computerChoice = Math.floor(Math.random() * 3);
            if (computerChoice == 0) {
                return "rock"
            }
            else if (computerChoice == 1) {
                return "paper"
            }
            else {
                return "scissors"
            }
        }
        
        function getHumanChoice() {
            let humanChoice = prompt("Enter Rock, Paper or Scissors to play!").toLowerCase();

            if (humanChoice !== "rock"  && humanChoice !== "paper"  && humanChoice !== "scissors") {
                alert("c'mon be serious...")
                return getHumanChoice()
            }
            else
            return humanChoice
        }
    
        const humanSelection = getHumanChoice()
        
        const computerSelection = getComputerChoice()
        
        if (humanSelection == "rock") {
            if (computerSelection == "rock") {
                alert("You Both played Rock, you draw!")
            }
            else if (computerSelection =="paper") {
                alert("Unlucky Rock loses aganist Paper. You lose!")
                computerScore++
            }
    
            else {
                alert("Letsgoski! Rock wins aganist Scissors. You Win!")
                humanScore++
            }
        }
    
        if (humanSelection == "paper") {
            if (computerSelection == "rock") {
                alert("Letsgoski! Paper wins aganist Rock. You Win!")
                humanScore++
            }
            
            else if (computerSelection == "paper") {
                alert("You Both played Paper, you draw!")
                
            }
    
            else {
                alert("Unlucky Paper loses aganist Scissors. You lose!")
                computerScore++
            }
        }
    
        if (humanSelection == "scissors") {
            if (computerSelection == "rock") {
                alert("Unlucky Scissors loses aganist Rock. You lose!")
                computerScore++
            }
            
            else if (computerSelection == "paper") {
                alert("Letsgoski! Scissors wins aganist Paper. You Win!")
                humanScore++
                
            }
    
            else {
                alert("You Both played Scissors, you draw!")
                
            }
        }
    
    }

}

playGame()