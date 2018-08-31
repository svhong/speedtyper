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
  "ground",
  "round",
  "jowl",
  "beef",
  "ribs",
  "alcatra",
  "frankfurter.",
  "Tail",
  "boudin",
  "porchetta,",
  "tongue",
  "jowl",
  "shankle",
  "pastrami",
  "chuck",
  "shoulder",
  "turducken",
  "sirloin",
  "frankfurter.",
  "Ground",
  "round",
  "chuck",
  "beef,",
  "burgdoggen",
  "frankfurter",
  "turducken",
  "pork",
  "cow.",
  "Hamburger",
  "t-bone",
  "pork",
  "loin",
  "ham",
  "chicken",
  "meatball",
  "shank.",
  "Sirloin",
  "short",
  "ribs",
  "meatloaf",
  "biltong",
  "burgdoggen",
  "capicola",
  "tenderloin",
  "bresaola",
  "tongue.",
  "Ground",
  "round",
  "corned",
  "beef",
  "salami,",
  "pork",
  "alcatra",
  "buffalo",
  "beef",
  "doner",
  "tongue.",
  "Boudin",
  "tail",
  "kielbasa",
  "shankle.",
  "Tri-tip",
  "meatball",
  "t-bone",
  "doner",
  "pork",
  "loin",
  "andouille.",
  "Leberkas",
  "biltong",
  "spare",
  "ribs",
  "pork",
  "loin",
  "frankfurter",
  "jowl,",
  "beef",
  "buffalo",
  "ground",
  "round",
  "andouille",
  "rump",
  "tongue",
  "pork",
  "bresaola.",
  "Kielbasa",
  "chicken",
  "tri-tip,",
  "pig",
  "prosciutto",
  "landjaeger",
  "swine",
  "bresaola",
  "brisket",
  "frankfurter",
  "tongue",
  "porchetta",
  "cupim"
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
