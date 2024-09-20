let marvel = ["hulk", "thor", "spiderman"]
let dc = ["batman", "flash", "superman"]

marvel.push(dc)

console.log(marvel) // [ 'hulk', 'thor', 'spiderman', [ 'batman', 'flash', 'superman' ] ] => index 3 holds another array
console.log(marvel[3][2]) // superman => access index 2 inside index 3

let marvelHeroes = ["hulk", "thor", "spiderman"]

let allHeroes = marvelHeroes.concat(dc)
console.log(allHeroes) // [ 'hulk', 'thor', 'spiderman', 'batman', 'flash', 'superman' ]
console.log(allHeroes.indexOf('superman')) // 5 => total indices are 5

const allNewHeroes = [...marvelHeroes, ...dc] // spread => better way to concatinate => can merge more than 2 values
console.log(allNewHeroes) // [ 'hulk', 'thor', 'spiderman', 'batman', 'flash', 'superman' ]

const anotherArray = [1, 2, 3, [3, 4], 5, [4, 5, [7, 8]]] 
const realAnotherArray = anotherArray.flat(Infinity) // merges all depth of arrays

console.log(realAnotherArray) // [ 1, 2, 3, 3, 4, 5, 4, 5, 7, 8 ]

console.log(Array.isArray("hemaan")) // false => checks if its array or not

console.log(Array.from("hemaan")) // [ 'h', 'e', 'm', 'a', 'a', 'n' ] => converts in array

console.log(Array.from({name: "hemaan"})) // [] => returns empty array bcz it doesn't know which one to make array (keys or values)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]

/* 
Array.operations:
isArray - checks if it's array or not
of - makes array of variables
from - converts in an array
*/