'use strict';
let score = 20;
let highscore = 0;
let number_generated = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.guess').value = '';
const initialstate = function () {
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
const winstate = function () {
  document.querySelector('.message').textContent =
    'You guessed the correct number 🎉';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '29rem';
  document.querySelector('.number').textContent = number_generated;
  document.querySelector('.score').textContent = 20;
  number_generated = Math.trunc(Math.random() * 10) + 1;
  score = 20;
};
document.querySelector('.check').addEventListener('click', function () {
  initialstate();
  let guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  if (guess === number_generated) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    winstate();
  } else if (!guess) {
    document.querySelector('.message').textContent = 'No values entered ⛔';
  } else if (guess > number_generated && score > 1) {
    document.querySelector('.message').textContent = 'Value too high 📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number_generated && score > 1) {
    document.querySelector('.message').textContent = 'Value too low 📉';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Game Over 😞😞';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.guess').value = '';
  initialstate();
});
