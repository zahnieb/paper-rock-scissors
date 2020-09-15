// computer move
function computerPlay(){
    let moves = ["rock" , "paper" , "scissors"];
    return computerSelection = moves[Math.floor(Math.random() * moves.length)];
}

// plays one round of paper, rock, scissors
function playRound(){
    computerPlay();
    console.log(computerPlay());
    var playerSelection = prompt("Please select rock, paper or scissors").toLocaleLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return outcome = "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return outcome = "You Win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return outcome = "You Win!";
    } else if (playerSelection === computerSelection){
        return outcome = "Draw! Try again!";
    } else {
        return outcome = "You lose!"
    }
}



//fucntion for 5 game set
function game(){
    let computerCount = 0;
    let playerCount = 0;

    for (let i = 1; i <= 5; i++){
        playRound();
        if (outcome === "You Win!"){
            playerCount++;
        } else if (outcome === "You lose!"){
            computerCount++;
        }
        if (playerCount == 3 || computerCount == 3) {
            break;
        }
    }

    if (playerCount > computerCount){
        return alert("You Win the series!");
    } else if (computerCount > playerCount) {
        return alert("You lose the series!");
    }
}

console.log(game());