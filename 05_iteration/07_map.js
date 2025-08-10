//map is used to iterate over an array and return a new array with the results of calling a provided function on every element in the calling array.
// It does not modify the original array, but instead creates a new one based on the transformation
// we can use map to get the values from an array based on  a condition

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const myNums = myNumbers.map((num)=> num +10)             // we can use map to get the values from an array based on a condition without curly braces no need to return


// we can use map to get the values from an array based on a condition with curly braces we need to return
const myNums = myNumbers.map((num)=>{
// returns a new array with the results of calling a provided function on every element in the calling array
return num * 10}).map ((num)=>{
    return num +1        
}).filter((num)=>{       //using a chain of methods  map after map  and filter the results
    return num >= 40
})
console.log(myNums);
