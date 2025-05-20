
const green = document.querySelector('.green')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')

//capturing
/*
green.addEventListener('click', (e) => {
    console.log("3. Green Evennt Listener")
}, {capture : true , once : true})

red.addEventListener('click', (e) => {
    console.log("2. Red Evennt Listener")
}, {capture : true, once : true})

blue.addEventListener('click', function() {
    console.log("1. Blue Event Listener")
}, {capture : true , once : true})

*/


// Bubbling
// green.addEventListener('click', (e) => {
//     console.log("3. Green Evennt Listener")
// })

// red.addEventListener('click', (e) => {
//     console.log("2. Red Evennt Listener")
// })

// blue.addEventListener('click', function() {
//     console.log("1. Blue Event Listener")
// })

// Evemt Bubbling

const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const removeCard = document.querySelector('.card')

let count =  1;

addCardBtn.addEventListener('click', function(e) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    newDiv.innerText = count++

    // newDiv.addEventListener('click', function(e) {
    //     e.target.remove('card')
    // })

    container.appendChild(newDiv)
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('card') && !e.target.classList.contains('add-card')) {
        e.target.remove('card')
    }
})


setTimeout("console.log(true)")