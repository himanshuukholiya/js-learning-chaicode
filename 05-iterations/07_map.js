// maps => might be better than for each (teacher's experience)

// maps and filter are different => filter checks, returns true/false => maps return value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => num + 10)

console.log(newNums) // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


// chaining -

const newNums2 = myNums
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num > 50)

console.log(newNums2) // [ 51, 61, 71, 81, 91, 101 ]