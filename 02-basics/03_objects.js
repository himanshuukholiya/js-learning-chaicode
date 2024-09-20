// object constructor => (Object.create)

// object literals 

const mySymbol = Symbol("key1") // symbol is data type

const user = {
    firstName: "hemaan", // keys: values => keys are considered as strings by default
    "full name": "he maan",
    [mySymbol]: "mykey1", // using symbol as a key
    age: 18,
    location: "uk",
    email: "hemaan@google.com",
    isLoggedIn: true
}

// to access objects => two ways

console.log(user.age) // 18 
console.log(user["age"]) // 18 => preferred way
console.log(user["full name"]) // he maan 

console.log(user[mySymbol]) // mykey1 => mySymbol is accessed as object
console.log(user) // [Symbol(key1)]: 'mykey1' => to check if mySymbol is logged as 'symbol' or 'string'

user.email = "hemaan@github.com" // to change the value
console.log(user["email"]) // hemaan@github.com

user.greeting = function() {
    return "Hello User"
}
console.log(user.greeting) // [Function (anonymous)]
console.log(user.greeting()) // Hello User

user.greeting2 = function() {
    console.log(`Hello User, ${this.firstName}`) // this is used from same object reference 
}
user.greeting2() // Hello User, hemaan

Object.freeze(user) // no more changes can be made

user.email ="hemaan@vscode.com"
console.log(user["email"]) // hemaan@github.com => no changes after freeze

