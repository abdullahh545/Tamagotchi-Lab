const petState = {
  fun: 0,
  food: 0,
  rest: 0,
};

let intervalId;
let isGameOver;

const funValueEl = document.getElementById("fun-value");
const foodValueEl = document.getElementById("food-value");
const restValueEl = document.getElementById("rest-value");
const endMessageEl = document.getElementById("end-message");
const restartBtnEl = document.getElementById("btn-restart");
const playBtnEl = document.getElementById("btn-play");
const feedBtnEl = document.getElementById("btn-feed");
const restBtnEl = document.getElementById("btn-rest");

// Button actions
playBtnEl.addEventListener("click", () => {
  if (!isGameOver) petState.fun += 1;
  updateDisplay();
});
feedBtnEl.addEventListener("click", () => {
  if (!isGameOver) petState.food += 1;
  updateDisplay();
});
restBtnEl.addEventListener("click", () => {
  if (!isGameOver) petState.rest += 1;
  updateDisplay();
});
restartBtnEl.addEventListener("click", () => {
  resetGame();
});

// Start game
startGame();

function startGame() {
  isGameOver = false;
  intervalId = setInterval(gameTick, 2000);
  updateDisplay();
}

function gameTick() {
  randomizeStats();
  checkEnd();
  updateDisplay();
}

function randomizeStats() {
  const randomInc = () => Math.floor(Math.random() * 4);
  petState.fun += randomInc();
  petState.food += randomInc();
  petState.rest += randomInc();
}

function updateDisplay() {
  funValueEl.textContent = petState.fun;
  foodValueEl.textContent = petState.food;
  restValueEl.textContent = petState.rest;
}

function checkEnd() {
  if (petState.fun >= 10 || petState.food >= 10 || petState.rest >= 10) {
    isGameOver = true;
    clearInterval(intervalId);
    endMessageEl.classList.remove("hidden");
    restartBtnEl.classList.remove("hidden");
  }
}

function resetGame() {
  petState.fun = 0;
  petState.food = 0;
  petState.rest = 0;
  isGameOver = false;
  endMessageEl.classList.add("hidden");
  restartBtnEl.classList.add("hidden");
  startGame();
}
