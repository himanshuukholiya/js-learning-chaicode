// for in 

// object => uses 'for in' to iterate instead of 'for of'

const myObject = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(key) // logs key
}

for (const key in myObject) {
    console.log(myObject[key]) // logs value
}

for (const key in myObject) {
    console.log(`${key} shortcut for: ${myObject[key]}`)
}

// arrays => iterated using both 'for in' as well as 'for of'

const myArray = [10, 20, 30, 40, 50]

for (const key in myArray) {
    console.log(key) // logs key or index 
}

for (const key in myArray) {
    console.log(myArray[key]) // logs value => 'for of' logs direct, 'for in' uses []
}


// maps => map is not iterable => 'for in' will not work => (there are ways to iterate maps as well)

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'Frace')

for (const key in map) {
    console.log(key) // noting logs
}