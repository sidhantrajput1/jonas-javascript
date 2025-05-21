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

/* 

window.parent is a property is used to access the parent window of the current window

you use window.parent, when you are using with <iframes src="./child.html" frameborder="1"></iframe> embeded
window within a web page

syntax:
window.parent
<iframe src="./child.html" frameborder="1", width="600px" height="400px"><iframe>

*/


/* 

textContent = "" : is used to set and get the text inside an html elements 
    set the text inside an html elements
    ex: div.textContent ="Hey Sidhant" output : hey sidhant , inside html : <div>hey Sidhant</div>
        div.textContent = "<bold>Hey Kartik</bold>" output : <bold>Hey Kartik</bold>

innerHTML = "" Return or sey the html content (including tags)
    can insert html elements (bold, italic etc)
ex : div.innerHTML = "<bold>Hey Kartik</bold>" output : hey kartik inside html  : <div><bold>Hey Kartik</bold></div>
*/

/*

    Append Multiple Child Elements to a Parent Element 


const myList = document.querySelector('.myList')

function appendChildOnParent(parent, element) {
    const list = document.createElement('li')

    list.textContent = element;

    parent.appendChild(list)
}

appendChildOnParent(myList, "sidhant")
appendChildOnParent(myList, "Rohit")
appendChildOnParent(myList, "Abhishek")
appendChildOnParent(myList, "Manish")





const myList = document.querySelector('.myList');

function appendChildOnParent(parent, elements) {
    const fragment = document.createDocumentFragment();

    elements.forEach(element => {
        const list = document.createElement('li');
        list.textContent = element;
        fragment.appendChild(list);
    });
    
    parent.appendChild(fragment);
}

appendChildOnParent(myList, ["sidhant", "manish", "Rohit", "Amit", "Vaishani"]);


document.title = "Web Page"
document.title = "(2) " + document.title 


*/


/*  
element.insertAdjacentHTML(postion, elements)
similiar to  innerHTML

postion : A String representing the postion realtive to the targetElements
element : The Elements to be inserted into to the tree

'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.


const element = document.querySelector('.para');

element.insertAdjacentHTML('beforebegin', 'Beforebegin kartik')
element.insertAdjacentHTML('afterbegin', "AfterBegin rohit")
element.insertAdjacentHTML('beforeend', 'Beforeend Sidhant')
element.insertAdjacentHTML('afterend', 'Beforebegin gungun')



const element = document.querySelector('.para');

// Create elements properly
const boldEl = document.createElement('b');
boldEl.textContent = 'Sidhant';

const emEl = document.createElement('em');
emEl.textContent = 'Hey Brother';

const span1 = document.createElement('span');
span1.textContent = 'Hello Sidhant';

const span2 = document.createElement('span');
span2.textContent = 'Moun';

// Now use insertAdjacentElement
element.insertAdjacentElement('afterbegin', boldEl);
element.insertAdjacentElement('afterend', emEl);
element.insertAdjacentElement('beforebegin', span1);
element.insertAdjacentElement('beforeend', span2);


*/

/*

const area = document.querySelector('.area')
const box = document.createElement('div')

box.classList.add('box')

// Before the targetElement itself
area.insertAdjacentElement('beforebegin', box)

// After the targetElement itself.
// area.insertAdjacentElement('afterend', box)

// Just inside the targetElement, after its last child.
// area.insertAdjacentElement('beforeend', box)

// Just inside the targetElement, before its first child.
area.insertAdjacentElement("afterbegin", box)

// area.insertAdjacentHTML('beforebegin', '<p>Hello <b>World</b></p>')
// area.insertAdjacentText('beforeend', '<p>Hello <b>Rahul</b></p>')
// area.insertAdjacentElement('afterend', '<p>Hello <b>Sidhant</b></p>')

*/

/*    ***************************************************** */

/*  

Element.matches()
Element.matches() is a DOM method that checks if an element would be selected by a given CSS selector.


const myPara = document.querySelector('.myPara')
// const result = myPara.matches('.myPara')
const result = myPara.matches('[data-name]')
console.log(result)

<p class="myPara" data-name="Sidhant">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam
</p>

*/

/*
Replace child elements with replaceChild() 
"It takes two arguments: the first is the new element, and the second is the element you want to replace."

newChild → The new element you want to insert.

newChild → The new element you want to insert.
oldChild : The existing child element you want to replace.

const myList = document.querySelector('.myList');  
const secondItem = myList.children[1];             
console.log(secondItem.textContent);

const newList = document.createElement('li')
newList.textContent = "Meenu"

myList.replaceChild(newList, secondItem)
*/

/* 

append() : The append() method is used to insert content (text or elements) at the end of a parent element's content.

All content is added as the last child of the element.

const myList = document.querySelector('.myList')

const strong = document.createElement('strong')
const em = document.createElement('em')

strong.textContent = "i'm strong text"
em.textContent = "i'm em tag"

myList.append(strong, em , "hey there")


     <ul class="myList">
      <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
      <li>Atque architecto ducimus aliquam!</li>
      <li>Lorem ipsum dolor sit amet.</li>c
     </ul>



const pTag = document.querySelector('.example p')

const newInput = document.createElement('input')
newInput.value = "I'm Input"

const btn = document.createElement('button')
btn.textContent = "Click Me!!"

pTag.replaceWith(newInput, btn)

*/


let pos;

document.addEventListener('mousemove', function({pageX, pageY}) {
    pos = `${pageX}, ${pageY}`
    console.log(pos)
})

/*

❌
1. Closest()
2. append()
3. insertAdjacentHTML(postion, newNode)
4. Matches
5. replaceWith
❌
*/