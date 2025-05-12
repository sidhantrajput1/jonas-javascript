// console.log("Ehllo")

// const res = Promise.resolve(57);
// console.log(res)


// // const user = {name : "Bolb"}
// // console.log(user?.ad)
// var arr = [1, 2, 3, 4 ,5 ];
// for (var i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log(arr[i]);
//     }, 1000)
// }

// switch (0) {
//     case 0:
//         console.log("hello 1")
//         break;
//     case -0 : 
//         console.log("Hello 2")
//         break;
//     default:
//         console.log("hello 3")
//         break;
// }


// function mul(a, b = 2) {
//     return a * b
// }

// console.log(mul(3, undefined))
// console.log(mul(3, null))


// function foo() {
//     let count = 0;
//     return function () {
//         console.log(count++);
//     }
// }

// const bar1 = foo() 
// const bar2 = foo() 

// bar1()
// bar1()
// bar2()
// bar2()

// document.querySelector('.button').addEventListener('click', () => {
//     console.log("hello")
// })
// document.querySelector('.div').addEventListener('click', () => {
//     console.log("bye")
// })

//  const hamburger = document.querySelector('.hamburger');
//     const navLinks = document.querySelector('.nav-links');

//     hamburger.addEventListener('click', () => {
//       navLinks.classList.toggle('open');
//       hamburger.classList.toggle('toggle');
//     });

// console.log(window)

// this will work , when you refresh the web page

window.onload = () => {
  // console.log("Hello world")
  const heading = document.createElement("h1")
  console.log(heading)
  const headingText = document.createTextNode("hey there, i am frontend developer")
  console.log(headingText)
  heading.appendChild(headingText)
  document.body.appendChild(heading)
}