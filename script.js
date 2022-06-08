function computerPlay(){
    /* generates the random output of the computer play */
    choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    /* plays one single round of the r-p-s game */

    /* stating the player choice and computer choice */
    console.log("Player: ",playerSelection);
    console.log("Computer: ", computerSelection);

    /* rock-paper-scissors logic implementation */
    if (playerSelection==computerSelection){
        return "Draw"
    } else if (computerSelection=="rock") {
        if (playerSelection=="paper"){
            return "You Win! Paper beats Rock";
        } else if (playerSelection=="scissors"){
            return "You Lose! Rock beats Scissors";
        }
    } else if (computerSelection=="paper"){
        if (playerSelection=="scissors"){
            return "You Win! Scissors beat Paper";
        } else if (playerSelection=="rock"){
            return "You Lose! Paper beat Rock";
        }
    } else if (computerSelection=="scissors") { 
        if (playerSelection=="rock"){
            return "You Win! Rock beats Scissors";
        } else if (playerSelection=="paper"){
            return "You Lose! Scissors beat Paper";
        }
    }
}

let playerSelection = "rock".toLowerCase();
let computerSelection = computerPlay().toLowerCase();

console.log("result: ", playRound(playerSelection,computerSelection))