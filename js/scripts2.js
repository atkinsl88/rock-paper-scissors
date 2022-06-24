// DOM elements for later on
var elUserPick = document.getElementById('userPick');
var elCompPick = document.getElementById('compPick');
var elOverallResult = document.getElementById('overallResult');

// Create a function to compare the answers
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return result = ["The result is a tie!", "tie"];
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      return result = ["Rock wins", "User"];
    } else if (choice2 === 'paper') {
      return result = ["Paper wins", "Computer"];
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      return result = ["Paper wins", "user"];
    } else if (choice2 === 'scissors') {
      return result = ["Scissors win", "Comp"];
    }
  } else if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
      return result = ["Rock wins", "comp"];
    } else if (choice2 === 'paper') {
      return result = ["Scissors win", "user"];
    }
  }
}

// Create a function to handle the Computers choice
var computerRoll = function() {
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    return result = 'rock'
  } else if (computerChoice <= 0.66) {
    return result = 'paper'
  } else if (computerChoice > 0.66) {
    return result = 'scissors'
  }
}

var userChoice = function(choice) {
  var userChoice = choice;
  console.log(choice)
  elUserPick.textContent = choice;

  var computerChoice = computerRoll();
  console.log(computerChoice)
  elCompPick.textContent = computerChoice;

  console.log(compare(userChoice, computerChoice));

  elOverallResult.textContent = (result[0] + " (" + result[1] + ") ");
  console.log(result[0], result[1])
}