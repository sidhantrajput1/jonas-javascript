"use strict";

const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");
const counter = document.querySelector("#counter");
const resetBtn = document.querySelector(".resetBtn");

// let count = 1;

// increaseBtn.addEventListener('click', function(e) {
//     count++;
//     counter.textContent = count;
// })

// decreaseBtn.addEventListener('click', function(e) {
//     if (count > 1) {
//         count--;
//         counter.textContent = count;
//     }
// })

// resetBtn.addEventListener('click', function(e) {
//     count = 1;
//     counter.textContent = count;
// })

let count = localStorage.getItem("Count")
  ? parseInt(localStorage.getItem("Count"))
  : 1;
counter.textContent = count;

function updateCounter(newCount) {
    count = newCount;
    counter.textContent = count;
    localStorage.setItem("Count", count)
}

increaseBtn.addEventListener('click', function() {
    updateCounter(count + 1)
})

decreaseBtn.addEventListener('click', function() {
    if (count > 1) {
        updateCounter(count - 1)
    }
})

resetBtn.addEventListener('click', function() {
    updateCounter(1)
})