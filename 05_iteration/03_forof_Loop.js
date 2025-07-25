//for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// it is a more modern way to iterate over arrays and other iterable objects compared to for...
// it is more readable and concise than for...in loop

["", "", ""]                                            //using array with multiple str
[{}, {}, {}]                                            //using array with multiple objects

const arr =[1, 2, 3, 4, 5]

for (const num of arr) {                                        // num is taking the value of each item in the array
    // console.log(num);                                         // using num to access the value of each item in the array
}

//using for of loop in strings 
const greeting  = "Hello Word"      
for(const greet of greeting){                                   // greet is taking the value of each character in the string
    // console.log(`Each char id ${greet}`);                   // using greet to access the value of each character in the string
}


//Maps is a collection of key-value pairs, where keys can be of any type and values can be of any type.
// we can use for of loop to iterate over the keys and values of a map

const map = new Map()                                          // creating a new map

map.set ("In", "India")                                         // setting key-value pairs in the map 
map.set("USA", "United States of America")

map.set("FR", "France")
map.set("In", "India")

console.log(map);                                            // printing the map 

for (const [key, value] of map) {                          // using for of loop to iterate over the keys and values of the map
    console.log(key, ":-", value);                        // using key and value to access the value of each key-value pair in the map
}

//for of loop in objects   // for of loop is not directly applicable to objects, but we can use Object.entries() to convert the object into an array of key-value pairs and then use for of loop to iterate over it

const myObject = { 
    'game' : "NFS",
    'game2' : "Spiderman"
}

// for (const [key, value] of myObject){
//    console.log(key, ":-", value);
// }
