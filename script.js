function computerPlay(){
    choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*3)];
}

console.log(computerPlay())