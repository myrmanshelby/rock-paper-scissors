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
  // convert playerselection to lowercase
  playerSelection = playerSelection.toLowerCase();

  // return result of round
  //tie case
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
  }
  // cases where player loses
  else {
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

    console.log(
      playerSelection +
        " " +
        computerSelection +
        "wins: " +
        wins +
        " losses: " +
        losses +
        " ties: " +
        ties
    );
  }
  //  CALL playRound
  //  IF win THEN
  //    INCREMENT wins
  //  ELSE IF loss
  //    INCREMENT losses
  //  ELSE
  //    INCREMENT ties
  //
  // IF more wins than losses, log win
  // ELSE IF more losses than wins, log loss
  // ELSE IF wins = losses, log tie
}
