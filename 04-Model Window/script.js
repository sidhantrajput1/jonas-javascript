'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for(let i = 0; i< btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal)
}

const closeModal = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)


document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') 
        if(!modal.classList.contains('hidden')) closeModal();
})

/* 

for(let i = 0; i< btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function() {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click', function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', function() {
    modal.classList.add('hidden')
    overlay.classList.add("hidden")
})


document.addEventListener('keydown', function(e) {
    // console.log("A key has Pressed")
    // console.log(e.key)

    if(e.key === 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
    
    // this code is also work same as above code 
    if(e.key === 'Escape') closeModal();

    // this is  also
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')) closeModal();
    }
})


*/
// btnOpenModal.addEventListener('click', function() {
//     console.log("click")
// })