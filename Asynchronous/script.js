"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
/* 
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 100000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0]?.name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0]?.name
            }</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};


getCountryData("portugal")
getCountryData("usa")
*/

/*


const renderCountry = function (data , className='') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 100000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0]?.name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0]?.name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour  = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    // console.log(neighbour)

    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function() {
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour')
    })
  });
};

getCountryAndNeighbour ("portugal");



*/
const renderCountry = function (data, className = "") {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 100000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[0]?.name
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0]?.name
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const request = fetch("https://restcountries.com/portugal");
// const request = fetch("https://restcountries.com/v2/name/portugal");

// const pr = new Promise((resolve, reject) => {
//   reject("rejected val");
// });

// request
//   .then((val) => val.json())
//   .then((val) => {
//     console.log("sdfsd", val);
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .then((val) => console.log(val))
//   .catch(err => console.log(err))
//   .finally(()=>{
//     console.log("this run always")
//   })

//

// const p1 = new Promise((resolve,reject)=>{
//     try {
//         const data = fetch("https://jsonplaceholder.typicode.com/users/1").then(val=>{
//             return val.json();
//         });
//         resolve(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// })

// const p2 = new Promise((resolve,reject)=>{
//     try {
//         const data = fetch("https://dummyjson.com/products").then(val=>{
//             return val.json();
//         });
//         resolve(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// const final = Promise.all(["5"]);
// console.log(final);
// final.then(val=>console.log(val));

// const newPromise = new Promise((resolve, reject) => {
//   const val = false;
//   if (val) {
//     resolve("Val is true");
//   } else {
//     reject("val is false");
//   }
// });

// console.log(newPromise);

// newPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* 
 The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


 A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

! Syntax 
 const promise = new Promise((resolve, reject) => {})

JavaScript automatically gives you two callback functions as arguments:

    resolve: Call this when the operation is successful.
    reject: Call this when the operation fails.

! Example
const promise = new Promise((resolve, reject) => {
    const val = true;
    if (val) return resolve("Promise Completed");
    else return reject("Promise Rejected")
})

console.log(promise)


*/

// ! fetch(...) gives you a Response object (not JSON).
// You need to call .json() on it, which itself is also a Promise. .json() is also a Promise

const promise = new Promise((resolve, reject) => {
  try {
    fetch("https://restcountries.com/v2/name/portugal")
      .then((res) => res.json()) // convert response to JSON
      .then((data) => resolve(data)) // resolve the outer promise with JSON data
      .then((error) => reject(error)); //  reject if fetch or json fails
  } catch (error) {
    console.log(error);
  }
});

// console.log(promise);

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

/*
! Promise chaining using a real-life example with a food delivery app 🍔📦

orderFood()               // Step 1: Place order
  .then(cookFood)         // Step 2: Kitchen starts cooking
  .then(packFood)         // Step 3: Food is packed
  .then(deliverFood)      // Step 4: Delivery person picks up and delivers
  .catch(handleProblem);  // Any issue in any step, handle it!


! Returns a Promise when you place your order.
function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Order Placed");
    resolve("Order Confirmed");
  });
}

! .then(cookFood) → After the order is placed, cooking starts.
function cookFood() {
  return new Promise((resolve, reject) => {
    console.log("Cooking started");
    resolve("Food cooked");
  });
}

! .then(packFood) → Once cooking is done, it gets packed.
function packFood() {
  return new Promise((resolve, reject) => {
    console.log("Cooking started");
    resolve("Food cooked");
  });
}

! .then(deliverFood) → After packing, delivery starts.

function deliverFood() {
  return new Promise((resolve, reject) => {
    console.log("Delivery started");
    resolve("Food delivered");
  });
}


! .then(deliverFood) → After packing, delivery starts.
function handleProblem(error) {
  console.log("Something went wrong:", error);
}

! Promise Chaing

orderFood()
  .then(cookFood)
  .then(packFood)
  .then(deliverFood)
  .then((finalStatus) => {
    console.log("🎉 Success:", finalStatus);
  })
  .catch(handleProblem)
  .finally(() => {
    console.log("Always runs, success or error.")
  })

*/

/* 

 !  Promise Methods


Promise.all([p1, p2, p3])
Waits for all promises to succeed, or fails if any fails.

Promise.race([p1, p2, p3])
Returns the result of the first promise to settle (fulfilled or rejected).

Promise.allSettled([p1, p2])
Waits for all to settle (no matter success or error).

Promise.any([p1, p2])
Returns the first fulfilled promise, ignores rejections.

*/

