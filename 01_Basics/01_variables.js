const accountId = "hello"
let accountEmail ="Example@.gmail.com"
var accountPassword ="122"
 accountCity = "BANGALORE"
let accountState;

// accountId = 2; not allowed in const keyword

accountEmail ="hello";
accountPassword="12345654321";
accountCity ="Jaipur";


console.log(accountId);
/*
Preffered not to use VAR 
because of the issue in the block scope 
and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// if condition used.................................
// if(accountEmail==accountPassword)   {
//     console.log(true);
// }
//   else{
//         console.log(false);
        
//     }..................................
