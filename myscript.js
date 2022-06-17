

function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}


var choices = ["rock", "paper", "scissors"];

var playerScore = 0;

var computerScore = 0;

// console.log(computerPlay(choices)); //

function playRound (playerSelection, computerSelection) { 
    var choose = prompt("rock paper or scissors").toLowerCase();
  

    if (choose == "rock" && computerPlay() == "paper") {console.log( "You lose! Paper beats rock!"); computerScore++;} // where "computerPlay" sits, the line used to have "computerSelection" , but the latter string registers as a paramter instead of function which doesn't randomize computers choice when game is played //

    else if (choose == "rock" && computerPlay() == "scissors") {console.log("You win! Rock beats scissors"); playerScore++;}
    
    else if (choose == "rock" && computerPlay()== "rock") {console.log( "Draw!");}

    else if (choose == "paper" && computerPlay() == "scissors") {console.log( "You Lose! Scissors beats paper"); computerScore++;}

    else if (choose == "paper" && computerPlay() == "rock") {console.log( "You win! Paper beats rock!"); playerScore++;}

    else if (choose == "paper" && computerPlay() == "paper") {console.log( "Draw!");}

    else if (choose == "scissors" && computerPlay() == "rock") {console.log( "You lose! Rock beats scissors"); computerScore++;}

    else if (choose == "scissors" && computerPlay() == "paper") {console.log( "You win! Scissors beat paper!"); playerScore++;}
 
    else if (choose == "scissors" && computerPlay() == "scissors") {console.log( "Draw!");}

    else ((choose == playerSelection || "paper" || "scissors") && computerSelection); console.log("Computer" + " " + computerScore);
console.log("Player" + " " + playerScore);

    
}
function game () {
for (let i = 0; i < 6; i++) {
    console.log("ROUND" + " " + i );
    if (i == 5 && playerScore > computerScore) {console.log("YOU WIN THE FIVE ROUND MATCH"); break;}

    else if (i == 5 && computerScore > playerScore) {console.log("YOU LOSE THE FIVE ROUND MATCH"); break;}

    else if (i == 5 && computerScore == playerScore) {console.log("YOU TIE THE 5 ROUND MATCH"); break;}

    

    
 
    playRound(playerSelection, computerSelection);

}
}

const playerSelection = "rock" ;
const computerSelection = computerPlay();
console.log(game(playerSelection,computerSelection));
