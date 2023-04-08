function getComputerChoice() {   
    min = Math.ceil(0);
  max = Math.floor(3);
  const CHOICE = Math.floor(Math.random() * (max - min) + min);
  switch(CHOICE) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getPlayerChoice() {
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  if(playerSelection == "rock" || playerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors"){
    return playerSelection;
  }
  else { 
  getPlayerChoice();
  }
}

function playRound(playerSelection,computerSelection) {
  let dictionaryOfPossibilities = {rock: 0, paper: 1, scissors: 2};
  const matrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];
  console.log(`Round: ${currentRound}`)
  if(matrix[dictionaryOfPossibilities[playerSelection]][dictionaryOfPossibilities[computerSelection]] == 1) {
    console.log(`${playerSelection} beats ${computerSelection}, therefore the player won`);
    return true;
  }
  else if(playerSelection == computerSelection) {
    console.log("it was a draw!");
  }
  else {
    console.log(`${computerSelection} beats ${playerSelection}, therefore the computer won`);
    return false;
  }
}

function game() {
  if (roundsLeft == 0){
    console.log("Result:")
    if (score[0] > score[1]) {
      console.log(`The player won ${score[0]} in ${rounds}, therefore the player won the game!`);
      return true;
    } else if (score[0] < score[1]) {
      console.log(`The computer won ${score[1]} in ${rounds}, therefore the computer won the game!`);
      return false;
    } else if (score[0] == score[1]) {
      console.log("It's a draw!");
      return false;
    }
  } else {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == true) {
      score[0] = score[0] + 1;
      roundsLeft = roundsLeft - 1;
      currentRound++;
      game();
    }
    else if (roundResult == false) {
      score[1] = score[1] + 1;
      roundsLeft = roundsLeft - 1;
      currentRound++;
      game();
    }
    else {
      roundsLeft = roundsLeft - 1;
      currentRound++;
      game();
    }
  }
}

let rounds = 1;
let currentRound = 1;
rounds = prompt("how many rounds do you want to play?");
let computerSelection = "Placeholder";
let playerSelection = "Placeholder";
let score = [0,0];
let roundsLeft = rounds;
console.log(game());