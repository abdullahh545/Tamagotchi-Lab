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

startGame();
