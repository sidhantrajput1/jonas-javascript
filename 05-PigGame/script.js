// Selecting Elements
const score0El = document.getElementById('score--0')
const score1El = document.querySelector('#score--1')
let diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let current0El = document.getElementById('current--0');        
let current1El = document.getElementById('current--1');
const player0El = document.getElementById('name--0')        
const player1El = document.getElementById('name--1')        

//  Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const score = []
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    //generating the random dice roll
    const dice= Math.floor(Math.random() * 6 + 1)
    console.log(dice)
    
    // display dice roll
    diceEl.classList.remove('hidden')
    diceEl.src = `./img/dice-${dice}.png`

    // cheked roll for 1 : if true, switch the next player
    if(dice !== 1) {
        // add dice the current score
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        // currentScore += dice
    }
})
