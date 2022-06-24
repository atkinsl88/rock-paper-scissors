var userScore = 0;
var compScore = 0;

var userScore = document.getElementById('userScore');
var compScore = document.getElementById('compScore');
var userPick = document.getElementById('userPick');
var compPick = document.getElementById('compPick');
var overallResult = document.getElementById('overallResult');

// Handle compare results
var compare = function choices(choice1, choice2) {
  if (choice1 === choice2) {
    console.log('This is a tie');
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      console.log("Rock beats scissors");
    } else if (choice2 === "paper") {
      console.log("Paper beats rock");
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      console.log("Paper beats rock");
    } else if (choice2 === "scissors") {
      console.log("Scissors beats paper");
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      console.log("Rock beats scissors");
    } else if (choice2 === "paper") {
      console.log("Scissors beats paper");
    }
  }
}

// User choice
var userChoice = function(choice) {
  var userChoice = choice;
  console.log("1. User Choice is " + choice);
  var computerChoice = computerRoll();
  console.log(compare(userChoice, computerChoice));
  console.log("6. " + result[0]);
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
  userScore.textContent = userScore;
  compScore.textContent = compScore;
  userPick.textContent = userChoice;
  compPick.textContent = computerChoice;
  overallResult.textContent = result[0];
}

// Handle compute choice
var computerRoll = function() {
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    // console.log('Comp picks Rock')
  } else if (computerChoice <= 0.66) {
    // console.log('Comp picks Paper')
  } else if (computerChoice > 0.66) {
    // console.log('Comp picks Scissors')
  }
}
computerRoll()

// Handle buttons
var rockBtn = document.getElementById('rock');
  rockBtn.addEventListener('click', function() {
    userChoice("rock");
})

var paperBtn = document.getElementById('paper');
  paperBtn.addEventListener('click', function() {
    userChoice("paper");
})

var scissorsBtn = document.getElementById('scissors');
  scissorsBtn.addEventListener('click', function() {
    userChoice("scissors");
})