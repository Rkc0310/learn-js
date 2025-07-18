// let a = 10                                             //we declare a variable using let 
// const b = 20                                          //we declare a constant using const
// var c = 30                                           //we declare a variable using var

// console.log(a);                                           // This will log the value of a
// console.log(b);                                           // This will log the value of b
// console.log(c);                                          // This will log the value of c


//......................  

if(true){                                                  // This block will execute because the condition is true
    let a = 10
    const b = 20 
     var c = 30
}
// console.log(a);                              // This will log 'undefined' because a is not defined in this scope a is block-scoped
// console.log(b);                             // This will throw a ReferenceError because b is not defined in this scope b is block-scoped
console.log(c);                               // This will log the value of c, which is 30 because var is function-scoped or globally scoped

//............................

let a  = 300                                                                  // deaclar a variable using let in global scope

if(true){
    let a = 10                                                             // This 'a' is block-scoped and shadows the outer 'a'
    const b = 20                                                          // This 'b' is block-scoped
    console.log("INNER: ", a);                                            // This will log the inner 'a', which is 10 in block scope
}
console.log(a);                                                       // This will log the outer 'a', which is 300 in global scope
// console.log(b);


//.......................................

function one() {                                                              // Function one is defined outside of any block
    const username = "Roshan"                                                // This 'username' is block-scoped within function one

    function two() {                                                        // Function two is defined inside function one is block-scoped for function one
        const website ="alkeyme"                                           // This 'website' is block-scoped within function two
        console.log(username);   // This will log the 'username' from function one, which is "Roshan" means function two has accessto the variable of function one
    }
    // console.log(website);       // This will throw a ReferenceError because 'website' is not defined in global scope or function one there scope is only in function two 

     two()                                                               // Calling function two inside function one, which will log "Roshan" 
}

one()                                                                   // Calling function one, which in turn calls function two and logs "Roshan"



if(true){                                       // we write a block scope using if statement
    const username = "Roshan"                   // This 'username' is block-scoped within this if block

    if(username === "Roshan"){                  // This condition checks if 'username' is equal to "Roshan" and this will present in the block scope
        const website = "youtube"               // This 'website' is block-scoped within this if block
        console.log(username + website);     // This will log "Roshanyoutube" because both 'username' and 'website' are accessible here taken from the block scope
        
    }
    // console.log(website);   // This will throw a ReferenceError because 'website' is not defined in this scope, it is only accessible within the inner if block
}
// console.log(username);     // This will throw a ReferenceError because 'username' is not defined in this scope, it is only accessible within the outer if block


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 console.log(addOne(5));           //this will log 6 because addOne is a function that adds 1 to the input number

 function addOne(num) {            // This function takes a number as input and returns the number plus 1
    return num +1                   // This will return the input number plus 1 
 }

//  console.log(addTwo(5))           // This will throw a ReferenceError because addTwo is not defined yet
 const addTwo = function (num) {        // This is a function expression that takes a number as input and returns the number plus 2
    return num + 2                      // This will return the input number plus 2 when called
 }

// the difference is function declarations (like addOne) are hoisted, so you can call them before their definition. Function expressions (like addTwo) are not hoisted, so you cannot call them before their definition.