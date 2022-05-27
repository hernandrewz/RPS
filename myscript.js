

function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}

var choices = ["rock", "paper", "scissors"]

// console.log(computerPlay(choices)); //

function playRound (playerSelection, computerSelection) { 
    var choose = prompt("rock paper or scissors").toLowerCase();
    if (choose == "rock" && computerSelection == "paper") {alert( "You lose! Paper beats rock!");}

    else if (choose == "rock" && computerSelection == "scissors") {alert( "You win! Rock beats scissors");}
    
    else if (choose == "rock" && computerSelection == "rock") {alert( "Draw!");}

    else if (choose == "paper" && computerSelection == "scissors") {alert( "You Lose! Scissors beats paper");}

    else if (choose == "paper" && computerSelection == "rock") {alert( "You win! Paper beats rock!");}

    else if (choose == "paper" && computerSelection == "paper") {alert( "Draw!");}

    else if (choose == "scissors" && computerSelection == "rock") {alert( "You lose! Rock beats scissors");}

    else if (choose == "scissors" && computerSelection == "paper") {alert( "You win! Scissors beat paper!");}

    else if (choose == "scissors" && computerSelection == "scissors") {alert( "Draw!");}

    else (choose == playerSelection || "paper" || "scissors") 
        return computerSelection

    
}



const playerSelection = "rock" ;
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
