const colorBtn = document.querySelector('#colorBtn')
const colorCode = document.querySelector('#colorCode')


// first step : genrate rgb color code

function getColorCode() {
    const letters = "0123456789abcdef"
    let colors = "#"
    for(let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors
}

getColorCode()

colorBtn.addEventListener('click', function() {
    const randomColor = getColorCode();
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = `Current Color: ${randomColor}`
})