var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables
var wins = 0;
var score = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [0];
var computerGuess = [0];


if ((playerChoice === computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	computerGuess.push(compGuess);
    console.log(computerGuess[0]);
}
else if ((playerChoice !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoice[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess[0]);

document.onkeyup = function(event) {
	var playerChoice = event.key;
	lettersGuessed.push(playerChoice);
    console.log(computerGuess[0]);
}
	var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);