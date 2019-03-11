var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alert("hi");
console.log("game.js connected")

//Variables
var wins = 0;
var score = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerGuess = [];
var letterToGuess = null;



// if ((playerChoice === computerGuess[0]) && (guessesLeft > 0)) {
// 	guessesLeft = 9;
// 	lettersGuessed.length = 0;
// 	computerGuess.length = 0;
// 	var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// 	computerGuess.push(compGuess);
//     console.log(computerGuess[0]);
// }
// else if ((playerChoice !== computerGuess[0]) && (guessesLeft > 0)) {
// 	guessesLeft = guessesLeft-1;
// }

// else {
// 	guessesLeft = 9;
// 	lettersGuessed.length = 0;
// 	computerGuess.length = 0;
// 	var compGuess = computerChoice[Math.floor(Math.random() * computerChoices.length)];
// 	console.log(computerGuess[0]);

// document.onkeyup = function(event) {
//     var playerChoice = event.key.toLowerCase();
//     console.log("playercHoice: ", playerChoice);
// 	lettersGuessed.push(playerChoice);
//     console.log(computerGuess[0]);
// }
	// var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	// computerGuess.push(compGuess);
    // console.log(computerGuess[0]);
// This function will capture the keyboard clicks.
document.onkeydown = function(event) {
    // It's going to reduce the guesses by one
    guessesLeft--;
  
    // Lowercase the letter
    var letter = event.key.toLowerCase();
  
    // Then add the guess to the guessedLetters array
    guessedLetters.push(letter);
  
    // Then its going to run the update functions
    updateGuessesLeft();
    updateGuessesSoFar();
  
  
    // We'll check if there's a match.
    if (letter === letterToGuess) {
  
      // If there is then we win and we'll update the HTML to display the win.
      wins++;
      document.querySelector("#wins").innerHTML = wins;
  
      // Then we'll reset the game
      reset();
    }
  
    // If we are out of guesses...
    if (guessesLeft === 0) {
  
      // Then we will loss and we'll update the HTML to display the loss.
      losses++;
      document.querySelector("#losses").innerHTML = losses;
  
      // Then we'll call the reset.
      reset();
    }
  };
//    Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};
// Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function() {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
    // (i.e. guessesLeft will get displayed in HTML)
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
  };
  var updateLetterToGuess = function() {
    // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  };
  
  var updateGuessesSoFar = function() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas.
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
  };