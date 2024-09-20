let score = "33"
console.log(typeof score); // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number

// js is not strict check, that's why typescript used

let score1 = "33abc"
console.log(typeof score1) // string

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1) // number
console.log(valueInNumber1) // NaN - not a number


let score2 = null
let valueInNumber2 = Number(score2)
console.log(valueInNumber2) // 0


let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(valueInNumber3) // NaN

/* 
"33" => 33
"33abc" => NaN
true => 1; false => 0
null => 0
undefined => NaN
*/


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true


/* 
0 => false; 1 => true
empty string "" => false
some string "Hi" => true
*/

let someNumber = 11
let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber) // string
console.log(stringSomeNumber) // 11



// *********************************************** Operations ************************************************************

let value = 3
let negValue = -value
console.log(negValue) // -3 

let str1 = "hello"
let str2 = " Hemaan"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) // => not a good way to write code (less readable)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true) // 1 => not a good way to write code (less readable)