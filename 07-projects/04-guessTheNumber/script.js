let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')

const startOver = document.querySelector('.resultParameters')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')

const p = document.createElement('p')

let previousGuess = []
let numberOfGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Enter a Valid Number')
    } else if (guess < 1 ) {
        alert('Enter a Number more than 1')
    } else if (guess > 100 ) {
        alert('Enter a Number less than 100')
    } else {
        previousGuess.push(guess)
        if (numberOfGuess === 11) {
            dispalyGuess(guess)
            displayMessage(`Game Over \n Random Number was ${randomNumber}`)
            endGame()
        } else {
            dispalyGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it Right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is High`)
    }
}

function dispalyGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += ` ${guess} `
    numberOfGuess++
    remaining.innerHTML = `${11 - numberOfGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}<\h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        numberOfGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numberOfGuess}`
        userInput.removeAttribute('disalbled')
        startOver.removeChild(p)
        playGame = true
    })
}