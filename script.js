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
    } else if (playerSelection=="rock") {
        if (computerSelection=="paper"){
            return "You Lose! Paper beats Rock";
        } else if (computerSelection=="scissors"){
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="scissors"){
            return "You Lose! Scissors beat Paper";
        } else if (computerSelection=="rock"){
            return "You Win! Paper beats Rock";
        }
    } else if (playerSelection=="scissors") { 
        if (computerSelection=="rock"){
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection=="paper"){
            return "You Win! Scissors beat Paper";
        }
    } else if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors" ){
        return "Wrong Player input"; /* this will be deleted with the graphical interface */
    }
}

function game() { 
    /* play a 5 round game of rock-paper-scissors */

    /* initialize the score */
    let playerScore = 0;
    let cpuScore = 0;

    /* first to three wins: playerScore < 3 && cpuScore < 3 */
    /* five rounds */
    for(let i=0;i<5;i++){

        /* player and computer selections */
        let playerSelection = prompt("Rock-Paper-Scissor?").toLowerCase();
        let computerSelection = computerPlay().toLowerCase();

        let result = playRound(playerSelection,computerSelection)
        console.log(result)
        if (result[4]=="W"){
            playerScore++;
        } else if(result[4]=="L"){
            cpuScore++;
        }
        console.log("Live scores: ");
        console.log("Player: ",playerScore);
        console.log("Computer: ",cpuScore);

        if (playerScore>cpuScore){
            console.log("You've Won!");
        } else if(cpuScore>playerScore){
            console.log("You've Lost!");
        } else{
            console.log("It's a Draw!");
        }
    }


}


game()
