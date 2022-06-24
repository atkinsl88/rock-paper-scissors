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
  var computerChoice = computerRoll();

  // Display the result and winner
  console.log(compare(userChoice, computerChoice));
  console.log(result[0], result[1])

  var getResult = (function() {
    if (result[1] === "user") {
      userScore++;
      console.log("7a. Add one to user! userScore is now " + userScore);
      return userScore;
    } else if (result[1] === "comp") {
      compScore++;
      console.log("7b. Add one to computer! compScore is now " + compScore);
      return compScore;
    } else if (result[1] === "tie") {
      console.log("7c. It was a tie!")
    }
  } () );
  console.log("User Score is now " + userScore + ", while Computer Score is now " + compScore + ".");


  elUserPick.textContent = choice;
  elCompPick.textContent = computerChoice;
  elOverallResult.textContent = result[0];
  elUserScore.textContent = userScore;
  elCompScore.textContent = compScore;


}


var rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
  userChoice("rock");
}, false);

var paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
  userChoice("paper");
}, false);

var scissorBox = document.getElementById('scissors');
scissorBox.addEventListener('click', function() {
  userChoice("scissors");
}, false);