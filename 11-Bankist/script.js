"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
("use strict");

///////////////////////////////////////
// Modal window
///
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

// Page Navigation

// document.querySelectorAll('.nav__link').forEach
// ((el) => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault()
//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({behavior : 'smooth'})
//   })
// })

// this is the better performance method

document.querySelector(".nav__links").addEventListener("click", (e) => {
  // console.log(e.target)
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed Contenct

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  if(!clicked) return null;

  // Remove Active Classed
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate Tab
  clicked.classList.add("operations__tab--active");

  // Active Content Area
  // console.log(clicked.dataset)
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// console.log(h1)

/////////////////////////////////////////////////

/// selection element

// console.log(document)
// console.log(document.documentElement)
// console.log(document.documentURI)
// console.log(document.head)
// console.log(document.body)

// console.log(document.querySelector('.nav__item'))
// const allSections = document.querySelectorAll('.section')
// console.log(allSections)

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button')
// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'))

/* 

// CREATING AND INSERTING ELEMENTS

const header = document.querySelector(".header");

const message = document.createElement("div");
message.classList.add("cookie-message");

message.textContent = "We use cookied for improved functionality and analytics";
message.innerHTML =
  "We use cookied for improved functionality and analytics. <button class='btn btn-close-cookie'>Got it<button>";

  // header.prepend(message)
  // header.appendChild(message)
  header.append(message)
  // header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)

// Deleting Element
document.querySelector('.btn-close-cookie').addEventListener('click', function() {
    message.remove();
    // message.parentElement.removeChild(message) // old way
})

// Styles
message.style.backgroundColor = '#37383d'
message.style.width = "120%"

console.log(message.style.backgroundColor)
console.log(message.style.color)


console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes

const logo = document.querySelector('.nav__logo')
console.log(logo)
console.log(logo.className)
console.log(logo.alt)
console.log(logo.src)

logo.alt = "Beautiful minimalist logo"

// Don't use 
logo.className = "sidhant"

console.log(logo.className)
console.log(logo.alt)

// Non-Standard
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'))

logo.setAttribute('company', 'bankist')

// classes always prepare this
logo.classList.add('c', 'j')
logo.classList.remove('c', 'j', 'sidhant')
logo.classList.toggle("d")
logo.classList.contains('f')
console.log(logo.classList.contains('f'))

*/

/* 

! very Important 💀⚡

const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("Current Scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  ! Old School way
  window.scrollTo(s1coords.left, s1coords.top)
  window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    right: s1coords.top + window.pageYOffset,
    behavior : 'smooth'
  });

  ! Modern way to implemntaing scrolling
  section1.scrollIntoView({behavior : 'smooth'})
});


!

// scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({behavior : 'smooth'})
});


*/

// event listerner
/*


const h1 = document.querySelector('h1');
console.log(h1)

const alertH1 = function(e) {
  alert("addEventListener: Great! You are reading :D");

  h1.removeEventListener('mouseenter', alertH1)
};

h1.addEventListener('mouseenter', alertH1);

h1.onmouseenter = alertH1
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000)

*/

// Event Propagation

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomInt(1, 10))

const randomColor = () => {
  return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(
    0,
    255
  )})`;
};

// console.log(randomColor());

/*

const h1 = document.querySelector('h1')
console.log(h1)

// Going Downwards : child
console.log(h1.childElementCount)
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)

console.log(h1.firstElementChild)
console.log(h1.lastElementChild)


// Going Upwards : Parents
console.log(h1.parentElement) 
console.log(h1.parentNode)

console.log(h1.closest('.header'))

h1.closest('.header').style.background = 'var(--gradient-primary)'

// Going Sideways : Siblings
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.previousSibling)
console.log(h1.nextSibling)

*/
