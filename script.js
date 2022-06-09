
function computerPlay(){
    /* generates the random output of the computer play */
    choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function updateScoreUI(playerScore,cpuScore){
    const plrScr = document.querySelector("#plr-scr");
    plrScr.textContent = `${playerScore}`
    const cpuScr = document.querySelector("#cpu-scr");
    cpuScr.textContent = `${cpuScore}`
}

function playRound(playerSelection,computerSelection){
    /* plays one single round of the r-p-s game */
    computerSelection = computerPlay().toLowerCase();
    /* stating the player choice and computer choice */
    console.log("Player: ",playerSelection);
    console.log("Computer: ", computerSelection);

    const plrChoice = document.querySelector("#my-sel");
    plrChoice.textContent= `${playerSelection}`;
    plrChoice.setAttribute("style","text-align:center;");
    const cpuChoice = document.querySelector("#cpu-sel");
    cpuChoice.textContent= `${computerSelection}`;
    cpuChoice.setAttribute("style","text-align:center;");

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
    } 
}

function scoreCounter(result){
    if (result[4]=="W"){
        playerScore++;
    } else if(result[4]=="L"){
        cpuScore++;
    }
    console.log("Live scores: ");
    console.log("Player: ",playerScore);
    console.log("Computer: ",cpuScore);

    updateScoreUI(playerScore,cpuScore);
}


function gameWinner() {
    if (playerScore>cpuScore){
        console.log("You've Won the match!");
        let resContainer = document.querySelector('.res-container');
        resContainer.textContent = "You've Won the match!"
        resContainer.setAttribute("style", "text-align:center;");
    } else if(cpuScore>playerScore){
        console.log("You've Lost the match!");
        let resContainer = document.querySelector('.res-container');
        resContainer.textContent = "You've Lost the match!"
        resContainer.setAttribute("style", "text-align:center;");
    } else{
        console.log("It's a Draw!");
    }
    playerScore = 0;
    cpuScore = 0;
    updateScoreUI(playerScore,cpuScore)
}


let playerScore = 0;
let cpuScore = 0;



let computerSelection
const mainButtons = document.querySelectorAll(".main-btn");

mainButtons.forEach((button)=> {
    button.addEventListener('click', () => {
        let playerSelection = button.id
        console.log("player selection: ",playerSelection)
        let result = playRound(playerSelection,computerSelection)
        console.log(result)
        const res = document.querySelector("#res");
        res.textContent = `${result}`;
        scoreCounter(result)
        if (playerScore ==3 || cpuScore == 3){
            gameWinner()
        }
    }
    ) }
    );

    
