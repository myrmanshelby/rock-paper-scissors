// Randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  // Randomly generate num 1-3
  let rand = Math.floor(Math.random() * 3);

  // Return computer choice based on number assignment
  switch (rand) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// Plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // return result of round
  if (playerSelection === computerSelection) {
    return "tie";
  }
  //cases where player wins
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

// Plays a 5 round game of rock, paper, scissors
function playGame() {
  // INIT wins, losses, and ties = 0
  let wins = 0;
  let losses = 0;
  let ties = 0;

  // Play rounds 1-5
  for (let i = 0; i < 5; i++) {
    // get user input and convert to lowercase
    let playerSelection = prompt(
      "Please type your selection (rock, paper, or scissors)."
    );

    // confirm that user input is valid
    while (
      !(
        playerSelection.toLowerCase() === "rock" ||
        playerSelection.toLowerCase() === "paper" ||
        playerSelection.toLowerCase() === "scissors"
      )
    ) {
      playerSelection = prompt(
        "Invalid entry. Please type your selection (rock, paper, or scissors)."
      );
    }

    // play round and increment based on outcome
    let computerSelection = getComputerChoice();
    switch (playRound(playerSelection, computerSelection)) {
      case "win":
        wins++;
        break;
      case "lose":
        losses++;
        break;
      case "tie":
        ties++;
        break;
    }

    // TEST: prints results for each round
    /*
    console.log(
      playerSelection +
        " " +
        computerSelection +
        " wins: " +
        wins +
        " losses: " +
        losses +
        " ties: " +
        ties
    ); */
  }

  // Determine winner
  if (wins > losses) {
    console.log("Congrats! You win!");
  } else if (losses > wins) {
    console.log("Boo! You lose!");
  } else {
    console.log("Huh! It's a tie!");
  }
}

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

let winCount = 0;
let lossCount = 0;

const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(div);

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let compChoice = getComputerChoice();
    let result = playRound(button.id, compChoice);

    let losingChoice = compChoice;
    let winningChoice = button.id;

    if (result === "win") {
      winCount++;
    } else if (result === "lose") {
      lossCount++;
      winningChoice = compChoice;
      losingChoice = button.id;
    }

    let newText = "";
    if (result === "tie") {
      newText =
        "It's a tie!\r\nPlayer wins: " +
        winCount +
        " Player losses: " +
        lossCount;
    } else {
      newText =
        winningChoice +
        " beats " +
        losingChoice +
        "!\r\nPlayer wins: " +
        winCount +
        " Player losses: " +
        lossCount;
    }

    div.textContent = newText;

    if (winCount >= 5) {
      div.textContent += "\r\nPlayer wins!";
      winCount = 0;
      lossCount = 0;
    } else if (lossCount >= 5) {
      div.textContent += "\r\nPlayer loses!";
      winCount = 0;
      lossCount = 0;
    }
  });
});
