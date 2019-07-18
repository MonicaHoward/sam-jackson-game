var movies = [
  "PULP FICTION",
  "SHAFT",
  "JUNGLE FEVER",
  "SNAKES ON A PLANE",
  "UNBREAKABLE",
  "THE INCREDIBLES",
  "DJANGO UNCHAINED",
  "COACH CARTER",
  "A TIME TO KILLS"
];

var randomMovie = movies[Math.floor(Math.random() * movies.length)];
var wordLength = [];
var letterCard = 0;
var wordInProgress = [];
var letterBlanks;
var incorrectLetters = [];
var remainingGuesses = 5;

var playGame = () => {
  var letters = randomMovie.toLowerCase().split("");
  letterBlanks = letters.length;

  console.log(randomMovie);
  console.log(letters);
  console.log("letterBlanks", letterBlanks);
  console.log("Word In Progress", wordInProgress);

  for (var i = 0; i < letterBlanks; i++) {
    wordInProgress.push("_");
  }
  document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
  document.querySelector("#letterCard").innerHTML = wordInProgress.join(" ");
};

var checkGuess = letter => {
  var isInWord = false;

  for (var j = 0; j < letterBlanks; j++) {
    if (randomMovie[j] === letter) {
      isInWord = true;
    }
    console.log("true or false " + isInWord);
  }
  if (isInWord) {
    for (var k = 0; k < letterBlanks; k++) {
      if (randomMovie[k] === letter) {
        wordInProgress[k] = letter;
        document.querySelector("#letterCard").innerHTML = wordInProgress.join(
          " "
        );
      }
      // console.log("wordInProgress ", wordInProgress);
    }
  } else {
    incorrectLetters.push(letter);
    remainingGuesses--;

    document.querySelector("#remainingGuesses").innerHTML = remainingGuesses;
    document.querySelector("#incorrectGuesses").innerHTML = incorrectLetters;
  }
};

document.onkeyup = function(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    var letterGuessed = e.key.toUpperCase();
    // console.log(letterGuessed);
    checkGuess(letterGuessed);
  }
};

playGame();
