const accountId =32747;
var accountEmail="rkchandrak779@gmail.com";
let accountPassword="rk_password";
accountCity="Delhi";
let accountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity , accountState])

//now lets modify the variable
//accountId=3255823;..............we cannot change the value of a constant variable

accountEmail="rkgoogle.com";
accountPassword="rk_roshan"
accountCity="Bangalore"


//console.log(accountId);

console.table([accountEmail, accountPassword, accountCity])

//prefer not to use var 
//because issue in block scope and function scope
