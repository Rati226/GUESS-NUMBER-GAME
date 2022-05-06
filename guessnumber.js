let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const messageValue = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    messageValue("no number😟");
  } else if (guess === secretNumber) {
    messageValue("correct number 🤗");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageValue(guess > secretNumber ? "📈 too high" : "📉 too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageValue("you lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//  else if (guess < secretNumber) {
//     if (score > 1) {
//       messageValue();
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       messageValue()"you lost the game";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageValue("start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "15rem";
});
