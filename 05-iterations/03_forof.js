// for of 

const myArray = [1, 2, 3, 4, 5]

for (const arr of myArray) {
    console.log(arr)
}

const greeting = "himanshu, welcome!"

for (const greet of greeting) {
    console.log(greet)
}

/* 
for (let i = 0; i < greeting.length; i++) {
    console.log(greeting[i])
}
*/

// maps => store any data type, had unique values

const map = new Map()

// ('key', 'value')
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'Frace')

console.log(map)

// for of in map

for (const [key, value] of map) { // [] => syntax => used to differenciate b/w keys & values
    console.log(`${key} --> ${value}`)
}

// Objects can't be iterated like maps using for of (there are ways to iterate objects as well)