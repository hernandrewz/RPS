
function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}


var choices = ["rock", "paper", "scissors"];

var playerScore = 0;

var computerScore = 0;

document.createElement('input');
Element.setAttribute('text');
const input = document.createElement("inpout");
input.setAttribute("type", "text");
// console.log(computerPlay(choices)); //

function playRound (playerSelection, computerSelection) { 
    var choose = prompt("rock paper or scissors").toLowerCase();
    var computerSelection = computerPlay();

    if (choose == "rock" && computerSelection == "paper") {alert( "You lose! Paper beats rock!"); computerScore++;}

    else if (choose == "rock" && computerSelection == "scissors") {alert( "You win! Rock beats scissors"); playerScore++;}
    
    else if (choose == "rock" && computerSelection == "rock") {alert( "Draw!");}

    else if (choose == "paper" && computerSelection == "scissors") {alert( "You Lose! Scissors beats paper"); computerScore++;}

    else if (choose == "paper" && computerSelection == "rock") {alert( "You win! Paper beats rock!"); playerScore++;}

    else if (choose == "paper" && computerSelection == "paper") {alert( "Draw!");}

    else if (choose == "scissors" && computerSelection == "rock") {alert( "You lose! Rock beats scissors"); computerScore++;}

    else if (choose == "scissors" && computerSelection == "paper") {alert( "You win! Scissors beat paper!"); playerScore++;}

    else if (choose == "scissors" && computerSelection == "scissors") {alert( "Draw!");}

    else ((choose == playerSelection || "paper" || "scissors") && computerSelection); console.log("Computer" + " " + computerScore);
console.log("Player" + " " + playerScore);

    
}
function game () {
for (let i = 0; i < 6; i++) {
    console.log("ROUND" + " " + i );
    if (i == 5 && playerScore > computerScore) {console.log("YOU WIN"); break;}

    else if (i == 5 && computerScore > playerScore) {console.log("YOU LOSE"); break;}

    else if (i == 5 && computerScore == playerScore) {console.log("TIE"); break;}

    

    
 
    playRound(playerSelection, computerSelection);

}
}

const playerSelection = "rock" ;
const computerSelection = computerPlay();
console.log(game(playerSelection,computerSelection));
