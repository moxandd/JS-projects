'use strict';

// All variables
let guessesAmount = 20;
let highscoreEver = 0;
let numberToGuess = Math.floor(Math.random() * 20) + 1;

// All objects we need to access on the page

const bodyElement = document.querySelector('body');

const resetButton = document.querySelector('.again');
const message = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const secretNumberPlaceholder = document.querySelector('.number');

// All functions we use in the project

const decreaseScore = () => {
  guessesAmount -= 1;
  score.innerHTML = guessesAmount;
};

const helpUserGuess = (userGuess, numberToGuess) => {
  if (userGuess < numberToGuess) {
    message.innerHTML = "It's too low...";
  } else {
    message.innerHTML = "It's too high...";
  }
};

const checkGuess = () => {
  const userGuess = document.querySelector('.guess').value;
  if (userGuess > 20 || userGuess < 0) {
    message.innerHTML = `The number can be only between 0 and 20!`;
  } else {
    const isUserWon = Number(userGuess) === numberToGuess;
    if (isUserWon) {
      message.innerHTML = `You won! It's ${userGuess} indeed!`;
      secretNumberPlaceholder.innerHTML = numberToGuess;
      bodyElement.style.backgroundColor = '#60b347';
      if (guessesAmount > Number(highscore.innerHTML)) {
        highscore.innerHTML = guessesAmount;
      }
    } else {
      decreaseScore();
      if (guessesAmount === 0) {
        message.innerHTML = `You've lost! It was number ${numberToGuess} all along...`;
        secretNumberPlaceholder.innerHTML = numberToGuess;
        bodyElement.style.backgroundColor = '#b32020';
      } else {
        message.innerHTML = 'GG WP...';
        helpUserGuess(userGuess, numberToGuess);
      }
    }
  }
};

const resetGame = () => {
  bodyElement.style.backgroundColor = '#222222';
  numberToGuess = Math.floor(Math.random() * 20) + 1;
  guessesAmount = 20;
  score.innerHTML = guessesAmount;
  message.innerHTML = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumberPlaceholder.innerHTML = '?';
};

// All event listeners we use in the project
resetButton.addEventListener('click', resetGame);
checkButton.addEventListener('click', checkGuess);
