"use strict";

// document.querySelector('.message').textContent = "🎉 Correct Number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number";
    displayMessage("🎉 Correct Number");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong (Refactoring the code below)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥you lost the game!";
      displayMessage("💥you lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
    }
  }

  // // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥you lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".number").textContent = secretNumber;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     console.log(secretNumber);
  //   } else {
  //     document.querySelector(".message").textContent = "💥you lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector(".number").textContent = secretNumber;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
