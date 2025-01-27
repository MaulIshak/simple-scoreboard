// Select Element
const scoreElement1 = document.querySelector(".p1-display .score");
const scoreElement2 = document.querySelector(".p2-display .score");

const plusButton1 = document.querySelector(".p1-display button.plus");
const minusButton1 = document.querySelector(".p1-display button.minus");
const resetButton1 = document.querySelector(".p1-display button.reset");

const plusButton2 = document.querySelector(".p2-display button.plus");
const minusButton2 = document.querySelector(".p2-display button.minus");
const resetButton2 = document.querySelector(".p2-display button.reset");

const resetAllButton = document.querySelector(".reset-all");

const scoreIncrementInput = document.querySelector("#score-increment-input");
const maxScoreInput = document.querySelector("#max-score-input");

const winnerText = document.querySelector(".winner-text");

// Variable
let scoreP1 = 0;
let scoreP2 = 0;
let isWinned = false;
const defaultIncrement = 1;
const defaultMaxScore = 5;

let scoreIncrement = defaultIncrement;
let maxScore = defaultMaxScore;

scoreIncrementInput.addEventListener("change", () => {
  scoreIncrement = parseInt(scoreIncrementInput.value);
  const plusTxt = `+${scoreIncrement}`;
  const minusTxt = `-${scoreIncrement}`;
  plusButton1.innerHTML = plusTxt;
  plusButton2.innerHTML = plusTxt;
  minusButton1.innerHTML = minusTxt;
  minusButton2.innerHTML = minusTxt;
});

maxScoreInput.addEventListener("change", () => {
  maxScore = parseInt(maxScoreInput.value);
});

plusButton1.addEventListener("click", () => {
  if (!isWinned) {
    scoreP1 += scoreIncrement;
    if (scoreP1 >= maxScore) {
      scoreP1 = maxScore;
      winnerText.innerHTML = "Winner: Player 1";
      isWinned = true;
      scoreElement1.classList.add("win");
    }
    scoreElement1.innerHTML = scoreP1;
  }
});
plusButton2.addEventListener("click", () => {
  if (!isWinned) {
    scoreP2 += scoreIncrement;
    if (scoreP2 >= maxScore) {
      scoreP2 = maxScore;
      winnerText.innerHTML = "Winner: Player 2";
      isWinned = true;
      scoreElement2.classList.add("win");
    }
    scoreElement2.innerHTML = scoreP2;
  }
});
minusButton1.addEventListener("click", () => {
  if (scoreP1 > 0 && !isWinned) {
    scoreP1 -= scoreIncrement;
  }
  scoreElement1.innerHTML = scoreP1;
});
minusButton2.addEventListener("click", () => {
  if (scoreP2 > 0 && !isWinned) {
    scoreP2 -= scoreIncrement;
  }
  scoreElement2.innerHTML = scoreP2;
});
resetButton1.addEventListener("click", () => {
  scoreP1 = 0;
  scoreElement1.innerHTML = scoreP1;
  scoreElement1.classList.remove("win");
  if (isWinned) {
    isWinned = false;
  }
});
resetButton2.addEventListener("click", () => {
  scoreP2 = 0;
  scoreElement2.innerHTML = scoreP2;
  scoreElement2.classList.remove("win");
  winnerText.innerHTML = "Winner: No winner yet";
  if (isWinned) {
    isWinned = false;
  }
});
