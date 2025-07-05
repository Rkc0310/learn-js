const score = 400;
console.log(`yout score is ${score}`);

const balance = new Number(1000);                             //given a number but their type is object
console.log(balance);                                         // Number { 1000 }

console.log(balance.toString().length);                       // convert number to string and find the length

console.log(balance.toFixed(2))                               //add 2 decimal places to the number

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(3));                      // format the number to 4 significant digits

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));                // format the number to Indian locale

//+++++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math);                                // Math object contains many useful methods and properties for mathematical operarations.
console.log(Math.abs(-5));                      // absolute value of a number is changed negative to positive only not positive to negative
console.log(Math.round(4.6));                                 // round a number to the nearest integer
console.log(Math.ceil(4.2));                                  // round a number up to the nearest integer 
console.log(Math.floor(4.9));        

console.log(Math.min(4,5,6,2,6,9));                          // find the minimum value from a list of numbers
console.log(Math.max(4,5,7,9,1,3));                          // find the maximum value from a list of numbers

console.log(Math.random());                                 // generate a random number between 0 and 1  
console.log((Math.random()*10) +1 );      // we multiply a 10 to get a number between 0 and 10 and then add 1 to get a number between 1 and 10 for not getting 0

console.log(Math.floor(Math.random()*10)+1);                       //we use Math.floor to round down the number to the nearest integer


const min = 20;
const max = 30;

console.log(Math.floor(Math.random()*(max - min +1)) + min);      //we use this formula to get a random number between min and max 20 to 30





















