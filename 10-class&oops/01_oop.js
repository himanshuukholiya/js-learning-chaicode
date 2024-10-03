// object literals

const user = {
    username: "himanshu",
    signIn: true,

    getUserDetails: () => {
        return {
            username: user.username // we can't use this in arrow function => refers surrounding lexical context.
        }
    },
    againUserDetails: function() {
        console.log(this) // prints object
        return {
            username: this.username
        }
    }
}

console.log(user.getUserDetails())
console.log(user.againUserDetails())
console.log(this) // empty object in node => things are different in browser

// constructor function => new => it allows you to create multiple instances from single object

// new => firstly create an empty object => constructor function gets called => which provides all the arguments

/* 
const date = new Date()
const promiseOne = new Promise()
 */

function userOfFunction (username, logInCount, isLoggedIn) {
    this.username  = username // common practice to give same var => this.username is a new variable
    this.logInCount = logInCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new userOfFunction("himanshu", 10, true) // if we don't use new here => value overwrites
const userTwo = new userOfFunction("hk", 55, false)
console.log(userOne)
console.log(userTwo)