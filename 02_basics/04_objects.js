//const tinderUser = new Object();                           // Create an empty object using the Object constructor


const tinderUser = {};                                      // Create an empty object using object literal notation

tinderUser.id = "078",
tinderUser.name = "rkc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {                            //create a regular user object nested with fullname and userfullname objects
    email: "rkc@google.com",
    fullname: {
        userfullname:{
            firstname: "Roshan",
            lastname: "kumar"
        }
    }
}
//this is example of nested object where regularUser has a fullname object which contains userfullname object

console.log(regularUser)                                                     // Log the regularUser object to the console
console.log(regularUser.fullname);                                          // Access the fullname property of regularUser
console.log(regularUser.fullname.userfullname);                             // Access the userfullname property of fullname
console.log(regularUser.fullname.userfullname.firstname);                   // Access the firstname property of userfullname



// Example of object destructuring merging a nested object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = {obj1, obj2, obj3};     // This would create an object with obj1, obj2, and obj3 as properties, not merge them

const obj4 = Object.assign({},obj1, obj2, obj3)      //using Object.assign to merge obj1, obj2, and obj3 into a new object
// This creates a new object that contains all properties from obj1, obj2, and obj3 here empty object is used as target how store the merged properties.

console.log(obj4);



const obj5 ={...obj1, ...obj2}   // Using the spread operator to merge obj1 and obj2 into a new object
                                 // This creates a new object that contains all properties from obj1 and obj2
console.log(obj5);


const users = [     // An array of user objects, each with an id and email property there are multiple user objects in the array
    {id: 1,
    email: "rk@google.com"},
     {id: 1,
    email: "rk@google.com"},
     {id: 1,
    email: "rk@google.com"},
     {id: 1,
    email: "rk@google.com"},   
 
 {
    id: 1,
    email: "rk@google.com"
 },
 {},
 {}
    ]
 console.log( users[1].email);  // how to access the email property of the second user object in the users array 


 console.log(tinderUser); 

 console.log(Object.keys(tinderUser));                      //uses Object.keys() to get an all keys of the tinderUser object
 console.log(Object.values(tinderUser));                    //uses Object.values() to get all values of the tinderUser object

 console.log(Object.entries(tinderUser));                //uses Object.entries() to get an array of key-value pairs from the tinderUser object

 console.log(tinderUser.hasOwnProperty('isLogged'));         //uses hasOwnProperty() to check if the tinderUser object has a property named 'isLogged'



 const course ={
    coursename: "learn js",
    price: "999",
    courceIntructor: "Roshan"
 }

//console.log(course.courceIntructor);

const {coursename: instructor} = course
console.log(instructor);

// {
//    " name": "hitesh",
//     "coursename": learn js,
//     "price": "free"
// }

// [{},
// {},
// {}
// ]



 

 
 
 
 