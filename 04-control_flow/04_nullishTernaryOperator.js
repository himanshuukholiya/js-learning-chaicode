// nullish coalescing operator (??) => null, undefined

// we use nullish coalescing operator because logging null & undefined is not a good program

let val1
val1 = 5 ?? 10
console.log(val1) // 5

let val2
val2 = null ?? 10
console.log(val2) // 10

let val3 
val3 = undefined ?? 15
console.log(val3) // 15

val3 = null ?? 10 ?? 20
console.log(val3) // 10


// ternary operator ( condition ? true : false ) => short-hand method of if-else

const chai = 25
chai <= 50 ? console.log("ek cup chai please!") : console.log("no chai please!") // ek cup chai please!