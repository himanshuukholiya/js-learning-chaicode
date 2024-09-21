/* 
for each: 
other way to iterate 
it is a high order function
() => callback function => parameters => code
*/

const coding = ["js", "ruby", "java", "python", "cpp"]


// using normal function
coding.forEach( function (items) {
    console.log(items)
})

// using arrow function
coding.forEach( (items) => {
    console.log(items)
})

// we can write function seperately as well
function printMe(items) {
    console.log(items)
}
coding.forEach(printMe)

/* 
() => parameters can hold more than just items or values => value, index, array
*/

coding.forEach( (value, index, arr) => {
    console.log(value, index, arr)
})


// array of object

const codingLanguages = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

codingLanguages.forEach( (value) => {
    console.log(value) // logs complete object
})

codingLanguages.forEach( (value) => {
    console.log(value.languageName) // logs keys
})

codingLanguages.forEach( (value) => {
    console.log(value.languageFileName) // logs values
})


// for each doesn't return anything

const values = coding.forEach( (items) => {
    return items
})
console.log(values) // undefined