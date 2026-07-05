const btn = document.querySelectorAll("button");
let runningScore = document.createElement("div");
let result = document.createElement("div");
let choice = "";
let cmpChoice = "";
let humanScore = 0;
let computerScore = 0;

document.body.appendChild(runningScore);
document.body.appendChild(result);
runningScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

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

function stopGame(){
    
    if(humanScore > computerScore)
    {
        alert("You win the game!");
            
    }
    else if(humanScore < computerScore)
    {
        alert("Computer wins the game!");
    }
    else
    {
        alert("The game is a tie!");
    }

    humanScore = 0;
    computerScore = 0;
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


btn.forEach((button) => {
    button.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    choice = "";
    cmpChoice = "";

    switch(target.id){
        case "Rock":
            choice = "rock";
            cmpChoice = getComputerChoice();
            playRound(choice, cmpChoice);
            break;
        case "Paper":
            choice = "paper";
            cmpChoice = getComputerChoice();
            playRound(choice, cmpChoice);
            break;
        case "Scissors":
            choice = "scissors";
            cmpChoice = getComputerChoice();
            playRound(choice, cmpChoice);
            break;
    }
    runningScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;

    if(humanScore === 5 || computerScore === 5)
    {
        result.textContent = `Total score: You got ${humanScore} and the computer got ${computerScore}`;
        stopGame();
        runningScore.style.display = "none"; // paslėpti, ne pašalinti iš DOM

        setTimeout(() => {
            result.style.display = "none";
            runningScore.textContent = `You: ${humanScore}, Computer: ${computerScore}`;
            runningScore.style.display = "block"; // vėl parodyti kitam žaidimui
        }, 10000);
    }

    
    
});
})







