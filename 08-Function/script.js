"use strict";

/* 

Default parameters

const bookings = [];

const createBooking = function (flightNum , numPassengers = 1, price = 199 * numPassengers) {
    Default values for parameters
    // ES5
    numPassengers = numPassengers || 1 
    price = price || 199   

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
    console.log(bookings)
}

createBooking('LH123')
createBooking('LH123', 2, 500)
createBooking('LH123', 5)   

*/

/* 

// How Paasing Arguments Works :  value as refrence
// 1. Value as reference : Primitive data types

const flight = 'LH234';

const jonas = {
    name : 'Jonas Schemedtmann',
    passport  : 12345677890
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'Lh888',
    passenger.name = 'Mr. ' + passenger.name

    if (passenger.passport === 12345677890) {
        alert("Checked in")
        console.log("Checked in", passenger.passport)   
    } else {
        alert("Wrong passport")
    }
}

// checkIn(flight, jonas)
// checkIn(flight, jonas)
// console.log(flight)
// console.log(jonas)


// is the same as doing
const flightNum = flight;
const passenger = jonas; // Reference to the object in memory

const newPassword = function(person) {
    personalbar.passport = Math.trunc(Math.random() * 10000000000)
    console.log(personalbar.passport)
}

newPassword(jonas)
checkIn(flightNum, jonas)   

*/

/*
// First class Function

// 1. function are treated as just like any other value
// a) store function in variable b) pass fucntion as argument c) return function from other fuction

function greeting() {
    console.log("Hey Kajal, Good morning! how's your day going");
}

greeting();

function sayHi() {
    console.log("Hi there!");
  }
  
function callFunction(func) {
    func(); // calling the function passed in
}
  
callFunction(sayHi); // passes sayHi as a value



const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

// console.log(oneWord("ahfduiHDBU"))

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ');
}

// console.log(upperFirstWord("hello Sidhant Singh"))
// higher order function
const transformer = function (str, fn)  {
    console.log(`Original String : ${str}`)
    console.log(`Transformed String : ${fn(str)}`)
    console.log(`Transformed by : ${fn.name}`)
}

transformer('javascript is the best', upperFirstWord)
transformer('javascript is the best', oneWord)

const high5 = function() {
    console.log('🦢')
}
document.body.addEventListener('click', high5)
// ['Sidhant', 'rahul', "ravi"].forEach(high5);

! function return fucntion

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeateHey = greet("Hey");
// console.log(typeof greeateHey)
greeateHey("Sidhant");
greeateHey("Kajal");

greet("Hello")("Yuvraj");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Wahid");

  
*/

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  // book : function () {}
  book(flightNum, name) {
    console.log(
      `${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight : `${this.iataCode}${flightNum}`, name})
  },
};

lufthansa.book(239, "Sidhant Singh")
lufthansa.book(536, "Kajal Singh")

console.log(lufthansa)

const eurowings = {
    airline : 'Eurowings',
    iataCode : 'SH',
    bookings : []
}

const book = lufthansa.book;

// call method
book.call(eurowings, 32, "Sarah Willims")
book.call(eurowings, 56, 'Jobas Schmedtmann')
console.log(eurowings)

book.call(lufthansa, 26, 'rose gyllon')
console.log(lufthansa)

const swiss = {
    airline : 'Swiss Air Lines',
    iataCode : 'MX',
    bookings : []
}

book.call(swiss, 45, 'weekend')
console.log(swiss)

// apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

// better way
book.call(swiss, ...flightData)
console.log(swiss)

