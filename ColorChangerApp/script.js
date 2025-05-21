"use strict";

const colorBtn = document.querySelector("#colorBtn");
const colorCode = document.querySelector("#colorCode");

// console.log(colorBtn)

// const random = Math.floor(Math.random() * 10)
// console.log(random)

// function randomNumber(min, max) {
//   const random = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log(random);
// }

// randomNumber(5, 10);

function getColorCode() {
  const letters = "0123456789abcdef";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

colorBtn.addEventListener("click", function () {
  const backgroundColor = getColorCode();
  document.body.style.backgroundColor = backgroundColor;
  colorCode.textContent = `Current Color: ${backgroundColor}`;
});

// console.log(color);
// console.log(letters);
function myColor() {
    const latters = "0123456789abcdef"
    let color = "#"
    for(let i = 0; i < 6; i++) {
        color += latters[Math.floor(Math.random() * 16)]
    }
    console.log(color)
}

myColor()