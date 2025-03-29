/* 

"use strict";

console.log("hello world")


// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     order :  function(startIdx , mainIdx){
//         console.log(this);
//         const data = document.querySelector('.data');
//         data.addEventListener('click',()=>{
//             console.log(this);
//         })
//         return [this?.starterMenu[startIdx],this?.mainMenu[mainIdx]];
//     }
// }

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order :  function(startIdx , mainIdx){
        // console.log(this);
        return [this?.starterMenu[startIdx],this?.mainMenu[mainIdx]];
    }
}


console.log(restaurant.order(2,1));


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(a, b, c);
console.log(arr)

// const [first , second] = restaurant.categories;
// const [first , , second] = restaurant.categories;
// console.log(first, second);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

swap two element in array

let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary)

// destructuring of two sap elemt
[main, secondary] = [secondary, main];
console.log(main, secondary);

// recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring

const nested = [function name() {
    console.log("Hello Sidhant")
}, 2, ["Rohit", "Sidhant"], [5, 6]];

const nested = [1, 2, ["Rohit", "Sidhant"], [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);
console.log(nested[0])


// default values
const [p, q, r] = [8, 9];
const [p=1, q=1, r=1] = [8, 9];
const [p=1, q=1, r=1] = [8];
const [p=1, q=1, r=1] = [];
console.log(p, q, r)

*/

// ! Destructuring Object

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  orderDelivery: function ({ starterIdx, mainIdx, time, address }) {
    console.log(
      `Ordered recieved! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },

};

restaurant.orderDelivery({
  time: "10:30",
  address: "Nimbus, Parichok",
  mainIdx: 2,
  starterIdx: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// const {menu, starterMenu : starters} = restaurant;
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters)
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 4, c: 32 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


