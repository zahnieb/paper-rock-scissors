let computerCount = 0;
let playerCount = 0;
let playerSelection;


// computer move
function computerPlay(){
    let moves = ["rock" , "paper" , "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

// buttons for player move
let paperButton = document.getElementById("paper-btn");
paperButton.addEventListener('click', () => {
    singleResult.innerHTML = playRound("paper");
})

let rockButton = document.getElementById("rock-btn");
rockButton.addEventListener('click', () => {
    singleResult.innerHTML = playRound("rock");
})

let scissorsButton = document.getElementById('scissors-btn');
scissorsButton.addEventListener('click', () =>{
    singleResult.innerHTML = playRound("scissors");
})

// plays one round of paper, rock, scissors
function playRound(playerSelection){
    const computerSelection = computerPlay();
    let result;
    if (playerSelection == "rock" && computerSelection == "scissors"){
        playerCount++;
        result = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore.innerHTML = "Your Score = " + playerCount;
        document.body.appendChild(playerScore);
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerCount++;
        result = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore.innerHTML = "Your Score = " + playerCount;
        document.body.appendChild(playerScore);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerCount++;
        result = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore.innerHTML = "Your Score = " + playerCount;
        document.body.appendChild(playerScore);
    } else if (playerSelection === computerSelection){
        result = "Draw! Try again!";
    } else {
        computerCount++;
        result = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
        computerScore.innerHTML = "Computer Score = " + computerCount;
        document.body.appendChild(computerScore);
    }
    if (computerCount === 5) alert("Computer Wins!");
    if (playerCount === 5) alert("You Win!");
    return result;
    
}

let computerScore = document.createElement('div');
computerScore.id = "computerScore";

let playerScore = document.createElement('div');
playerScore.id = "playerScore";

let singleResult = document.createElement('div');
singleResult.id = "singleResult";
document.body.appendChild(singleResult); // shows single round result