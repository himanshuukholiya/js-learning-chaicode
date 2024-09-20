/* 
iife => immediately invoked function expressions
function that gets immediately executed 
used when we don't want to pollute the global scope
*/

// ()() => first (), for function. second () for execution

(function chai() { // named iife
    console.log(`chai aur tum`)
})(); // iife doesn't know where to end, so use ; to terminate 

( (konSiChai) => { // simple iife/ unnamed iife
    console.log(`tum main aur chai ${konSiChai}`)
})('elaichi wali');