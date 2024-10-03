// generating a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let changingColor // defining a value to stores color

document.querySelector("#start").addEventListener('click', () => {
    if (!changingColor) {
        changingColor = setInterval( () => {
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
    
}) 

document.querySelector("#end").addEventListener('click', () => {
    clearInterval(changingColor)
    changingColor = null // resetting the value
}) 