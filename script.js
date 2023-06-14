// DOM elements
const main = document.querySelector("main");
const buttons = document.querySelectorAll(".choice-btn");
const roundNumText = document.querySelector("#round-num");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");
const roundOutcomeText = document.querySelector("#round-outcome");
const totalText = document.querySelector("#total-score");

const winHTML = "<p> You Won! <p>"
const lossHTML = "<p> Game over. You lost.<p>"


let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const selections = ["Rock", "Paper", "Scissors"];
  const randomChoice = selections[Math.floor(Math.random() * selections.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {

  let outcome;

  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      outcome = "Draw";
    } else if (computerSelection == "Paper") {
      outcome = "Loss";
    } else { 
      outcome = "Win";
    }
  }

  if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      outcome = "Win";
    } else if (computerSelection == "Paper") {
      outcome = "Draw";
    } else { 
      outcome = "Loss";
    }
  }

  if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      outcome = "Loss";
    } else if (computerSelection == "Paper") {
      outcome = "Win";
    } else { 
      outcome = "Draw";
    }
  }
  if (outcome == "Win") {
    playerScore ++;
  } else if (outcome == "Loss") {
    computerScore ++; 
  }

  if (playerScore > 4) {
    main.innerHTML = winHTML;
  }

  if (computerScore > 4) {
    main.innerHTML = lossHTML;
  }

  roundOutcomeText.textContent = "Outcome: " + outcome;

  totalText.textContent = "Player: " + playerScore + " Computer: " + computerScore;
}


function playGame(event) {
  roundCount++;
  roundNumText.textContent = "Round " + roundCount;

  let playerSelection;

  const btnId = event.target.id;

  if (btnId == "rock-btn") {
    playerSelection = "Rock";
  }
  if (btnId == "paper-btn") {
    playerSelection = "Paper";
  }
  if (btnId == "scissors-btn") {
    playerSelection = "Scissors";
  }

  let computerSelection = getComputerChoice();

  playerChoiceText.textContent = "Your Selection: " + playerSelection;
  computerChoiceText.textContent = "Computer's Selection: " + computerSelection;

  playRound(playerSelection, computerSelection);
}

buttons.forEach((button) => {
  button.addEventListener("click", playGame)
});
