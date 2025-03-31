'use strict'

// var x = 7;

// function getName() {
//     console.log("Namaste Js")
// }

// getName()
// console.log(x)
// console.log(getName);

// console.log(x)
// var x = 7;
// console.log(x)

// console.log(x)
// let x = 10;
// console.log(x)

// console.log(x)
// const x = 10;
// console.log(x)

// sayHello();
// function sayHello() {
//     console.log("hello world")
// }

// sayHello()
// var sayHello = function () {
//     console.log("hello")
// }


// var x = 1;
// a();
// b();
// console.log(x)

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b () {
//     var x = 100;
//     console.log(x)
// }


//  Shortest js program

// var x = 10;

// function a() {
//     var c = 20
//     function d() {
//         console.log("hello")
//     }
    // var c and d is not a global space bacuse it is inside a function so it not part of global space
// }

// x and function is global spcae bacuse outside function , you can access x and a() using window and this 
// window and this is global spcae
// global space is created when Execution context created
// Execution context has to part 1. Memory Allocation (creating)  and 2. Code execution


// console.log(x)
// console.log(window.x)
// console.log(this.x)
// console.log(window.a)


// Undefined and not defined
// console.log(a)

// if(a === undefined)  console.log("it is undefined")
// else console.log("it is defined")

// var a;
// console.log(a)
// if(a === undefined)  console.log("it is undefined")
// else console.log("it is defined")

// a = 10;
// if(a === undefined)  console.log("it is undefined")
// else console.log("it is defined")


// var a;
// console.log(typeof a)
// console.log(a)
// a = 10;
// console.log(typeof a)
// console.log(a)
// a = "Sidhant"
// console.log(typeof a)
// console.log(a)

// ! Lexical enviorment is created when ever execution context is created
// ! function Scope

// (Lexical Env + refrence of  parent Laxical env)

// function a() {r
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }

// a();


// x = 5;
// alert(x);
// console.log(x)
// var x;

// var x = 5;
// var y;
// console.log(y);
// y = 7;


// let x = 5;
// function myfunc() {
//   x = 3;
//   console.log(x);
// }
// console.log(x)
// myfunc();

// let x = 5;
// function myfunc() {
//   const x = 3;
//   console.log(x)
// }
// console.log(x);
// myfunc();


// ! let and const declaration are Hoisted.
// it is hoisted on separate memory space , it is not hoisted on global object, so we can't acccess let and const before initialization.

// let a = 10
// console.log(a)
// var b = 20;
// var b = 20
// let y = 101;
// {
//     // compound statement
//     const x = 20;
//     let y = 10;
//     var z = 3;
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// const x = 13;
// console.log(x)
// console.log(y)

/*

// ! The Scope Chain

const myName = 'Jonas';

function first() {
    const age = 30;
    
    if(age >= 30) {
        const decade = 3;
        var millenial = true;
    }

    function second() {
        const job = 'teacher';
        console.log(`${myName} is a ${age}-old ${job}`);
    }
    second();
}

first();

*/



const a = 'Sidhant'
first();

function first() {
    const b = 'hello'
    second();

    function second() {
        const c = "Hiii"
        third()
    }
}

function third() {
    const d = 'Hey';
    console.log(a + b + c + d);
}