// Creating an object named 'user' with properties and a method''''''''''''''''''''''''''''''''''''''''''''''''''
const user = {
    username: "Roshan",                                                                // Property: username
    price: 999,                                                                       // Property: price

    // Method: welcomeMessage, logs a welcome message and the current context (this)
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);                          // Logs "Roshan, welcome to website"
        console.log(this);                                                            // Logs the 'user' object itself
    }
}
// user.welcomeMessage();                                                // Uncomment to call method and log message with original username
// user.username = "Aarti";                                              // Change username property to "Aarti"
// user.welcomeMessage();                                               // Call method again, now it logs "Aarti, welcome to website"
// console.log(this);                                                   // In Node.js, this refers to an empty object in global scope ({})




// Regular function declaration named 'chai'
function chai(){
    let username = "Roshan";                                            // Local variable, not accessible via 'this'
    // console.log(this);                                       // Would log the global object in browsers, or undefined/empty in strict mode
    console.log(this.username);                                 // 'this' refers to global object; undefined in Node
}
chai();                                                          // Call the 'chai' function

// Arrow function assigned to variable 'chain'..............................
const chain = () => {
    let username = "Roshan";                                        // Local variable, not accessible via 'this'
    console.log(this.username);                                 // Arrow functions do not have their own 'this'; inherits from parent (global)
}
chai();                                          





// ++++++++++++++++++++++++++++++++++++++++++Arrow function examples for adding two numbers:++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2;                                                                 // Standard return syntax
// }

// const addTwo = (num1, num2) => num1 + num2;                                             // Implicit return without braces

// const addTwo = (num1, num2) => (num1 + num2);                                           // Same as above, parentheses for clarity

// Arrow function returning an object — parentheses are required around the object literal
const addTwo = (num1, num2) => ({username: "Roshan"});

console.log(addTwo(4, 5));                                                                 // Logs: { username: 'Roshan' }