/* 
  Promise.all([p1, p2, p3])

The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed),
 with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.


 ❓ What happens if one promise fails in Promise.all([p1, p2])?

If even one promise fails (is rejected), the entire Promise.all() immediately rejects, and:

    No results are returned.
    The .then() is skipped.
    The .catch() (if used) is called with the first error that occurred.

*/

const promise1 = new Promise((resolve, reject) => {
  try {
    fetch("https://restcountries.com/v2/name/portugal")
      .then((res) => res.json()) // convert response to JSON
      .then((data) => resolve(data)) // resolve the outer promise with JSON data
      .then((error) => reject(error)); //  reject if fetch or json fails
  } catch (error) {
    console.log(error);
  }
});

const promise2 = new Promise((resolve, reject) => {
  try {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json()) // convert response to JSON
      .then((data) => resolve(data)) // resolve the outer promise with JSON data
      .then((error) => reject(error)); //  reject if fetch or json fails
  } catch (error) {
    console.log(error);
  }
});

// Promise.all([promise1, promise2]).then((data) => {
//     console.log("All Promises Resolved: ",data)
// }).catch(error => console.log(
//     "Something happend wrong", error
// ))

// An iterable (such as an Array) of promises.

/*
! Promise.allSettled() 
The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
with an array of objects that describe the outcome of each promise.

! Promise.allSettled() is a method that waits for all promises to complete, regardless of whether they succeed or fail.

Promise.resolve(value)
    Instantly returns a resolved promise with the given value.
Promise.reject(error)
    Instantly returns a rejected promise with the given error/reason.

Promise.allSettled([promise1, promise2]).then((result) => {
    console.log(result)
});

const p1 = Promise.resolve("✅ Promise 1 succeeded");
const p2 = Promise.reject("❌ Promise 2 failed");

Promise.allSettled([p1, p2]).then((results) => {
  console.log(results);
});
*/

// const p1 = Promise.resolve("✅ Promise 1 succeeded");
// const p2 = Promise.reject("❌ Promise 2 failed");

// Promise.allSettled([p1, p2]).then((results) => {
//   console.log(results);
// });

// !  Promises are always asynchronous, even Promise.resolve() and Promise.reject().
/*
console.log("1");

Promise.resolve("Resolved!").then((res) => {
  console.log("2: " + res);
});

console.log("3");


1
3
2: Resolved!

! Why is "2: Resolved!" printed last, even though Promise.resolve() runs instantly? Because: Even though Promise.resolve() resolves immediately, the .then() callback runs in the microtask queue, after the current synchronous code finishes.
*/

/*

Promise.any()

The Promise.any() static method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
 It rejects when all of the input's promises reject (including when an empty iterable is passed), 
with an AggregateError containing an array of rejection reasons.

! Promise.any() takes multiple promises and returns a single promise that resolves as soon as any one of the input promises fulfills 
If all promises reject, then it returns an error called an AggregateError


const p1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "❌ p1 failed"));
const p2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "✅ p2 success"));
const p3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "✅ p3 success"));

Promise.any([p1, p2, p3])
  .then(result => console.log("🎉 First success:", result))
  .catch(error => console.error("❌ All failed:", error));


Even though p3 will succeed later, Promise.any() stops and resolves immediately when p2 succeeds.



const p1 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "❌ p1 failed")
);
const p2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "✅ p2 success")
);
const p3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, "✅ p3 success")
);



Promise.any([p1, p2, p3])
  .then((result) => console.log("🎉 First success:", result))
  .catch((error) => console.error("❌ All failed:", error));

*/

// ----------------------------------------------

// const p1 = Promise.reject("p1 failed");
// const p2 = Promise.reject("p2 failed");

// Promise.any([p1, p2])
//   .then(res => console.log(res))
//   .catch(err => {
//     console.error("All promises failed");
//     console.error(err); // AggregateError
//   });

/*

Promise.any() returns the first successful result, ignoring failures.
Use it when you only care about the fastest success.
Returns AggregateError if none succeed

*/

/*

! Promise.race()

he Promise.race() static method takes an iterable of promises as input and returns a single Promise.
This returned promise settles with the eventual state of the first promise that settles.

! important
Promise.race() is like a race — first settled (resolve or reject) wins.
Useful for timeouts, fallbacks, and multiple options.
Be careful: If the first settled one is rejected, the whole thing fails.
*/

