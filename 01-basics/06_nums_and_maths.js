const score = 400
const balance = new Number(1000)

console.log(score) // 400
console.log(balance) // [Number: 1000]

console.log(balance.toString().length) // 4 => converts in string => checks length of string
console.log(balance.toFixed(4)) // 1000.0000 => adds 4 decimal places ie .0000

const otherNumber = 32.45234

console.log(otherNumber.toPrecision(4)) // 32.45 => returns 4 digits 
console.log(otherNumber.toPrecision(2)) // 32 => ~rounds off (if > .5 then 33, if < .5 then 32)
console.log(otherNumber.toPrecision(1)) // 3e+1 => converts in exponential

const hundreds = 1000000000000

console.log(hundreds.toLocaleString()) // 1,000,000,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00,00,00,000




// *********************************************** Maths ****************************************************************

// maths library is by default with js

console.log(Math); // Object [Math] {}

console.log(Math.abs(-234)) // -234 => absolute => converts -ve in +ve
console.log(Math.round(543.6443)) // 544 => rounds off

console.log(Math.ceil(5.2)) // 6 => highest value
console.log(Math.floor(4.8)) // 4 => lowest value

console.log(Math.min(23, 43, 32, 2, 543)) // 2
console.log(Math.max(34, 453 , 543, 23, 232, 1)) // 543

console.log(Math.random()) // random value b/w 0 & 1

console.log((Math.random()*10) + 1) // random value b/w 1 to 10
console.log(Math.floor(Math.random()*10) + 1) // random lowest value round off

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))