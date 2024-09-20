function sayMyName() {
    console.log("Walter White")
}

sayMyName // reference
sayMyName() // execution => Walter White

function addTwoNumbers(number1, number2) { // number1 & number2 => parameters
    console.log(number1 + number2)
}
addTwoNumbers() // NaN
addTwoNumbers(23, 43) // 66 => 23 & 43 => arguments
addTwoNumbers(3, "4") // 34
addTwoNumbers(4, null) // 4
addTwoNumbers(4, undefined) // NaN

const result = addTwoNumbers(4, 5) 
console.log(result) // 9 undefined => function doesn't return anything

function sum(number1, number2) {
    return number1 + number2
}

const result1 = sum(4, 5)
console.log(result1) // 9

function loginUserMessage(username) {
    return `${username} is in the building!`
}
console.log(loginUserMessage("Heisenberg")) // Heisenberg is in the building!
console.log(loginUserMessage("")) //  is in the building!
console.log(loginUserMessage()) // undefined is in the building!

function loginMessage(username) {
    if (!username) { // !username => username === undefined
        return `enter the username`
    }
    else {
        return `${username} is in the building!`
    }
}

console.log(loginMessage()) // enter the username
console.log(loginMessage("Breaking Bad")) // Breaking Bad is in the building!

function defaultLoginMessage(username = "montana") { // default value
    return `${username} is in the building!`
}

console.log(defaultLoginMessage()) // montana is in the building!
console.log(defaultLoginMessage("Heisenberg")) // Heisenberg is in the building!

/* 
... => used as rest as well as spread
identified according to the use-case
spred => used to merge/concatinate arrays, objects.
rest => used to merge different and convert in array
*/

function calculateCartPrice(...num) { // rest 
    return num
}
console.log(calculateCartPrice(200, 300, 500)) // [ 200, 300, 500 ]

function calculateCartPrice1(val1, val2, ...val) {
    return val
}
console.log(calculateCartPrice1(100, 200, 300, 400, 500, 1000)) // [ 300, 400, 500, 1000 ] => 100 in val1 & 200 in val2


// object functions
const user = {
    username: "hk",
    age: 21
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} & age is ${anyObject.age}`) // we need to check type safety 
}
handleObject(user) // Username is hk & age is 21
handleObject({
    username: "hkhk",
    age: 9
}) // Username is hkhk & age is 9

//array functions 
const newArray = [100, 200, 300, 400]

function secondElement(getArray) {
    return getArray[1]
}
console.log(secondElement(newArray)) // 200
console.log(secondElement([100, 200, 400, 800])) // 200