// This file contains examples of using the for...in loop in JavaScript to iterate over properties of objects and arrays.
// The for...in loop is used to iterate over the enumerable properties of an object.
// It is important to note that the for...in loop should not be used to iterate over arrays, as it can lead to unexpected results.
// Instead, it is recommended to use for...of or other array methods like forEach, map, filter, etc.


//creating an object with properties key and value
const myObject = { 
    js: "javascript",
    cpp:  'c++',
    rb: 'ruby',
    swift: " swift by apple"
}
 
//syntax of for in loop where key is taking the value of each property in the object
for (const key in myObject) { 
   console.log(`${key} shortcut is for ${myObject[key]}`); // using key to access the value of each property in the object
}


//for in loop with arrays 

const programing = ["js", "rb", "py", "java", "cpp"]

for (const key in programing) {    // key is taking the index of each item in the array from 0 to length-1
    // console.log(programing[key]);           // using key to access the value of each item in the array
    
}


//map is not iterable with for in loop`
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// map.set('In', "India"
// )

// for (const key in map) {
//   console.log(key);
  
// }