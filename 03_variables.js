const accountId = 10284;
let accountEmail = "a@gmail.com";
var accountPassword = "12345";
accountCity = "Bangalore";
let accountState; // This variable is declared but not initialized, so it will be undefined


// accountId = 20284; // This will throw an error because accountId is a constant
accountEmail = "b@gmail.com"; // This is allowed because accountEmail is declared with let
accountPassword = "54321"; // This is allowed because accountPassword is declared with var
accountCity = "Mumbai"; // This is allowed because accountCity is a global variable

console .log(accountId);

/*
Prefer not to use var for variable declaration as it has function scope and can lead to unexpected behavior.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState  ]);

