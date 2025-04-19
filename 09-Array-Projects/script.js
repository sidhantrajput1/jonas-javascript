/*     

let users = [
    'sidhant', 'kartik', 'manish', 'uttkars', 'rohit'
]

// console.log(users[0])
// for (const user in users) console.log(users[user])
// for(let i = 0; i < users.length; i++) console.log(users[i])
users.push('Mohit')
// users.pop()
// console.log(users)

// const [first, second, ...next] = users;
// console.log(first, second, next)
// const [, , third] = users;
// console.log(third)

// swapping two variable
// let a = 10;
// let b = 20;

// console.log(a, b); // Output: 10 20

// [a, b] = [b, a];

// console.log(a, b); // Output: 20 10

// ...rest opeator
// const [first, second, ...next] = users;
// console.log(first, second, next)

// Nested array Destructuring
// const nest = [1, [2, 3, 5], 4];
// const [a, [b, c], d] = nest;
// console.log(a, b, c, d)

const points = [[1, 2, 3], [3, 4], [5, 6]]

// for (const [a, b] of points) {
//     console.log(`X: ${a}, Y: ${b}`)
// }


// const arr = [20, 30, 40];
// arr.shift(); // remove first element of array 
// arr.unshift(10) // add element on first index of array 
// console.log(arr)

// const nums = [1, 2, 3, 4, 5];
// let squares = nums.map((idx) => idx * idx) 
// console.log(squares)

// const newArr = nums.concat(points)
// console.log(newArr)

// const nums = [1, 20, 30, 4, 5];
// console.log(nums.slice(1, 5));

// slice create a copy of array without changin of original array

// splice method 
// console.log(nums.splice(1, 3)) // [20, 30, 4]
// console.log(nums); // [1, 5] , array has changed

// splice remove element start Idx to end Idx, it's also chaneg original array

// find and filter method

const nums = [10, 20, 30 ,40, 50, 60];

const res = nums.filter(num => num > 30);
console.log(res)

const ans = nums.find(num => num < 20);
console.log(ans)

// REVERSE
console.log(nums.reverse())

// CONCAT
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['f', 'g', 'h', 'i', 'j'];

const latters = arr1.concat(arr2)
console.log(latters)

// JOIN
console.log(latters.join('-'))


// arr.at() method
const arr = [21, 23, 25, 27];
console.log(arr)
console.log(arr[0])
console.log(arr.at(0))
console.log('-------------------------------------------------')
// getting last element in array
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))
console.log('-------------------------------------------------')

// String 
console.log('jonas'.at(0))  
console.log('jonas'.at(-1))  




// FOREACH Loop
const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`)
//     } else {
//         console.log(`you withdrew ${Math.abs(movement)}`)
//     }
// }

// console.log(`-------------------------FOREACH----------------------`)
// movements.forEach(function(movement) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`)
//     } else {
//         console.log(`you withdrew ${Math.abs(movement)}`)
//     }
// })

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : you withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-------------------------FOREACH----------------------`);
// forEach(function(currentElement, CurrentIdx, wholeArr) {})
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i+1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1} : you withdrew ${Math.abs(movement)}`);
  }
});


const currencies = new Map([
    ['USD' , 'United State Dollor'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
])

currencies.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`)
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)

currenciesUnique.forEach(function(value, key, map) {
    console.log(`${key} : ${value}`)
})


*/

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

const displayMovements = function (movement) {
  containerMovements.innerHTML = "";

  movement.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML("beforeend", html);
  });
};

displayMovements(account1.movements);

const user = "Steven Thomas Williams";
// const username = user.toLocaleLowerCase().split(' ');
// const username = user.toLocaleLowerCase().split(" ").map((name) => name[0]).join("");
// split menthod convert string to array and join method convert array to string

const createUserName = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
    .toLocaleLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  })
  
};


createUserName(accounts)
console.log(accounts)
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog 
owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
 So create a shallow copy of Julia's array, and remove the cat ages from that copied array
 (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀



const juliasData = [3, 5, 2, 12, 7]
const katesData = [4, 1, 15, 8, 3];

const checkDogs = function(juliasData, katesData) {
  const dogsJuliaCorrected = juliasData.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2)

  const dogs = dogsJuliaCorrected.concat(katesData)

  dogs.forEach((dog, i) => {
    if (dog >=  3) console.log(`${i+1} Dogs is an adult`)
    else console.log(`${i+1} Dogs is a child`)
  })

  console.log(dogs)
}

checkDogs(juliasData, katesData)


*/

/* 

! map method 

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const usd = movements.map((mov) => mov * eurToUsd);
console.log(usd);

const movementUSDFor = [];
for (const mov of movements) movementUSDFor.push(mov * eurToUsd);
console.log(movementUSDFor);

const movemnetDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movemnetDescription)

*/
