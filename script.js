// Randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
  //randomly generate num 1-3
  //return if 1 rock, if 2 paper, if 3 scissors - make sure they're all LC
}

// Plays a single round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
  // convert playerselection to lowercase
  // if ps = cs, return tie
  // else if (ps = rock and cs = scissors) or (ps = scissors and cs = paper) or (ps = paper and cs = rock), return win
  // else return lose
}

// Plays a 5 round game of rock, paper, scissors
function playGame() {
  // INIT wins, losses, and ties = 0
  // FOR each game 1-5
  //  PROMPT user input
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
