"use strict";

// const input = document.createElement('input')
// console.log(input)

// const div = document.querySelector('.div');

// div.textContent = "<p>hey buddy</p>"
// console.log(div)

// document.body.appendChild(input)

// Element.setAttribute(AttributeName, value)

// const newAttribute =
//   document.querySelector(".input-class")

// newAttribute.setAttribute('value', 'hey sidhant')

// document.body.appendChild(newAttribute)

// const newElement = document.createElement('div')
// newElement.setAttribute('class', 'container')
// document.body.appendChild(newElement)
// newElement.textContent = "<p>i am inner Text</p>"
// newElement.innerHTML = "<p>i am inner html</p>"

// newElement.innerText = "<p>i am inner Text</p>"
// console.log(newElement.innerHTML)

/* 
// appendChild()

// appendChild() method is add the specified element as the last child of parent element

const ulList = document.querySelector(".ul");

const liList = document.createElement('li')
liList.textContent = "Gungun"

ulList.appendChild(liList)

const fruitList = ["kartik", "sonam", "Aadarsh"]
fruitList.forEach(function(fruit) {
    const li = document.createElement('li')
    li.textContent = fruit;
    ulList.appendChild(li)
})

*/

// A Document Fragment is a temporary container used to hold a group of elements before inserting them into the DOM all at once.
// const fragment = document.createDocumentFragment()
// const fruitList = [
//   "kartik",
//   "sonam",
//   "Aadarsh",
//   "fhof",
//   "jkdfsif",
//   "kjjfeif",
//   "fuiefuhfiiofh",
//   "fbjdffn",
//   "fjofjbdsif",
// ];
// fruitList.forEach((element) => {
//   const li = document.createElement("li");
//   li.textContent = element;
//   fragment.appendChild(li);
// });

// console.log(typeof fragment);

// ulList.appendChild(fragment);
//

/*    *************************************************************    */
// classList

// const para = document.querySelector('.para')

// 1. classList.add('className')
// classList.add() is method that add the new class to the element's  class atrributes

// para.classList.add('bold', 'hover')
// console.log(para)

// 2. classList.remove('className')
// classList.remove('') is method that remove the specific  class to the element's class attributes
// para.classList.remove('bold', 'hover')

// 3. replace("className", "className")

// para.classList.replace('bold', 'fontStyle')

// para.addEventListener('click', function() {
//     para.classList.toggle('dev')
//     console.log("dick")
// })

// console.log(para.classList.contains('dev'))
// console.log(para.matches('p[dev]'))

/*   
    dataset :- dataset property is used to access custom data-* attributes on HTML elements.
    These attributes are often used to store extra information that doesn’t affect the presentation or behavior of the element.


    const div = document.querySelector('#user')
    console.log(div)

    console.log(div.dataset.userId)
    console.log(div.dataset.role)

    div.dataset.role = "superadmin"
    console.log(div)
*/

/*
const myList = document.querySelector('.myList')
const first = document.querySelector('.firstChild')

const fruitList = [
  "kartik",
  "sonam",
  "Aadarsh",
  "fhof",
  "jkdfsif",
  "kjjfeif",
  "fuiefuhfiiofh",
  "fbjdffn",
  "fjofjbdsif",
];


const fragment = document.createDocumentFragment()

fruitList.forEach(function(element) {
    let list = document.createElement('li')
    list.textContent = element
    fragment.appendChild(list, first)
})

console.log(fragment)

myList.insertBefore(fragment, first)


insertBefore() is a method that takes two arguments.
The first argument is the element you want to insert.
The second argument is the child element before which you want to insert the new element.


const myList = document.querySelector('.myList')
const first = document.querySelector('.firstChild')
const newList = document.createElement('li')

newList.textContent = "Gungun"

// myList.insertBefore(newList, first)

function addToBegining(parent, toInsert) {
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert, firstChild)
}

addToBegining(myList, newList)


cloneNode(); is method that clone any node

const myList = document.querySelector('.myList')
const child = myList.children;

const newElement = child[1]
const cloneEle = newElement.cloneNode(true)

myList.appendChild(cloneEle)
console.log(child[1])
*/

