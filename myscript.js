
function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}


var choices = ["rock", "paper", "scissors"];
var playerScore = 0;
var computerScore = 0;
var comment = ''; 
var comment2 = '';


// console.log(computerPlay(choices)); //

const choice1 = document.getElementById("chosenRock");
const choice2 = document.getElementById("chosenPaper");
const choice3 = document.getElementById("chosenScissors");

const playerSelection1 ="rock";
const playerSelection2 = "paper";
const playerSelection3 = "scissors";
const playerSelection = choice1 || choice2 || choice3; 
const computerSelection = computerPlay();

choice1.addEventListener("click",function(){playRound("rock", computerPlay);});
choice2.addEventListener("click", function(){playRound("paper", computerPlay);});
choice3.addEventListener("click", function(){playRound("scissors", computerPlay);});


function counter (playerScore, computerScore) {
    
    
    if (playerScore == 5) {comment2 = "First to five, you win!";}

    else if (computerScore == 5) {comment2 = "First to five, computer wins!";}

    document.getElementById("phrase2").innerHTML = comment2;
    
    
}







function playRound (playerSelection, computerSelection) {  // howto get first paramter to register as button click instead of defaulting to playerSelection1?//
    var choose = playerSelection; 
    var computerSelection = computerPlay();
    
    if (choose == "rock" && computerSelection == "paper") {comment = "You lose! Paper beats rock!"; computerScore++;}

    else if (choose == "rock" && computerSelection == "scissors") {comment = "You win! Rock beats scissors"; playerScore++;}
    
    else if (choose == "rock" && computerSelection == "rock") {comment = "Draw!";}

    else if (choose == "paper" && computerSelection == "scissors") {comment ="You Lose! Scissors beats paper"; computerScore++;}

    else if (choose == "paper" && computerSelection == "rock") {comment = "You win! Paper beats rock!"; playerScore++;}

    else if (choose == "paper" && computerSelection == "paper") {comment = "Draw!";}

    else if (choose == "scissors" && computerSelection == "rock") {comment = "You lose! Rock beats scissors"; computerScore++;}

    else if (choose == "scissors" && computerSelection == "paper") {comment = "You win! Scissors beat paper!"; playerScore++;}

    else if (choose == "scissors" && computerSelection == "scissors") {comment = "Draw!";}

    counter(playerScore, computerScore); 



 

console.log("Computer" + " " + computerScore);
console.log("Player" + " " + playerScore);

document.getElementById("userPoints").innerHTML =  playerScore;
document.getElementById("computerPoints").innerHTML = computerScore;
document.getElementById("phrase").innerHTML = comment;

}