const pr1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "two");
});

// Promise.race([pr1, pr2]).then((value) => {
//   console.log(value);
// Both resolve, but promise2 is faster
// });
// Expected output: "two"

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);

      // Country 2
      const neighbour = data[0]?.borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((error) => {
      console.log(`${error} 🎇🎇`);
      console.log(error.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// Eecuation context

const val1 = 12;
const val2 = 7;

function addNum(num1, num2) {
  let result = num1 + num2;
  return result;
}

// console.log(addNum(val1, val2));
// console.log(addNum(5, 5));

/*


The Event Loop is a core concept in JavaScript that allows non-blocking, asynchronous code to run smoothly, even though JavaScript is a single-threaded language.
🔁 In Simple Words:

Imagine JavaScript is a chef in a kitchen 🧑‍🍳. He can only cook one dish at a time (single-threaded). But when he puts something in the oven (like a setTimeout()), he doesn’t just stand there waiting. Instead, he moves on to the next dish and checks back later when the oven is done.

This smart behavior is handled by the Event Loop.
🔧 How It Works:

    Call Stack: Where functions are executed. Only one function runs at a time.

    Web APIs / Browser APIs: These handle async things like setTimeout, fetch, or DOM events.

    Callback Queue (Task Queue): When an async task is done (like a timer or server response), its callback waits here.

    Event Loop:

        Constantly checks: "Is the Call Stack empty?"

        If YES → takes the first task from the Callback Queue and pushes it to the Call Stack to run.

*/

// console.log("Test Start")
// setTimeout(() => console.log("0 sec Timer"), 0)
// async function print() {
//   return "hello"
// }
// print().then(res => console.log(res))
// Promise.resolve("Resolved promise 1").then((response) => console.log(response))
// Promise.resolve("Resolved promise 2").then((response) => console.log(response))
// console.log("Test End")

/*
Test Start
Test End
Promise()
0 sec Timer
*/

/*


When JavaScript runs, some operations are asynchronous, meaning they happen later, not immediately. These delayed tasks are stored in two separate queues:

Type	                    Stored In	                                                Examples	                                  Priority
Microtasks	         Microtask Queue	Promise.then(), async/await,                queueMicrotask()	                            ✅ Higher
Macrotasks	         Macrotask Queue (also called Callback Queue or Task Queue)	   setTimeout(), setInterval(), DOM events	    🔽 Lower

⚙️ How They Work with the Event Loop

After all the synchronous code runs (line by line), JavaScript checks:

    Is there any Microtask? → If yes, it runs all of them.

    Then it runs one Macrotask (like setTimeout callback).

    Then again, it checks Microtasks...

    And so on...

🔁 Real-World Analogy

Imagine you're working on a to-do list:

    🧠 Microtasks are like super-urgent tasks (e.g., "Reply to boss right now").

    🕓 Macrotasks are normal tasks (e.g., "Check emails").

You’ll always complete urgent microtasks first, even if there’s an older normal task waiting.

*/

// async function foo() {
//   return "hello";
// }

// foo().then(console.log);
// console.log(foo())

// Even if you don’t use await inside, the return value is wrapped in a Promise.
// It allows the function to pause using await — but if there’s no await, everything runs synchronously inside it.

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lotter draw is happing");
//   setTimeout(function () {
//     if (Math.round(Math.random()) >= 0) {
//       resolve("You Win");
//     } else {
//       reject(new Error("You lost your Money"));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

// const wait = function (seconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 2000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 Seconds");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I wanted for 1 Second");
//   })

// Promise.resolve("abc").then(x => console.log(x))
// Promise.reject(new Error("Error❌")).catch(x => console.log(x))


const getPosition = function () {
  return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}


const wherAmI = async function (country) {
  // Geolocation
  const pos = await getPosition();
  console.log(pos)
  const { latitude : lat,  longitude : lng } = pos.coords

  // reverse geo
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  const dataGeo = await resGeo.json()
  console.log(dataGeo)

  // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));


  const response = await fetch(`https://restcountries.com/v2/name/${country}`);
  // console.log(await response.json())
  // console.log(  response)
  const data = await response.json();
  console.log(data);
  renderCountry(data[0]);
};

wherAmI("Portugal");
