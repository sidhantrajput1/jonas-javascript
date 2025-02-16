"use strict";

/* 
const print = document.querySelector('.message')
console.log(document.querySelector('.message').textContent)
let number = document.querySelector('.number')
const message = document.querySelector('.message').textContent;

console.log(message)

number = Math.floor(Math.random() * 20 + 1)
let guess = document.querySelector('.guess').value = 12
let guessValue = parseInt(guess) 

if(guessValue === number) {
    console.log(document.querySelector('.message').textContent = 'Correct Number')
}


console.log(guessValue)
console.log(number)



let number = document.querySelector(".number");
number = Math.floor(Math.random() * 20 + 1);
let score = 20;

console.log(number);

document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});

document.querySelector(".check").addEventListener("click", function () {
  // console.log(document.querySelector('.guess').value)

  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔";
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too Low😑";
    score--;
    document.querySelector(".score").textContent = score;
  } else if ( guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High😁🧣";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
        document.querySelector('.messag e').textContent = '🤡 You Lost the game'
    }
  } else {
    document.querySelector(".message").textContent = "Correct Number 🥳🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = guess;
    score--;
    document.querySelector(".highscore").textContent = score;
  }
});

*/

let number = Math.floor(Math.random() * 20 + 1); // Store the random number separately
let score = 20;
let highscore = 0;

console.log(number);

// document.querySelector(".again").addEventListener("click", function () {
//   location.reload();
// });

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value); // Convert guess to a number
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number ⛔";
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low 😑";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤡 You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High 😁🧣";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤡 You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    document.querySelector(".message").textContent = "Correct Number 🥳🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = number; 
    document.querySelector(".number").style.width = '30rem'; 

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});


document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    number = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
    document.querySelector(".guess").value = ''
});
