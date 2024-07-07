"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let score = 20;
let highscore = 0;
const scoreEL = document.querySelector(".score");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    ////////////////////////
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreEL.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreEL.textContent = 0;
    }
  } else if (!guess) {
    displayMessage("⛔️ No number!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  scoreEL.textContent = score;
  displayMessage("Start guessing...");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
