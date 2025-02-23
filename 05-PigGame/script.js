"use strict";

// Selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
let diceEl = document.querySelector(".dice");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//  Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add("hidden");

// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let score, currentScore, activePlayer, playing;

const init = function() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active')
  player0El.classList.remove('player--active')
}

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //generating the random dice roll
    const dice = Math.floor(Math.random() * 6 + 1);
    console.log(dice);

    // display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `./img/dice-${dice}.png`;

    // cheked roll for 1 : if true, switch the next player
    if (dice !== 1) {
      // add dice the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      // document.getElementById(`current--${activePlayer}`).textContent = 0
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active')
      // player1El.classList.toggle('player--active')
    }
  }
});

btnHold.addEventListener("click", function () {
  // console.log("hold on")
  if (playing) {
    // Add the current score to active player's score
    score[activePlayer] += currentScore;
    console.log(score[activePlayer]);
    // scores[1] = score[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // Check if player's score is >= 100
    if (score[activePlayer] >= 20) {
      // finish the game
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
      // Switch to the next player
    }
  }
});


btnNew.addEventListener('click' , init())