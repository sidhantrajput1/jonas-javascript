/* 

"use strict";

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

  orderDelivery: function ({
    starterIdx = 1,
    mainIdx = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Ordered recieved! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your all delicious pasta with ${ing1} , ${ing2}, ${ing3}`
    );
  },
};

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

/* 


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

*/

// ! Spread Operator

/*  

const arr = [4, 5, 6];
const badArray = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(badArray);

// ...arr is spread operator

const newArray = [1, 2, 3, ...arr];
console.log(newArray);

console.log(...newArray);
console.log(1, 2, 3, 4, 5, 6);

const mainMenu = [...restaurant.mainMenu, "Gnooci"];
console.log(mainMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : String , arrays, map, set | Not  object
const str = "Sidhant";
const letters = [...str, "", "S", "I", "N", "G", "H"];

console.log(letters);
console.log(...str);

// Real World Example
const ingredients = [
  prompt("Let's make Pasta! Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients)

Objects

const newRestaurant = { foundIn: 1998, ...restaurant, founder: "Sidhant" };
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'
console.log(restaurant.name);
console.log(restaurantCopy.name)

*/

// ! Rest Pattern and Parameters

/*    


// 1) Destructuring 

// SPREAD : Because on right side of = 
const arr = [1, 2, 3, ...[4, 6, 7]]
// console.log(arr)


// REST : Because on left side of =

const [a, b, ...others] = [1, 2, 3, ...[4, 6, 7]]
console.log(a, b, others)

const [Pizza, , Risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(Pizza, Risotto,  othersFood)

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) Function

const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum)
};

add(1, 2, 3); 
add(1, 2, 3, 4, 5, 6, 7, 8);
add(3, 2);

const x = [7, 23, 10];
add(...x);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spianch');

*/

// ! Short Circuiting (&& and \\)

/*  

Short Circuiting (&& and \\)

console.log("------ OR -------");
console.log("hello" || 23);
console.log(23 || "hello");
console.log(true || 0);
console.log(undefined || null);
console.log("" || "sidhant");

// javascript always looks first truthy value if truthy value find the return first thruthy value
console.log(undefined || 0 || "" || "jonas" || 23 || null);

restaurant.numGuest = 23;

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log("------ AND -------");

console.log(0 && "jonas");
console.log(7 && "sidhant");

console.log("hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mashroom", "spaich", "chese");
}

restaurant.orderPizza && restaurant.orderPizza("mashroom", "spaich", "chese");

*/

/*   

restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10
console.log(guests)

// nullish : null or undefinded (NOT or '');
const guessCorrect = restaurant.numGuest ?? 10;
console.log(guessCorrect)

*/

// ! Logical Assignment Operator

/*  

const rest1 = {
  name : 'capri',
  numGuests : 0
}

const rest2 = {
  name : 'La Piazza',
  owner : 'Giovanni Rossi'
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

Nullish Assignment Operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

&& Assignment Operator

rest1.owner = rest1.owner && '<ANONYMOUS>'
rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1)
console.log(rest2)

*/

/* 

 ! for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+1} : ${el}`)
}



const weekdays = ['sunday', 'monday', 'tuesday'];

const openingHours = {
  [weekdays[1]]: {
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
}

openingHours : openingHours,

  ES6 enhanced object literals
  openingHours,

*/

/* 

! Optional chaining

// console.log(restaurant.openingHours.fri.mon.open)

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.fri.mon.open);
}

// With Optional Chaining ES6

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant?.openingHours?.mon?.open)

const days = ["sun", "mon", "tue", "wens", "thus", "frid", "sat"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed"
  console.log(`On ${day}, we open at ${open}`)
}

// Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisto?.(0, 1) ?? "Method does not exist");

// Arrays 

// const users = [{name : 'Sidhant', email : 'hello@sidhant.io'}];

const users = [];

console.log(users[0]?.name ?? "user array empty");

// without optional chaining 
if (users.length > 0) {
  console.log(users[0].name)
} else {
  console.log('user array empty')
}

*/

/* 

! Looping Object : Object key , value & Entries

for (let day of Object.keys(openingHours)) {
  console.log(day)
}

const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
console.log(openStr);

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values

const values = Object.values(openingHours);
// console.log(values)

for (const val of values) {
  console.log(val)
}

// Entire Object

for (const val of Object.entries(openingHours)) {
  console.log(val)
}

const entries = Object.entries(openingHours);

// [key , value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


*/

/* 

! sets in js

// set is data structure that store unique element

const orderSet = new Set([
  "pizza",
  "soya-chap",
  "meggi",
  "soya-chap",
  "meggi",
  "pizza",
]);
console.log(orderSet);

console.log(new Set("sidhant"));

console.log(orderSet.size);
console.log(orderSet.has("soya-chap"));
console.log(orderSet.has("passta"));
orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");

orderSet.delete("meggi");
// orderSet.clear()
// console.log(orderSet)

for (const order of orderSet) {
  console.log(order);
}

// Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

// const uniqueStaff = new Set(staff)
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(
  new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
);


// new operation on set

const italianFood = new Set([
  'Pasta', 'gnochhi', 'tomatoes', 'olive oil', 'garlic', 'basil'
])

const maxicanFood = new Set([
  'tortillas',
  'beans', 'rice',
  'tomatoes', 'avocado', 'garlic'
])

const commonFood = italianFood.intersection(maxicanFood)
console.log(commonFood)
console.log([...commonFood])

const intalianMaxicanFusion = italianFood.union(maxicanFood)
console.log(intalianMaxicanFusion)
console.log([...new Set([...italianFood, ...maxicanFood])])

const uniqueItalianFood = italianFood.difference(maxicanFood)
console.log('Difference Italian ', uniqueItalianFood);

const uniqueMaxicanFood = maxicanFood.difference(italianFood);
console.log(uniqueMaxicanFood)

const uniqueItalianFoodAndMaxicanFood = maxicanFood.symmetricDifference(italianFood)
console.log(uniqueItalianFoodAndMaxicanFood)

*/

const weekdays = ["sun", "mon", "tue", "wens", "thus", "frid", "sat"];
const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// console.log(openingHours)

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order: function (starterIdx, mainIdx) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdx]];
  },

  orderDelivery: function ({
    starterIdx = 1,
    mainIdx = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Ordered recieved! ${this.starterMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your all delicious pasta with ${ing1} , ${ing2}, ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...othersIngredients) {
    console.log(mainIngredients);
    console.log(othersIngredients);
  },
};

// ! Map Data Structure

const rest = new Map();

rest.set("name", "Sidhant");
rest.set(1, "Firenze Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "we are closed :(");


rest.set(document.querySelector('h1'))
// console.log(rest.get("name"));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has('open'))
// rest.delete(2)
// rest.clear()
// console.log(rest.size)
// console.log(rest);