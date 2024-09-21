/* 
falsy values:
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values:
"0", "false", " ", [], {}, function(){}
*/

const userEmail = "he@maan.ai"

if (userEmail) { // true => by default
    console.log("got the email") // got the email
} else {
    console.log("didn't recieved email")
}

const userName = ""

if (userName) { // false => by default
    console.log("got username")
} else {
    console.log("didn't recieved username") // didn't recieved username
}

const userName2 = []

if (userName2) { // true => by default
    console.log("got username") // got username
} else {
    console.log("didn't recieved username")
}

const emptyArray = []

if (emptyArray.length === 0) {
    console.log("array is empty") // array is empty
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty") // object is empty
}