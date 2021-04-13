"use strict";
/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "correct number!";
*/
let num = Math.trunc(Math.random() * 20) + 1;
let scr = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", function () {
  scr = 20;
  displayMessage("Start guessing...");
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = scr;
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("No number");
  } else if (guess === num) {
    displayMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = num;
    document.querySelector(".number").style.width = "30rem";
    if (scr > highscore) {
      highscore = scr;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== num) {
    if (scr > 1) {
      displayMessage(guess > num ? "Too high!" : "Too low");
      scr--;
      document.querySelector(".score").textContent = scr;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});
