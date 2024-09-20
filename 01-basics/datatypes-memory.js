/* 
Primitive: 7 types-
Number, BigInt, String, Boolean, null, undefined, Symbol
*/

//symbol
let id = Symbol('123')
let otherId= Symbol('123')
console.log(id == otherId) // false

//bigint
let bigNumber = 3974326432043278479n
console.log(bigNumber)


/* 
Reference (non primitive)-
Arrays, Objects, Functions
*/

// arrays
let fruits = ["mango", "orange", "grapes"] // returns typeof operator as object

// objects - data type can be anyting like number, bool, str, function, another object
let user = {
    firstName: "hemaan",
    age: 21,
    gender: "male"
}

// functions
const myFunction = function() {
    console.log("hello hemaan")
}




// ************************************************ Memory *******************************************************

// stack (primitive) & heap (non-primitive)


let myName = "himanshu"

let anotherName = myName
anotherName = "hemaan"

console.log(myName) // original value doesn't change
console.log(anotherName) // copy of original value is passed => stack 

let userOne = {
    firstName: "hemaan",
    email: "abc@google.com"
}

let userTwo = userOne

userTwo.email = "hemaan@google.com"

console.log(userOne.email) // original value changed
console.log(userTwo.email) // address/reference is passed => heap