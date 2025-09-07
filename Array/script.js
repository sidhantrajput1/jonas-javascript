"use strict";

const arr = [1, 2, 3, 4, 5];

console.log(arr);

/*
arr.at() method : The .at() method in JavaScript is used to access elements at a specific index in an array, 
and it supports negative indexing
console.log(arr.at(3))
console.log(arr.at(-1))

*/

/*
arr.concat() The .concat() method is used to merge two or more arrays into a new array.
 It does not change the original arrays — it returns a new combined array.


const ex1 = [10, 20, 30, 40];
const ex2 = [50, 10, 30, 20];
const ex3 = ["a", "b", "c", "d"];

const newArray = ex1.concat(ex2, ex3)
console.log(newArray)
*/


/*
arr.copyWithin() : The .copyWithin() method copies a part of the array to another 
location within the same array, without changing its length.

-It mutates the original array.

const ex1 = [10, 20, 30, 40, 50];
ex1.copyWithin(1, 2, 4)
ex1.copyWithin(1, 2, 5)
console.log(ex1)

*/

/*
arr.entries() : The .entries() method returns a new array iterator object 
that contains key/value pairs for each index in the array


const iteratorObj = arr.entries();

for(const [index, val] of iteratorObj) {
    console.log(`${index} : ${val}`)
}
*/


/*
! Array Question
Basic Level Questions
What is an array in JavaScript? How do you declare one?
Answer : An array in JavaScript is a global object used to store an ordered collection of values.
Each value in an array is called an element, and each element has a numeric position, known as its index, starting from 0.

Arrays can hold any data type: numbers, strings, objects, even other arrays.
The array literal [] is the most common and preferred way to create arrays in modern JavaScript.

How to check if a variable is an array?
Answer : 
const newArr = new Array(5);
newArr[0] = 8
newArr[1] = 6
newArr[2] = 3
newArr[3] = 7
newArr[4] = 10

console.log(newArr)
 // another way to declear arr
const arr1 = [1, 2, 3, 4, 5, 6]


2) Why we say "array is a variable":
Because you declare it just like a variable
you store value in it
you can update , read, or use it's value like variable



What does arr.length do?
Answer : arr.length returns the total number of elements in the array. 

What is the difference between push() and unshift()?
🔹 unshift():
Adds one or more elements to the beginning of an array.
Returns the new length of the array.
Changes the original array.

const ex1 = [1, 2, 3, 4, 5];
ex1.push(6, 99, 10);
console.log(ex1)

push():
Adds one or more elements to the end of an array.
Returns the new length of the array.
Changes the original array.

ex1.unshift(8, 7, 9, 10);
console.log(ex1)


What is the difference between pop() and shift()?
pop() : 
Removes one element from the end of the array.
Returns the removed element.
Changes the original array.

const arr1 = [9, 7, 6, 5, 4];
const removed = arr1.pop()
console.log(removed)
console.log(arr1)

shift() : 
Removes one element from the start of an array
Returns the removes element
Changes the original array

const arr1 = [9, 7, 6, 5, 4];
console.log(arr1)
const removed = arr1.shift()
console.log(removed)
console.log(arr1)


How do you loop through an array? (using for, forEach, for...of)

const arr1 = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < arr1.length; i++) {
    console.log(i)
}

forEach() is a built-in array method in JavaScript that 
allows you to run a function on each element of an array one by one.

const arr1 = [1, 2, 3, 4, 5, 6];
arr1.forEach(function(num, i, arr) {
    if (num > 1) console.log(arr1[num])
})


How to access the last element of an array?
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.at(-1))



🧩 Intermediate Level Questions

What does Array.prototype.map() do?
Answer : The .map() creates a new array by applying a call back function to each element of the original array
! important 
it's transform the array -> it does not modify the orginal array

const ar = arr1.map((val, idx) => val * 2);
console.log(ar)
console.log(arr1)

What’s the difference between map() and forEach()?
| Feature             | `map()`                                    | `forEach()`                                |
| ------------------- | ------------------------------------------ | ------------------------------------------ |
| Returns a new array | ✅ Yes                                      | ❌ No (returns `undefined`)                 |
| Purpose             | Transform & return new array               | Just perform actions on each item          |
| Original array      | Not modified (unless you manually do it)   | Not modified (unless you manually do it)   |
| Chainable           | ✅ Yes (can chain `.filter()`, `.reduce()`) | ❌ No (returns `undefined`)                 |
| Use case            | When you need a new array                  | When you just want to iterate/do something |



Explain filter() with an example.
The .filter() method creates a new array that contains only the elements that pass a condition 
(i.e., return true from the callback function).

const even = arr1.filter((num) => num % 2 === 0)
console.log(even)

What does reduce() do? Can you calculate the sum of an array using reduce()?
The .reduce() method reduces an array to a single value by applying a callback function on each element and accumulating the result.
Syntax
array.reduce(function(accumulator, currentValue, index, array) {
  return updatedAccumulator;
}, initialValue);

const sum = arr1.reduce((acc, val)  => acc + val, 0)
console.log(sum)


const nums = [1, 2, 1, 2, 2, 2, 4, 5, 2, 3, 6];

const count = nums.reduce((acc, val) => {
  if (val !== undefined) {  
    acc[val] = (acc[val] || 0) + 1;
  }
  return acc;
}, {});  

console.log(count);


How does some() differ from every()?

What’s the difference between slice() and splice()?

What is the use of Array.from()?

How do you flatten a nested array?


*/

// const arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1.at(-1))

// const ar = arr1.map((val, idx) => val * 2);
// console.log(ar)
// console.log(arr1)

// const even = arr1.filter((num) => num % 2 === 0)
// console.log(even)
// console.log(arr1)






/*

🚀 Advanced Level Questions
Explain copyWithin() with an example.

What does arr.entries() return and how is it used?

How do you remove duplicates from an array?


const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];

What is the output of:
[1, 2, 3].map((x) => x + x).filter(x => x > 4)

Implement your own version of map() using for loop.

How to sort an array of objects by a key?

Explain deep vs shallow copy in arrays. How do you deep copy?

How do you make an array immutable (not changeable)?

Explain difference between includes(), indexOf(), and find()

Real-world: You have a list of users, find the first one who is an admin.

*/