var userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

var computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

var result;
if (userChoice === computerChoice) {
  result = "It's a tie!";
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    result = "You win! Rock beats scissors.";
  } else {
    result = "Computer wins! Paper covers rock.";
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    result = "You win! Paper covers rock.";
  } else {
    result = "Computer wins! Scissors cut paper.";
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    result = "Computer wins! Rock beats scissors.";
  } else {
    result = "You win! Scissors cut paper.";
  }
} else {
  result = "Invalid choice. Please choose either Rock, Paper, or Scissors.";
}

alert(result);
