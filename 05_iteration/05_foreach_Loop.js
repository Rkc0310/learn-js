//we are using forEach to iterate over an array and print each item
// we can also use forEach to perform an action on each item in the array
// forEach does not return a new array, it simply executes the provided function on each element


const coding = ["js", "ruby", "java", "python", "cpp"]


// we can use a function declaration without function name provided a items which is the parameter who takes the value of each item in the array..................................

// coding.forEach(function (items){  
//     console.log(items);  
// })

// we can use an arrow function without curly braces provided a items which is the parameter who takes the value of each item in the array..................................
// coding.forEach((items)=>{
// console.log(items);
// })

//we can create a normal print me function and pass it as a callback to forEach.........................
// function printMe(items){
//     console.log(items);
// }
// coding.forEach(printMe)                               // we can pass the printMe function as a callback to forEach

// we can use forEach to iterate over an array and print each item with its index and the entire array..................
coding.forEach((items, index, arr)=>{
console.log(items, index, arr);
})


// we can use forEach to iterate over an array of objects and print each item with its properties.....................
// const myCoding = [  
// {
//     languageName: "javascript",
//     languageFileName: "js"
// },

// {
//     languageName: "java",
//     languageFileName: "java"
// },

// {
//     languageName: "python",
//     languageFileName: "py"
// },
// ]

// myCoding.forEach((items)=>{ // we can use forEach to iterate over an array of objects and print here a languageName property of each item
// console.log(items.languageName );
// })