const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const digletts = document.querySelectorAll('.diglett');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const holeIndex = Math.floor(Math.random() * holes.length);
  const hole = holes[holeIndex];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function showUp() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) showUp();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  showUp();
  setTimeout(() => (timeUp = true), 20000);
}

function hit(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

digletts.forEach((diglett) => diglett.addEventListener('click', hit));
