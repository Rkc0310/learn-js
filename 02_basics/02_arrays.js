const marvel_heros = ["thor","Ironman","spiderman"]                  // creating an array named marvel_heros

const dc_heros = ["superman", "flash","batman"]                      // creating an  another array named dc_heros

//marvel_heros.push(dc_heros);                                       // pushing dc_heros array into marvel_heros array for cobining them

//console.log(marvel_heros);

// using a concat ..................................      

const allHeros = marvel_heros.concat(dc_heros);                      // using concat method to combine two arrays 
console.log(allHeros);

// using spread operator ..................................
const all_new_heros = [...marvel_heros, ...dc_heros]                 // using spread operator to combine two arrays
console.log(all_new_heros);

//using flat()......................................                 // flattening an array use for nested arrays 
const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]
const real_another_aray = another_array.flat(Infinity);          //here Infinity is used to flatten all levels of nested arrays

console.log(real_another_aray);

console.log(Array.isArray("Roshan"));                            // checking if "Roshan" is an array, it will return false
console.log(Array.from("Roshan"));                               // converting a string to an array, it will return an array of characters
console.log(Array.from({name: "Roshan"}));                       // converting an object to an array, it will return an array of values detaile in next lecture

let score1 = 100;        
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));                // using Array.of() to create an array from individual elements, it will return an array of scores

console.log(Array.of("Roshan", "Kumar", "Chandravanshi"));       // using Array.of() to create an array from individual strings, it will return an array of strings







