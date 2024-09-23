const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        if (e.target.id === "grey") {
            // const body = document.querySelector('body') => we don't need this like xd
            body.style.backgroundColor = '#808080'
        } 
        if (e.target.id === "black") {
            body.style.backgroundColor = '#212121'
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = '#000080'
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = '#fcb001'
        }
    })
})