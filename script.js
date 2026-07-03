

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


let humanScore = 0;
let computerScore = 0;



const sigma = getComputerChoice();
console.log(sigma);