/* 

nextSibling : Return the next node in DOM tree. 
        which can be anything : an element node , 
        a text node (like whitespace node) or comment node

nextElementSibling :  Return the next sibling that is element node only


> child combinator : select only chidl element not nested and deeper
li: - looks for a li elements
:first-of-type - select the first li

const firstUlList = document.querySelector('.myList >  li:first-of-type')

const nextSibling1 = firstUlList.nextElementSibling

console.log(nextSibling1)

*/


/*
getBoundingClientRect() : is a method that return position and size of an element reletive to the viewport (the visible area fo the window)


const div = document.querySelector('.box')

const rectBox = div.getBoundingClientRect()
console.log(rectBox)

window.addEventListener('scroll', function() {
    console.log("inner height",window.innerHeight)
    console.log(div.getBoundingClientRect().top)
})
*/


/*
OuterHTML :  is a property of an html that gives you -> the entire html of the selected element including the element itself


const h3Title1 = document.querySelector('.heading1')
const h3Title2 = document.querySelector('.heading2')

console.log(h3Title1.outerHTML)
console.log(h3Title1.innerHTML)

h3Title1.outerHTML = "<div> Announcement : wahid burchataa hai </div>"
// h3Title1.innerHTML = "<div> Announcement : wahid burchataa hai ❌</div>"
// h3Title1.outerHTML = ""

*/

/*

what is querySelector() and querySelectorAll()

*/



// document.querySelector('body').addEventListener('click',function(e){
//     console.log("body ",e.target)
// })

// document.querySelector('.nav--links--item').addEventListener('click',function(e){
//     console.log("nav ",e.target)
// },true)

// document.querySelector('.nav--links').addEventListener('click',function(e){
//     console.log("ul",e.target)
// },true)

// document.querySelectorAll('.nav--link')[1].addEventListener('click',function(e){
//     console.log("li", e.target);
// })


// create sort method

// const myList = document.querySelector(".listItem")


// const language = ["JavaScript", "CSS", "HTML", "React", "Node.js", "Docker", "python", "java", "C++"]
// const lowercase = language.map(lang => lang.toLowerCase())
// // language.sort()
// const fragment = document.createDocumentFragment();

// lowercase.forEach(element => {
//     const list = document.createElement('li')
//     list.textContent = element
//     fragment.appendChild(list)
// })

// myList.appendChild(fragment)


/*


const technologies = [
  { name: "JavaScript", category: "web" },
  { name: "CSS", category: "web" },
  { name: "HTML", category: "web" },
  { name: "React", category: "web" },
  { name: "Node.js", category: "web" },
  { name: "Docker", category: "devops" },
  { name: "Python", category: "general" },
  { name: "Java", category: "general" },
  { name: "C++", category: "general" }
];



const myList = document.querySelector(".listItem");
const webBtn = document.getElementById("webBtn");
const resetBtn = document.getElementById("resetBtn");
const generalBtn = document.querySelector("#generalBtn")


const fragment = document.createDocumentFragment();

technologies.forEach(element => {
    const list = document.createElement('li')
    list.textContent = element.name
    fragment.appendChild(list)
})

myList.appendChild(fragment)



const filter = technologies.filter(item => item.category === "web")
console.log(filter)

function filterList(filterCategory = null) {
    myList.innerHTML = ""
    const filtered = filterCategory ? technologies.filter(item => item.category === filterCategory) : technologies

    const fragment = document.createDocumentFragment()

    filtered.forEach(element => {
        const list = document.createElement('li')
        list.textContent = element.name
        fragment.appendChild(list)
    })

    myList.appendChild(fragment)
}

webBtn.addEventListener('click', () => filterList("web"))
resetBtn.addEventListener('click', () => filterList())
generalBtn.addEventListener('click', () => filterList("general"))

*/

