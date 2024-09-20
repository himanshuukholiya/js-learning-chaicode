/* 
{} => known as scope, in functions, loops, conditionals other than objects
var => doesn't care about scope that's why we avoid to use var for declaring variables
scope => block scope & global scope
*/

var a = 3000;
if (true) {
    var a = 10;
    console.log(`block scope ${a}`) // block scope 10
}
console.log(`global scope ${a}`) // global scope 10 => var doesn't have scope

let b = 1000
if (true) {
    let b = 20
    console.log(`block scope ${b}`) // block scope 20
}
console.log(`global scope ${b}`) // global scope 1000


function one() {
    const username = "hemaan"

    function two() {
        const website = "github"
        console.log(username)
    }
    two()
}
one() // hemaan 

if (true) {
    const username = "himanshu"
    if (true) {
        const website = " github"
        console.log(username + website) // himanshu github
    }
}

// ***********************************************************************************************************************************

// we can contain functions inside variables as well

function addTwo(num) { // declaration => can assessed before decarling as well
    return num + 2
}
console.log(addTwo(5)) // 7

//addOne(5) => can't be asscessed
let addOne = function(num) { // declaration and holding in variable => can't assess before declaring
    return num + 1
}
console.log(addOne(5)) // 6