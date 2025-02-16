/*

'use strict'

const hasDriverLicense = false
const passTest = true;

if(passTest) hasDriverLicense1 = true;
if(hasDriverLicense) console.log("i Can Drive")

function print() {
    console.log("Hello Worl")
}
// calling / running and invoking 
// print()

function add(a, b) {
    return a + b
}

console.log(add(3, 5))



function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

console.log(fruitProcessor(6, 4))



! function decleration

// const age = calcAge1(2003)
// console.log(age)

function calcAge1 (birthYear) {
    return 2025 - birthYear
}

const age1 = calcAge1(2003)
console.log(age1)

! function Expression (Anonymous function)

// const age3 = calcAge2(2005)
// console.log(age2)

! Error : Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {
    return 2025 - birthYear
}

const age2 = calcAge2(2005)
console.log(age2)



! Arrow function

const calcAge1 = (birthYear) => 2025 - birthYear;
const age1 = calcAge1(2002)
console.log(age1) 

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
}

console.log(yearUntilRetirement(2003, "Sidhant"))
console.log(yearUntilRetirement(2005, "Kartik"))



! Function calling Others function

const cutPieces = function (fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangesPieces = cutPieces(oranges)

    return juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges`
}

console.log(fruitProcessor(2, 3))



const calAge = function(birthYear) {
    return 2025 - birthYear
}

const yearUntilRetirement = (birthYear, firstName) => {
    const age = calAge(birthYear)
    const retirement = 65 - age
    if(age > 0) {
        return retirement
        console.log(`${firstName} retires in ${retirement} years`)
    } else {
        return -1
        console.log(`${firstName} has already retired 🎉`)
    }
}

console.log(yearUntilRetirement(1991, 'Sidhant'))
console.log(yearUntilRetirement(1950, 'Kartik'))


! Arrays

const friends = ["uttkars", "mota-bhai", "khatna-man"]
console.log(friends)

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

const years = new Array(1991, 2003, 2001, 2004)
console.log(years)


years[0] = 2002
console.log(years[0])

console.log(years.length)
console.log(years[years.length - 1])

const sidhant = ['Sidhant', "Singh", 22, "Pursuing B.Tech CSE" , friends]

// console.log(sidhant)

! Exercise of Array

const calAge = function(birthYear) {
    return 2025 - birthYear
}

const year = [2001, 2002, 2003, 2004, 2005]

const age1 = calAge(year[0])
const age2 = calAge(year[1])
const age3 = calAge(year[year.length - 1])

console.log(age1 , age2 , age3)

const ages1 = [age1 , age2, age3]
const ages2 = [calAge(year[0]) , calAge(year[0]), calAge(year[4])]

console.log(ages1)
console.log(ages2)
 
const res = [ages1 , ages2]
console.log(res)



! Basic Array Operation (Methods)

const years = [2001, 2002, 2003, 2004, 2005]
const friends = ["uttkars", "mota-bhai", "khatna-man"]

friends.push('Sidhant')
friends.unshift("Kartik")
console.log(friends)

const poped = friends.pop()
// console.log(poped)
// console.log(friends)

friends.shift()
// console.log(friends)

 console.log(friends.includes('uttkars'))
 console.log(friends.indexOf('uttkars'))

 

// ! Object

const sidhantObj = {
  firstName: "Sidhant",
  lastName: "Singh",
  course: "B.tech Cse",
  birthYear: 2005,
  job: "Developer",
  friends: ["kartik", "uttkarsh", "yuvraj", "wahid"],
};

console.log(sidhantObj);
// console.log(typeof sidhantObj)

// access the element of object
// console.log(sidhantObj['firstName'])
// console.log(sidhantObj.lastName)

const nameKey = "Name";
// console.log(sidhantObj['first' + nameKey])
// console.log(sidhantObj['last' + nameKey])

// const interestedIn = prompt(
//   "What do you want to know about sidhant !? Choose between firstName, lastName, birthYear, job, and friends"
// );
// console.log(sidhantObj[interestedIn]);

// if(sidhantObj[interestedIn]) {
//     console.log(sidhantObj[interestedIn])
// } else {
//     console.log("Wrong Request !! Choose between firstName, lastName, age, job, and friends")
// }

// add element in object

sidhantObj.location = "Bharat";
sidhantObj["twitter"] = "@sidhantrajput1";
// console.log(sidhantObj)

// challenge
// "Sidhant has 4 friend and his best friend is callled kartik"

console.log(sidhantObj["friends"]);
console.log(sidhantObj.friends[0]);

console.log(
  `${sidhantObj.firstName} has ${sidhantObj.friends.length} and his bestfrinend is called ${sidhantObj.friends[1]}`
);



const sidhant = {
    firstName: "Sidhant",
    lastName: "Singh",
    course: "B.tech Cse",
    birthYear: 2005,
    job: "Developer",
    friends: ["kartik", "uttkarsh", "yuvraj", "wahid"],
    hasDrivingLicence : true,

    // calAge : function(birthYear) {
    //     return 2025 - birthYear
    // }

    // calAge : function() {
    //     console.log(this)
    //     return 2025 - this.birthYear
    // }

    calAge : function() {
        this.age = 2025 - this.birthYear
        return this.age
    },

};

console.log(sidhant.calAge())
console.log(sidhant.calAge(2003))
console.log(sidhant['calAge'](2003))


! for loop
for(let i = 1; i <= 10; i++) {
    console.log(`${i*2}`)
}



const sidhant = [
  "Sidhant",
  "Singh",
  2025 - 2003,
  "Pursuing B.Tech CSE",
  ["Rishu", "Mohit", "kajal"],
];

const type = []

for(let i = 0; i < sidhant.length; i++) {
    // Reading from sidhant array
    console.log(sidhant[i], typeof sidhant[i])
    
    // Fillings types array
    // type[i] = typeof sidhant[i]
    type.push(typeof sidhant[i])
}

// console.log(type)

const year = [2001, 2002, 2003, 2004, 2005]
const age = []

for(let i = 0; i < year.length; i++) {
    age.push( 2025 - year[i] )
}

// console.log(age)

console.log("--- ONLY STRING ---")

for(let i = 0; i < sidhant.length; i++) {
    if(typeof sidhant[i] !== 'string') continue

    console.log(sidhant[i], typeof sidhant[i])
}

*/

const sidhant = [
    "Sidhant",
    "Singh",
    2025 - 2003,
    "Pursuing B.Tech CSE",
    ["Rishu", "Mohit", "kajal"],
];

// 4, 3 ..... 0

for(let i = sidhant.length - 1; i >= 0; i--) {
    console.log(i, sidhant[i])
}


for(let i = 0; i < 4; i++) {
    console.log(`--------- Starting Exercise 🚀 ${i}`)

    for(let j = 0; j < 3; j++) {
        console.log(`Lifting weight repetition ${j}`)
    }
}