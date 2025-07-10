// arrays...................................
const myArr = [1,2,3,4,5]      // array is a collection of items written in square brackets there can be any type of data in array here we have numbers
console.log(myArr);

const myHero = [ "Iron-man","thor","Hulk","true"]                              // array can also contain strings or any other data type
console.log(myHero);

// we can also create an array using the new keyword.........................
const myArray2 = new Array(1,2,3,5,6)
console.log(myArray2);

//we can access a particular element of an array using the index...........................

console.log(myArray2[2]);                                                   // this will print 3 as index starts from 0


// Array methods ................................................................................

myArr.push(6);                                                              // this will add 6 at the end of the array
myArr.push(7);
console.log(`this will add a 6 & 7 in the end of my Arr is ${myArr}`);

myArr.pop();                                                                // this will remove the last element of the array
console.log(`this will use to remove last element in a array here 7 is remove from my aray ${myArr}`);


myArr.unshift(9);                                                           // this will add 9 at the beginning of the array
console.log(myArr);

myArr.shift();                                                               // this will remove the first element 
console.log(myArr);


console.log(myArr.includes(9));                                              // this will check if 9 is present in the array or not

console.log(myArr.indexOf(3));                                              // this will return the index of 3 in the array
 


// we can create a new array............
const newArray = myArr.join();                                             // this will convert the array into a string
console.log(newArray);
console.log(typeof newArray);

//slice method..................................................................................

console.log(`my original Array ${myArr}`);

const myn1 = myArr.slice(1, 3);                                  // this will create a new array from index 1 to index 3 (not including 3) 
console.log(`my array after a using a slice() method ${myn1}`); 
console.log(`now check our orignal array after slice() ${myArr}`);        

// slice() method does not change the original array, it returns a new array    

//splice method............................................................................

const myn2 = myArr.splice(1, 3);                                 // this will remove 3 elements from index 1 and return them as a new array
console.log(`my aaray after using splice(): ${myn2}`);
console.log(`now check our orignal array after splice(): ${myArr}`);         

// splice() method changes the original array, it removes the elements from the original array and returns a new array with the removed elements