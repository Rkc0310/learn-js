// data types generally two categories:

//1. Primitive data types 
//primitive data types are immutable, meaning they cannot be changed once created.

// Primitive data types in JavaScript include:

// - Number: Represents both integer and floating-point numbers.

const score = 100; // Example of a Number data type
const scoreValue = 100.5 //its also a number data type 

// - String: Represents a sequence of characters, enclosed in single or double quotes.

 const names = "Roshan"; // example of a String data type


// - Boolean: Represents a logical entity and can have two values: true or false.
const isLoggedIn = true ;// Example of a Boolean data type


// - Undefined: Represents a variable that has been declared but not assigned a value.

let userEmail; // Example of an Undefined data type


// - Null: Represents the intentional absence of any object value.
const outsidetemp = null; // Example of a Null data type

 

// - Symbol: Represents a unique and immutable value, often used as object property keys.
const id = Symbol("123");
const anotherid = Symbol('123')//

console.log(id === anotherid); //false, because each Symbol is unique

// - BigInt: Represents integers with arbitrary precision, useful for very large numbers.

const bigNumber = 54758275375323758n; //using 'n' at the end to denote a BigInt
 // Example of a BigInt data type



//2. Reference(Non primitive) data types
//reference data types are mutable, meaning they can be changed after creation.

// Reference data types in JavaScript include:

// - Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.

const user = {
    name: "Roshan",
    age: 25,
    isActive: true
}

// - Array: A special type of object that holds an ordered collection of values, which can

const heros =["Batman", "Superman", "Spiderman"]; // Example of an Array data type

//function 
const myFunction = function(){
    console.log("Hello, World!");
}

console.log(typeof score);
console.log(typeof names);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof outsidetemp);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof user);
console.log(typeof heros);
console.log(typeof myFunction);

//++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) //they given us copy not changes in original one 

// Heap(Non-Primitive) they given us a refrence change in original one 

let myName = "Roshan";

let anotherName = myName;
 anotherName = "Aarti";

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "rkchandra@google.com",
    upi: "fduabnf@ybl"
}

let userTwo = userOne;
userTwo.email ='aartigoogle.com';

console.log(userOne.email);
console.log(userTwo.email);




