let time = 5;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

const words = [];
//Initialize Game
function init() {
  showWord(words);
}

//pick and show a random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);

  // output random word
  currentWord.innerHTML = words[randIndex];
}
