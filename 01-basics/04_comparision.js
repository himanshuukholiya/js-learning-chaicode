/* 
< > <= >= == !=
*/

console.log("2" > 1) //will return true, typescript is strict, there data types should be same


// We avoid these conversions to improve readability of code

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// equality check == and comparisions < > <= >= work differntly

console.log(undefined > 0) // false => things doesn't compare here 
console.log(undefined == 0) // false
console.log(undefined >= 0) // false 






/// === strick check => not only checks value but also checks data-types

console.log("2" === 2) // false