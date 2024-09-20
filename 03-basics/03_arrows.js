/* 
this keyword => tells about current context
*/

const user = {
    username: "hk",
    age: 19,
    welcomeMessage: function() {
        console.log(`Welcome to website, ${this.username}`)
        console.log(this)
    }
}
user.welcomeMessage() // Welcome to website, hk { username: 'hk', age: 19, welcomeMessage: [Function: welcomeMessage] }
user.username = "hemaan"
user.welcomeMessage() // Welcome to website, hemaan { username: 'hemaan', age: 19, welcomeMessage: [Function: welcomeMessage] }

console.log(this) // {} => but gives different output in browser

/* 
global object in browser => windows 
global object in node => empty objext {}
*/

function chai() {
    let username = "chaiaurtum"
    console.log(this.username) // undefined => only works in object this way.
    console.log(this) // function gives many values unlike using in global
}
chai()

const ekCupChai = () => {
    let username = "chaiaurtum"
    console.log(this) // {} => unlike normal function, arrow fn gives {} empty object
}
ekCupChai()

// implicit return => code of 1 line

const addTwoNumbers = (num1, num2) => (num1 + num2)

console.log(addTwoNumbers(2, 3)) // 5

const implicitObject = () => ({username: "himanshu"})

console.log(implicitObject()) // { username: 'himanshu' }

