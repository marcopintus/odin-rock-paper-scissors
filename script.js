/* queries */
const plrScr = document.querySelector("#plr-scr");
const cpuScr = document.querySelector("#cpu-scr");
const plrChoice = document.querySelector("#my-sel");
const cpuChoice = document.querySelector("#cpu-sel");
const res = document.querySelector("#res");
const mainButtons = document.querySelectorAll(".main-btn");


/* functions */

function computerPlay(){
    /* generates the random output of the computer play */
    choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

function updateScoreUI(playerScore,cpuScore){
    /* updates the score on the web page */
    plrScr.textContent = `${playerScore}`
    cpuScr.textContent = `${cpuScore}`
}

function playRound(playerSelection,computerSelection){
    /* plays one single round of the r-p-s game */
    computerSelection = computerPlay().toLowerCase();
    /* stating the player choice and computer choice */
    console.log("Player: ",playerSelection);
    console.log("Computer: ", computerSelection);
    /* writing the player and cpu choices on the web page */
    plrChoice.textContent= `${playerSelection[0].toUpperCase()+playerSelection.slice(1)}`;
    plrChoice.setAttribute("style","text-align:center;");
    cpuChoice.textContent= `${computerSelection[0].toUpperCase()+computerSelection.slice(1)}`;
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
    /* assigns a point to the winner of the round according to the r-p-s logic*/
    if (result[4]=="W"){
        playerScore++;
    } else if(result[4]=="L"){
        cpuScore++;
    }
    /* prints results to the console for debugging */
    console.log("Live scores: ");
    console.log("Player: ",playerScore);
    console.log("Computer: ",cpuScore);
    /* writes the updated score on the web page*/
    updateScoreUI(playerScore,cpuScore);
}

function resContCreation(){
    /* creates the containers for the final result of the match */
    const cntResCnt = document.createElement('div');
    cntResCnt.classList.add("cont-res-cont");
    document.body.appendChild(cntResCnt);
    const resContainer = document.createElement('div')
    resContainer.classList.add("res-container");
    cntResCnt.appendChild(resContainer);
}

function gameReset(){
    /* resets the game to the original status */
    playerScore = 0;
    cpuScore = 0;
    updateScoreUI(playerScore,cpuScore);
    const contResCont = document.querySelector(".cont-res-cont");
    contResCont.remove()
    plrChoice.textContent= "-";
    cpuChoice.textContent= "-";
    res.textContent = "-";
}

function endGamePop(resContainer){
    /* styles a div that shows the final result of the game and allows to play another match */
    resContainer.setAttribute("style", "width:800px; height:650px; margin-top:-900px; border:16px solid azure; border-radius: 24px;");
    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add("play-again");
    playAgainBtn.textContent = "Play Again"
    resContainer.appendChild(playAgainBtn)
    playAgainBtn.addEventListener('click',gameReset)

}

function gameWinner() {
    /* returns the winner of the match by displaying it on the final result div */
    if (playerScore>cpuScore){
        console.log("You've Won the match!");
        resContCreation()
        const resContainer  = document.querySelector('.res-container');
        resContainer.textContent = "You've Won the match!"
        endGamePop(resContainer)
    } else if(cpuScore>playerScore){
        console.log("You've Lost the match!");
        resContCreation()
        const resContainer  = document.querySelector('.res-container');
        resContainer.textContent = "You've Lost the match!"
        endGamePop(resContainer)
    }
}


/* variables initilaisation */
let playerScore = 0;
let cpuScore = 0;
let computerSelection

/* game */
mainButtons.forEach((button)=> {
    /* for each button an event listener is employed */
    button.addEventListener('click', () => {
                /* the player selection equals the clicked button id */
                let playerSelection = button.id
                console.log("player selection: ",playerSelection)
                /* with the player selection, a round is played */
                let result = playRound(playerSelection,computerSelection)
                console.log(result)
                /* the result of hte round is then printed on the page */
                const res = document.querySelector("#res");
                res.textContent = `${result}`;
                /* then the score is updated */
                scoreCounter(result)
                if (playerScore ==3 || cpuScore == 3){
                    /* the first to reach 3 points between player and cpu wins */
                    gameWinner()
                }
            }
        ) 
    }
);

    
