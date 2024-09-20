const accountId = 1234;
let accountEmail = "himanshu@gmail.com";
var accountPassword = "abcd"; // var has issue in block scope & functional scope (Not used in modern js)
accountCity = "Pithoragarh"; // can put value of variable without declaring it, not recommended
let accountState; // if value not assigned - logs 'undefined'

// accountId = 234; - Not Allowed

accountEmail = "hemaan@gmail.com";
accountPassword = "123123";
accountCity = "Dheradun";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);




// single line comment

/* 
multi line comment
*/