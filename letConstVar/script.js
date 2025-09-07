console.log("Hare Krisna")


// Hoisted : in JavaScript means that during the compilation phase, variable and function declarations are moved ("hoisted") to the top of their scope (function or global).
/*
console.log(a)
var a = 10;

console.log(b); // ❌ ReferenceError (Temporal Dead Zone)
let b = 20;

console.log(c); // ❌ ReferenceError
const c = 30;

b and c are hoisted but not initialized
They exist in a "Temporal Dead Zone" (TDZ)
let b;  // hoisted but uninitialized
const c; // hoisted but uninitialized

console.log(b); // ❌ ReferenceError (access before initialization)

 */

sayHello(); // works
function sayHello() {
    console.log("Hey Sidhant")
}


/*
Scope in the area in a program where are a variable is accessible(where it can be read and modified)

Scope in JavaScript

Variables declared outside any function or block are global.
Accessible everywhere in the code
global variable created with var become part of the object.

______________________________________________________________________
var global = "Global Object" is declared inside the function.

Since var is function-scoped, the variable global exists only inside Test().

function Test() {
    var global = "Global Object"
    console.log(global)
}

Test()
console.log(global)

Outside the function, there is no variable named global declared in the global scope.

The global defined with var inside Test() is not accessible outside (it “dies” after the function finishes).

ReferenceError: global is not defined
____________________________________________________________________
1. Global Scope

Variables declared outside any function or block are global.

Accessible everywhere in the code.

In browsers, global variables created with var become part of the window object.
___________________________________________________________________
2. Function Scope (Local Scope)

Variables declared inside a function are only accessible within that function.

Applies to var, let, and const.


var global = "Global Object"

function greet() {
    var hi = "Hi Sidhant"
    console.log(hi)
}

greet();
console.log(hi)


3. Block Scope

Created by { } (if, for, while, etc.).

Applies to let and const.

var ❌ does not respect block scope.


if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(a); // ❌ Error
console.log(b); // ❌ Error
console.log(c);   // ✅ 30 (var leaks outside block)


4. Lexical Scope (Static Scope)

Inner functions have access to variables of their outer functions.
This is the basis for closures.

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // ✅ Accessible due to lexical scope
  }
  inner();
}
outer();

*/

Array.prototype.myMapFunc = function(cb) {
    let temp = [];
    console.log(cb);
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

// Obj.getName();

const arr =  [1, 2, 3, 4, 5]

const mul = arr.myMapFunc((num, i, arr) => {
    return num
})

console.log(mul)