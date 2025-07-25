// const coding = ["js", "ruby", "java", "python", "cpp"]

//..................... we can use forEach to iterate over an array and perform an action on each item...............................

// const value = coding.forEach((item)=>{
// // console.log(item);
// return item
// })
// console.log(value);



// .........we can use filter to get the values from an array based on a condition without curly braces no need to return..............
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums);

// ...........we can use filter to get the values from an array based on a condition with curly braces we need to return...............
// // const newNums = myNums.filter((num)=>{ 
// //     return num > 4
// // })
// console.log(newNums);



// .........................we can use forEach to get the values from an array based on a condition................................
// but we need to create a new array and push the values into it
// const newNums = []
// myNums.forEach((num) =>{
//     if(num >4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


//we create a new aaray with the name books where we have an array of objects with properties like title, genre, publish year, and edition year.
// we can use filter to get the values from an array based on a condition
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //............................we can print the books with genre History........................................ 
let userBook = books.filter((bk)=> bk.genre === "History")
  
//................we can print the books with genre History and publish year greater than 1995.............
userBook = books.filter((bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBook);
