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

for(const movement of movements) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`you withdrew ${Math.abs(movement)}`)
    }
}

console.log(`-------------------------FOREACH----------------------`)

movements.forEach(function(movement) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`)
    } else {
        console.log(`you withdrew ${Math.abs(movement)}`)
    }
})

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : you withdrew ${Math.abs(movement)}`);
  }
}

console.log(`-------------------------FOREACH----------------------`);

forEach(function(currentElement, CurrentIdx, wholeArr) {})

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
  type: "premimum",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premimum",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
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
let inputTransferTo = document.querySelector(".form__input--to");
let inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movement, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML("beforeend", html);
  });
};

displayMovements(account1.movements);

const user = "Steven Thomas Williams";
// const username = user.toLocaleLowerCase().split(' ');
// const username = user.toLocaleLowerCase().split(" ").map((name) => name[0]).join("");
// split menthod convert string to array and join method convert array to string

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  // Total Income
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumIn.textContent = `${income}€`;

  // Total Outgoing
  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  // console.log(outcome);

  // Interest (only if interest >= 1)
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((sum, int) => sum + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.movements);

const createUserName = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUserName(accounts);

function updateUI(acc) {
  // Display Movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input field after login
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);

    // console.log("Login Successfully");
  }
  // console.log(currentAccount);
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  // console.log(amount, reciverAcc)
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    reciverAcc &&
    currentAccount.balance >= amount &&
    reciverAcc.username !== currentAccount.username
  ) {
    // console.log("Transfer valid")
    currentAccount.movements.push(-amount);
    reciverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Request for Loan");

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    // Add Movements
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("Closed");
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log(index);

    // Delete the account
    accounts.splice(index, 1);

    // Hide Ui
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = "";
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// console.log(accounts)

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

// movements.filter((mov) => mov > 0)
const deposit = movements.filter((mov) => mov > 0)
console.log(deposit)

const depositFor = []
for (const mov of movements) if (mov > 0) depositFor.push(mov)
console.log(depositFor)

! reduce method

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];
console.log(movements)

// accumlator

const balance = movements.reduce((acc, curr, idx, arr) => acc + curr, 0)
const balance = movements.reduce(function (acc, curr, idx, arr) {
    return acc + curr
  }, 0)
  
const balance = movements.reduce((acc, curr) => acc + curr, 0)
console.log(balance)

// Maximum value 
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
})

console.log(max)

*/

/* 
Let's go back to Julia and Kate's study about dogs. This time, 
they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = function (ages) {
  let humanAge = ages.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
  const adult = humanAge.filter((num) => num >= 18)
  const averageAge = adult.reduce((acc, num) => acc + num, 0) / adult.length
  console.log(averageAge)
  // console.log(adult)
  // console.log(humanAge)
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
GOOD LUCK 😀
*/

/*   

! The Magic of chaning method

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];
console.log(movements);

const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositsUSD);

*/

////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]


const calcAverageHumanAge = ages => {
  const averageAge = ages.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  ).filter((num) => num >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(averageAge)
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


GOOD LUCK 😀

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];
console.log(movements);

const lastwithdrawal = movements.findLast(mov => mov < 0)
console.log(lastwithdrawal)

'Your latest Largest Movement was X movement ago'

const latestLargestMovement =  movements.findLastIndex(mov => Math.abs(mov) > 1000)
console.log(latestLargestMovement)
console.log(`Your latest Largest Movement was ${movements.length - latestLargestMovement} movement ago`)

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130));

// CONDITIONS
console.log(movements.some((mov) => mov === -130));

const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit);


const arr = [[1, 2, 3], [5, 6], 7, 8]
console.log(arr[0])
console.log(arr.flat())
// console.log(arr.flatMap(function() {

// }))

const arrDeep = [[1, 2, [3, 4, 5, [6, 7]]], [8, 9], 10]
console.log(arrDeep.flat(3))

console.log(movements.find((ele)=>ele >= 200))
console.log(movements.findIndex(ele=>ele ===200))
console.log(movements.findLastIndex(ele=>ele === 20))
console.log(movements.some(mov => mov > 0))
console.log(movements.every((ele)=>ele<-1000))
console.log(movements.)

const accountMovements = accounts.map(acc => acc.movements) 
console.log(accountMovements)
const allMovements = accountMovements.flat()
console.log(allMovements)
const overallbalance = allMovements.reduce((acc, mov) => 
   acc + mov, 0)
console.log(overallbalance)

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance)

// flatMap
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
console.log(overallBalance2)

*/

const movements = [200, 450, -300, 3000, -650, -130, 70, 1300];

// // Acending Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// })
// console.log(movements)
// // movements.sort((a, b) => a - b);
// movements.sort((a, b) => b - a);
// console.log(movements)

/*

console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawls"
);
console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, account => {
  const movementAccount = account.movements.length;

  if (movementAccount >= 8) return "very active"
  if (movementAccount >= 4) return "active"
  if (movementAccount <= 1) return "moderate"

  return "inactive"
})

console.log(groupByActivity)

const groupedAccount1 = Object.groupBy(accounts, account => account.type)
console.log(groupedAccount1)
const groupedAccount2 = Object.groupBy(accounts, ({type}) => type)
console.log(groupedAccount2)


console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

console.log(new Array(9).fill(8, 1, 7));
const x = new Array(7);
// console.log(x)

x.fill(2);
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 5);
console.log(arr);

// create a array programatically

const y = Array.from({ length: 8 }, () => 1);
console.log(y);

const z = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z);

const movementUI = Array.from(document.querySelector('.movements__value'))
console.log(movementUI)

labelBalance.addEventListener("click", () => {
  const movementUI = Array.from(document.querySelectorAll(".movements__value"));
  console.log(movementUI.map((el) => el.textContent.replace("€", "")));
});

labelBalance.addEventListener("click", () => {
  const movementUI = Array.from(document.querySelectorAll(".movements__value"), (el) => el.textContent.replace("€", ""));
  console.log(movementUI);
});

-------------------------------------------------------------
Non-Destructive Alternatives : toReversed, toSorted, toSpliceted
console.log(movements) 

const reverseMov = movements.slice().reverse()
const reverseMov = movements.toReversed();
console.log(reverseMov)
console.log(movements)

// toSort(), toSpliced()
const newMovements = movements.with(1, 4200)
console.log(newMovements)
console.log(movements)

const arr = [1, 2, 3, 4];
console.log(arr)
arr[0] = 5;
console.log(arr)

*/
// 1.
const bankDepositSum1 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr);

const bankDepostSum = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => acc + curr);

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((val) => val > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

// 2.

const numDeposit10001 = accounts
  .flatMap((acc) => acc.movements)
  .filter((val) => val >= 1000)
  .reduce((acc, curr) => acc + curr, 0);

const numDeposit1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? acc + curr : acc), 0);

console.log(numDeposit1000);

const sums = accounts
  .flatMap(({ movements }) => movements)
  .reduce(
    (sum, curr) => {
      // curr > 0 ? (sum.deposits += curr) : (sum.withdrawals += curr);
      sum[curr > 0 ? "deposits" : "withdrawals"] += curr
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

// my name is sidhant rajput -> My Name Is Sidhant Singh
const convertUpperCase = function (title) {
  const exceptions = ['a', 'an', 'is', 'the', 'but', 'or', 'on', 'in', 'with']
  return title.split(" ").map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(" ")
}

const res = convertUpperCase("my name is sidhant rajput")
console.log(res)


