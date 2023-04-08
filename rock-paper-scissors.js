function getComputerChoice() {   
    min = Math.ceil(0);
  max = Math.floor(3);
  const CHOICE = Math.floor(Math.random() * (max - min) + min);
  console.log(`the computer choice was ${CHOICE}`)
  switch(CHOICE) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection,computerSelection) {
  let dictionaryOfPossibilities = {rock: 0, paper: 1, scissors: 2};
  const matrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ]
  if(matrix[dictionaryOfPossibilities[playerSelection]][dictionaryOfPossibilities[computerSelection]] == 1) {
    console.log(`${playerSelection} beats ${computerSelection}, therefore the player won`);
  }
  else if(playerSelection == computerSelection) {
    console.log("it was a draw!");
  }
  else {
    console.log(`${computerSelection} beats ${playerSelection}, therefore the computer won`);
  }
}

let loop = true;
while(loop == true) {
  let playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLocaleUpperCase() == "scissors") {
    let computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
    loop = false;
  }  
}