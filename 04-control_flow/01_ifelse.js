// if 

/* 
comparison => < > <= >= == != === !==
*/

if (2 == "2") { // program will run
    console.log("executed =="); // executed ==
}

if (2 === "2") { // strict check => program will not run
    console.log("executed ===");
}

if (2 !== -2) { // program will run => checks -ve
    console.log("executed !== with -2") // executed !== 
}
if (2 !== 2) { // program will not run 
    console.log("executed !== with 2") 
}

let score = 200

if (score > 100 ) {
    const power = "fly" // block scope
    console.log(`Power recieved: ${power}`) // Power recieved: fly
}

let balance = 1000

if (balance > 500) console.log("You can enter"); // implicit scope

// if else

if (balance < 500) {
    console.log("low balance")
} else if (balance == 500) {
    console.log("exactly 500")
} else {
    console.log("more than 500") // more than 500
}

// checking mulitple conditions 

let userLoggedIn = true
let debitCard = true
let loggedinFromGmail = true
let loggedinFromMobile = false

if (loggedinFromGmail || loggedinFromMobile) { // only one true => true
    console.log("User Logged In")
}
if (userLoggedIn && debitCard) { // both true => true 
    console.log("Allowed for shopping")
}