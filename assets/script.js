let movies = [
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


let randomWord = "";
let wordLength = [];
let letterCard = 0;
let wordInProgress = [];


let playGame = () => {

  let randomWord = movies[Math.floor(Math.random() * movies.length)];
  let letters = randomWord.split("");
  let letterBlanks = letters.length;

  console.log(randomWord);
  console.log(letters);
  console.log("LetterBlanks", letterBlanks);

  for (let i = 0; i < letterBlanks; i++) {
    wordInProgress.push("_");
  }
  console.log("Word In Progress", wordInProgress);

  document.querySelector("#letterCard").innerHTML = wordInProgress.join(" ");
}

document.onkeyup = function(e){
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    let letterGuessed = e.key.toLowerCase();
    console.log(letterGuessed);
  }

}

playGame();
