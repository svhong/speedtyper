window.addEventListener("load", init);

//Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// to change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [
  "pig",
  "andouille",
  "pastrami",
  "prosciutto",
  "alcatra",
  "frankfurter",
  "Tail",
  "boudin",
  "porchetta",
  "tongue",
  "jowl",
  "shankle",
  "pastrami",
  "chuck",
  "shoulder",
  "turducken",
  "sirloin",
  "Ground",
  "round",
  "chuck",
  "radicchio",
  "gram",
  "dulse",
  "parsnip",
  "napa",
  "cabbage",
  "brussels",
  "sprout",
  "cabbage",
  "Catsear",
  "cauliflower",
  "garbanzo beans",
  "yarrow",
  "salsify",
  "chicory",
  "garlic",
  "bell",
  "pepper",

  "napa cabbage",
  "lettuce",
  "tomato",
  "kale",
  "arugula",
  "melon",
  "bologi",
  "rutabaga",
  "tigernut",
  "gumbo",
  "grape",
  "kale",
  "kombu",
  "cauliflower",
  "salsify",
  "kohlrabi",
  "okra",
  "lettuce",
  "broccoli",
  "celery",
  "lotus root",
  "carrot",
  "purslane",
  "turnip",
  "greens",
  "Jicama",
  "garlic",
  "courgette",
  "coriander",
  "radicchio",
  "plantain",
  "scallion",
  "cauliflower",
  "fava",
  "bean",
  "desert",
  "raisin",
  "spring",
  "onion",
  "chicory",
  "bunya nuts",
  "lettuce",
  "water spinach",
  "gram",
  "fava bean",
  "leek",
  "dandelion",
  "silver",
  "beet",
  "eggplant",
  "bush",
  "tomato"
];
//Initialize Game
function init() {
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  //check timer
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);
}

// start match function
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

//Match currentWord to wordInput

//pick and show a random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  // output random word
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  // confirm time doesn't run out
  if (time > 0) {
    //decrement timer
    time--;
  } else if (time === 0) {
    //game over
    isPlaying = false;
  }

  //show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
