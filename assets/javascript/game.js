var computerChoice = ["a", "b", "c", "d", "e"];

//Variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

var letterToGuess = null;


document.onkeydown = function(event) {

   guessesLeft--;

   
   var letter = event.key.toLowerCase();

 
   guessedLetters.push(letter);

   
   updateGuessesLeft();
   updateGuessesSoFar();


   
   if (letter === letterToGuess) {

     wins++;
     document.querySelector("#wins").innerHTML = wins;

     
     reset();
   }

   
   if (guessesLeft === 0) {

     
     losses++;
     document.querySelector("#losses").innerHTML = losses;

     
     reset();
   }
 };

var reset = function() {
 guessesLeft = 9;
 guessedLetters = [];
 updateLetterToGuess();
 updateGuessesLeft();
 updateGuessesSoFar();
};

var updateGuessesLeft = function() {

   document.querySelector("#guesses-left").innerHTML = guessesLeft;
 };
 var updateLetterToGuess = function() {
  
   letterToGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
   console.log("letterToGuess: ",letterToGuess);
 };

 var updateGuessesSoFar = function() {
   
   document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
 };
 
updateLetterToGuess();
updateGuessesLeft();