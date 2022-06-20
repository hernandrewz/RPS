
function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}


var choices = ["rock", "paper", "scissors"];

var playerScore = 0;

var computerScore = 0;


// console.log(computerPlay(choices)); //

const choice1 = document.getElementById("chosenRock");

const choice2 = document.getElementById("chosenPaper");

const choice3 = document.getElementById("chosenScissors");

const playerSelection1 ="rock";
const playerSelection2 = "paper";
const playerSelection3 = "scissors";
const playerSelection = choice1 || choice2 || choice3; 
choice1.addEventListener("click",function(){playRound("rock", computerPlay);});
    
choice2.addEventListener("click", function(){playRound("paper", computerPlay);});

choice3.addEventListener("click", function(){playRound("scissors", computerPlay);});


function playRound (playerSelection, computerSelection) {  // howto get first paramter to register as button click instead of defaulting to playerSelection1?//
    var choose = playerSelection; 
    var computerSelection = computerPlay();

    if (choose == "rock" && computerSelection == "paper") {console.log( "You lose! Paper beats rock!"); computerScore++;}

    else if (choose == "rock" && computerSelection == "scissors") {console.log( "You win! Rock beats scissors"); playerScore++;}
    
    else if (choose == "rock" && computerSelection == "rock") {console.log( "Draw!");}

    else if (choose == "paper" && computerSelection == "scissors") {console.log( "You Lose! Scissors beats paper"); computerScore++;}

    else if (choose == "paper" && computerSelection == "rock") {console.log( "You win! Paper beats rock!"); playerScore++;}

    else if (choose == "paper" && computerSelection == "paper") {console.log( "Draw!");}

    else if (choose == "scissors" && computerSelection == "rock") {console.log( "You lose! Rock beats scissors"); computerScore++;}

    else if (choose == "scissors" && computerSelection == "paper") {console.log( "You win! Scissors beat paper!"); playerScore++;}

    else if (choose == "scissors" && computerSelection == "scissors") {console.log( "Draw!");}

console.log("Computer" + " " + computerScore);
console.log("Player" + " " + playerScore);
}














    

    
 
  


const computerSelection = computerPlay();

