//singleton 

//object literal 

const mySym = Symbol("key1");

const jsUser = {                                                    // create a JavaScript object with name of jsUser
    name : "Roshan",                                          //create a key-value pair with key as name and value as Roshan
    "full name": "Roshan Chandravanshi",   // create a key-value pair with key as full name and value as Roshan Chandravanshi
    [mySym]: "mykey1",                          // create a key-value pair with key as mySym and value as mykey1
    age : 14,                                  // create a key-value pair with key as age and value as 14
    location: "Raipur",                       // create a key-value pair with key as location and value as Raipur
    email: "rkchandra@google.com",             // create a key-value pair with key as email and value as rkchandra@google.com
    isLoggedIn: false,                           // create a key-value pair with key as isLoggedIn and value as false
    lastLoginDays: ["Monday","Saturday"]        // create a key-value pair with key as lastLoginDays and value as an array containing Monday and Saturday
} 

console.log(jsUser.email);                   // Access the email property using dot notation of jsUser object
console.log(jsUser["email"]);             // Access the email property using bracket notation
console.log(jsUser ["full name"]);        // Access the full name property using bracket notation
console.log(jsUser[mySym]);               // Access the mySym property using bracket notation

//diffrence between dot and bracket notation..............................
// dot notation is used when the key is a valid identifier (no spaces, special characters, etc.)
// bracket notation is used when the key is not a valid identifier (like "full name")   
// or when the key is stored in a variable (like mySym)



jsUser.email = "rkkumar@chatgpt.com";         // Update the email property of jsUser object using equality operator
//Object.freeze(jsUser);                       // Freeze the jsUser object to prevent further modifications after that no changes can be made to the object 
jsUser.email ="rk@microsoft.com";           // Attempt to change the email property again, but it will not work because the object is frozen

console.log(jsUser);

jsUser.greeting =function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user,${this.name}`);   
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());








