

function getComputerChoice(){
    const number = Math.floor(Math.random() * 3);

    if(number === 0){
        return "rock";
    }
    else if(number === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
    
}

function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return humanChoice;
}


function playRound(humanChoice, computerChoice){
    
    if(humanChoice === computerChoice){
        return "It's a tie!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win this round!";
    }
    else{
        computerScore++;
        return "Computer wins this round!";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
    }
}


let humanScore = 0;
let computerScore = 0;

if(humanScore > computerScore){
    alert("You win the game!");
}
else if(humanScore < computerScore){
    alert("Computer wins the game!");
}
else{
    alert("The game is a tie!");
}

