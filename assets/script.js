var movies = [
  "Pulp Fiction",
  "Shaft",
  "Jungle Fever",
  "Snakes on a Plane",
  "Unbreakabe",
  "The Incredibles",
  "Django Unchained",
  "Coach Carter",
  "A Time to Kill"
];


var randomWord = movies[Math.floor(Math.random() * movies.length)];
var wordLength = [];
var letterCard = 0;
var wordInProgress = [];
var letterBlanks;
var incorrectLetters = [];
var remainingGuesses = 5;




var playGame = () => {
  var letters = randomWord.split("");
  letterBlanks = letters.length;

  console.log(randomWord);
  console.log(letters);
  console.log("letterBlanks", letterBlanks);
  console.log("Word In Progress", wordInProgress);

  for (var i = 0; i < letterBlanks; i++) {
    wordInProgress.push("_");
  }

  document.querySelector("#letterCard").innerHTML = wordInProgress.join(" ");
}

document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;


var checkGuess = (letter) => {
  var letterInWord = false;

  for (var j = 0; j < letterBlanks; j++) {
    if(randomWord[j] === letter) {
      "YES"
      console.log("yes");
    }
    else {
      "No"
      console.log("no");
      incorrectLetters.push(letter);
      console.log(incorrectLetters);
    }
  }

console.log("yep " + letterBlanks);
console.log("Yup " + randomWord);
}


document.onkeyup = function(e){
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    var letterGuessed = e.key.toLowerCase();
    console.log(letterGuessed);
    checkGuess(letterGuessed);

  }
}

playGame();
