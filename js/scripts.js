// Initialize the user and computer scores and set them to 0.
var userScore = 0;
var compScore = 0;

// DOM elements for later on
var elUserScore = document.getElementById('userScore');
var elCompScore = document.getElementById('compScore');
var elUserPick = document.getElementById('userPick');
var elCompPick = document.getElementById('compPick');
var elOverallResult = document.getElementById('overallResult');

// Create a function to compare the answers
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return result = ["The result is a tie!", "tie"];
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      return result = ["Rock wins", "user"];
    } else if (choice2 === 'paper') {
      return result = ["Paper wins", "comp"];
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      return result = ["Paper wins", "user"];
    } else if (choice2 === 'scissors') {
      return result = ["Scissors win", "comp"];
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
  return computerChoice;
}

var userChoice = function(choice) {

  var userChoice = choice;
  var computerChoice = computerRoll();
  var compareChoice = compare(userChoice, computerChoice)
  console.log(compare(userChoice, computerChoice))

  var getResult = (function() {
    if (result[1] === "user") {
      userScore++;
      return userScore;
    } else if (result[1] === "comp") {
      compScore++;
      return compScore;
    } else if (result[1] === "tie") {
      console.log('Its a tie')
    }
  } () );
  elUserScore.textContent = userScore;
  elCompScore.textContent = compScore;
  elUserPick.textContent = choice;
  elCompPick.textContent = computerChoice;
  elOverallResult.textContent = compareChoice;
}