'use strict';

// DEFAULT VALUES
const PLAYER_DEFAULT_SCORE = 0;

// Initial variables
let playerOneScore = PLAYER_DEFAULT_SCORE;
let playerTwoScore = PLAYER_DEFAULT_SCORE;
let PLAYER_TURN = 0; // Can be only 0 (first player) and 1 (second player)
let currentScore = 0;

// DOM elements
const resetButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdDiceButton = document.querySelector('.btn--hold');

const currentDiceImage = document.querySelector('.dice');

const playerOneScoreDiv = document.querySelector('#score--0');
const playerTwoScoreDiv = document.querySelector('#score--1');

const playerOneCurrentScoreDiv = document.querySelector('#current--0');
const playerTwoCurrentScoreDiv = document.querySelector('#current--1');

const playerOneBackgroundDiv = document.querySelector('.player--0');
const playerTwoBackgroundDiv = document.querySelector('.player--1');

// Functions

const resetGame = () => {
  if (PLAYER_TURN) {
    togglePlayerTurn();
  }
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreDiv.innerHTML = playerOneScore;
  playerTwoScoreDiv.innerHTML = playerTwoScore;
};

const togglePlayerTurn = () => {
  if (PLAYER_TURN === 0) {
    playerOneBackgroundDiv.classList.toggle('player--active');
    playerTwoBackgroundDiv.classList.toggle('player--active');
    playerOneCurrentScoreDiv.innerHTML = PLAYER_DEFAULT_SCORE;
    PLAYER_TURN = 1;
  } else {
    playerOneBackgroundDiv.classList.toggle('player--active');
    playerTwoBackgroundDiv.classList.toggle('player--active');
    playerTwoCurrentScoreDiv.innerHTML = PLAYER_DEFAULT_SCORE;
    PLAYER_TURN = 0;
  }
};

const handleDiceRoll = () => {
  // Generating random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // If the randomNumber is 1, then reset temporary score and end player's turn
  if (randomNumber === 1) {
    togglePlayerTurn();
    currentScore = 0;
    currentDiceImage.src = 'images/dice-1.png';
    return;
  }

  // if it's not 1, then set the current roll on picture
  currentDiceImage.src = `images/dice-${randomNumber}.png`;

  currentScore += randomNumber;

  // Increasing player score depending on who's turn it is
  if (!PLAYER_TURN) {
    playerOneCurrentScoreDiv.innerHTML = currentScore;
  } else {
    playerTwoCurrentScoreDiv.innerHTML = currentScore;
  }
};

const handleDiceHold = () => {
  if (!PLAYER_TURN) {
    playerOneScore += currentScore;
    playerOneScoreDiv.innerHTML = playerOneScore;
  } else {
    playerTwoScore += currentScore;
    playerTwoScoreDiv.innerHTML = playerTwoScore;
  }
  currentScore = 0;
  togglePlayerTurn();
};

// Event Listeners
resetButton.addEventListener('click', resetGame);
rollDiceButton.addEventListener('click', handleDiceRoll);
holdDiceButton.addEventListener('click', handleDiceHold);
