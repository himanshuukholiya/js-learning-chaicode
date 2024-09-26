const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)
// this use case will give you empty values

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height === 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height."
    } else if (weight === '' || weight === 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight."
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        let category = ''

        if (bmi < 18.6) {
            category = `Under Weight`
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = `Normal Range`
        } else if (bmi > 24.9) {
            category = `Over Weight`
        }

        results.innerHTML = `<span>Your BMI is: ${bmi}</span><br><span>Weight Category: ${category}</span>`
    }
})