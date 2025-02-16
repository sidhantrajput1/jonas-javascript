/*
console.log("hello world") 
let js = 'amazing';
if(js === 'amazing') alert("javascript is fun !!")

let firstName = "jonas"
console.log(firstName);


variable always written in camlecase
let person = "Sidhant";
console.log(person)

let javascriptIsFun = true
console.log(javascriptIsFun);

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'javascript')

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)


let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log(typeof year);
console.log(typeof null)




! let const var

let age = 14;
age = 15
console.log(age)

const birthYear = 2010
birthYear = 2011

const job;

var job = 'Teacher';
job = 'Programmer'
console.log(job)

lastName = 'Singh'
console.log(lastName) 




// Basic Operator

Math Operator

const now = 2037
const ageSidhant = now - 1991;
const ageMenu = now - 2018

console.log(ageSidhant - ageMenu)

const firstName = "Sidhant"
const lastName = "Singh"
console.log(firstName+' '+lastName)


let x = 10 + 5;
x += 10;
x *= 4
x++;
x--;
x--;
console.log(x)

Comparision Operator

let text1 = "20";
let text2 = "5";
let result = text1 > text2;
console.log(result)

console.log(text1 >= 24)



const now = 2037
const ageSidhant = now - 1991;
const ageMenu = now - 2018

console.log(now - 1991 < now - 2018)



// String template literal
const firstName = 'Sidhant'
const job = 'teacher'
const birthYear = '2003'
const year = '2025'

const sidhant = "I'm " + firstName + ', a ' + (year - birthYear) + " Year old " + job + '!'
console.log(sidhant) 

const newSidhant = `I'm ${firstName}, a ${year - birthYear} year old ${job}`
console.log(newSidhant)

--------------------------------------------------------------------
const age = 19;
const isOldEnough = age >= 18
console.log(isOldEnough)

if(isOldEnough) {
    console.log(`Sidhant can start drive license`)
} else {
    console.log("You can't drive")
}

const birthYear = 1998
let century;

if(birthYear <= 2000) century = 20 ;
else century = 21

console.log(century)
------------------------------------------------------------------------

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear) , inputYear)
console.log(Number(inputYear) + 18);

console.log(Number('Sidhant'))
console.log( typeof NaN);

const year = Number(inputYear)
console.log(typeof year)
console.log(year)

// type coercion
console.log('I am '+ 23 + ' years olf')
console.log('I am '+ String(23) + ' years olf')
console.log('23' - '10' - 3)
console.log('23' + '10' - 3)
console.log('23' / '10' )
console.log('23' * '10' )
------------------------------------------------------------

// Truthy and falsy value
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(1))
console.log(Boolean('sidhant'))
console.log(Boolean("0"))
console.log(Boolean(''))
console.log(Boolean([]))
console.log(Boolean({}))

const money = "0";
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job")
}

// Equailty Operator

const age = 18;
if(age === 18 ) console.log("You just became an adult :) ( Strict )")
if(age == 18 ) console.log("You just became an adult :) ( loose )")

const age = "18";
if(age === 18 ) console.log("You just became an adult :) ( Strict )")
if(age == 18 ) console.log("You just became an adult :) ( loose )")

// for input

const fav = prompt("what's you'r favourite number :) ")
console.log(fav);
console.log(typeof fav)


const hasDriverLicence =  true
const hasVision = false

console.log(hasDriverLicence && hasVision)
console.log(hasDriverLicence || hasVision)
console.log(hasDriverLicence !== hasVision)

*/

// The switch Statement

const day = 3;
let dayName;

switch(day) {
    case 1 : 
        dayName = "Monday"
        break;
    case 2 : 
        dayName = "TuesDay"
        break;
    case 3 : 
        dayName = "Wednesday"
        break;
    case 4 : 
        dayName = "Thursday"
        break;
    case 5 : 
        dayName = "Friday"
        break;
    default :
        dayName = 'weekend'
}

console.log(dayName)

const age = 23;
age >= 18 ? console.log("Drink wine") : console.log("Drink water")