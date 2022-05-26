

function computerPlay(RPS) {
    return choices[Math.floor(Math.random()*choices.length)];

}

var choices = ["rock", "paper", "scissors"]

console.log(computerPlay(choices));
