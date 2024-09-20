// arrays

const myArr = [1, 2, 3, 4, 5]
const myHeroes = ["batman", "shaktiman", "spiderman"]

console.log(myArr[0]) // 1 => logs 0th index element

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2[3]) // 4

// array methods

myArr.push(6) // pushes value at last
console.log(myArr) // [ 1, 2, 3, 4, 5, 6 ] => prints the array

myArr.pop() // no argument passed => pops last value
console.log(myArr) // [ 1, 2, 3, 4, 5 ] 

myArr.unshift(8) // adds value at first => problem: needed to shift all arrays value
console.log(myArr) // [ 8, 1, 2, 3, 4, 5 ]

myArr.shift() // no argument passed => pops first value
console.log(myArr) // [ 1, 2, 3, 4, 5 ]

console.log(myArr.includes(7)) // false => data type: bool

console.log(myArr.indexOf(3)) // 2
console.log(myArr.indexOf(87)) // -1 => when element is not present

const newArr = myArr2.join() // adds array & converts in string
console.log(newArr) // 1,2,3,4,5
console.log(typeof newArr) // string

// slice, splice 

const myNewArr1 = myArr.slice(1, 3) // includes 1, excludes 3 index
console.log(myNewArr1) // [ 2, 3 ]

console.log(`checking original array after slice: `) 
console.log(myArr) // [ 1, 2, 3, 4, 5 ]

const myNewArr2 = myArr.splice(1, 3) // includes both 1 & 3 indices => manupulates original array
console.log(myNewArr2) // [ 2, 3, 4 ]

console.log(`checking original array after splice: `)
console.log(myArr) // [ 1, 5 ]