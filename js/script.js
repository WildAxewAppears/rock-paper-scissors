const human = document.querySelector("#human");
const computer = document.querySelector("#computer")
const buttons = document.querySelector(".buttons")
const outcome = document.querySelector("#outcome")

let humanScore = 0
let computerScore = 0

buttons.addEventListener("click", playRound)
    
    function playRound (event) {

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
            let target = event.target;
            let humanChoice = target.id;
            return humanChoice;
        }
    
        const humanSelection = getHumanChoice()
        
        const computerSelection = getComputerChoice()
        
        if (humanSelection == "rock") {
            if (computerSelection == "rock") {
                outcome.textContent = "You Both played Rock, you draw!"
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
            else if (computerSelection == "paper") {
                outcome.textContent = "Unlucky Rock loses aganist Paper. You lose!"
                computerScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
    
            else {
                outcome.textContent = "Letsgoski! Rock wins aganist Scissors. You Win!"
                humanScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
        }
    
        if (humanSelection == "paper") {
            if (computerSelection == "rock") {
                outcome.textContent = "Letsgoski! Paper wins aganist Rock. You Win!"
                humanScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
            
            else if (computerSelection == "paper") {
                outcome.textContent = ("You Both played Paper, you draw!")
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
                
            }
    
            else {
                outcome.textContent = "Unlucky Paper loses aganist Scissors. You lose!"
                computerScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
        }
    
        if (humanSelection == "scissors") {
            if (computerSelection == "rock") {
                outcome.textContent = "Unlucky Scissors loses aganist Rock. You lose!"
                computerScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
            
            else if (computerSelection == "paper") {
                outcome.textContent = "Letsgoski! Scissors wins aganist Paper. You Win!"
                humanScore++
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
                
            }
    
            else {
                outcome.textContent = "You Both played Scissors, you draw!"
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }
        }

        if (humanScore >= 5) {
            setTimeout(() => {
                alert("hai vinto");
                humanScore = 0;
                computerScore = 0;
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }, 10);
        } 
        
        else if (computerScore >= 5) {
            setTimeout(() => {
                alert("hai perso");
                humanScore = 0;
                computerScore = 0;
                human.textContent =  `Player : ${humanScore} `
                computer.textContent = `Computer : ${computerScore} `
            }, 10);
        }
    }



