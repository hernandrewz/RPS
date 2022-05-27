

function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}

var choices = ["rock", "paper", "scissors"]

// console.log(computerPlay(choices)); //

function playRound (playerSelection, computerSelection) { 
    var choose = prompt("rock paper or scissors");
    if (choose == playerSelection || "paper" || "scissors") {
        return computerSelection}
}

    



const playerSelection = "rock" ;
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
