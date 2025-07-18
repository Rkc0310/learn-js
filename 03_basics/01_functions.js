function addTwoNumbers(number1, number2){                           // Function to add two numbers with two parameters
    console.log(number1 + number2);
}

// addTwoNumbers(3,4);                                               // Calling the function with two arguments

const result1 = addTwoNumbers(5+4)                                  // Calling the function with an expression
console.log(result1)                                                // This will log 'undefined' because the function does not return a value




// using return...............................
function addThreeNumbers(number1, number2, number3){
    // let result = number1 + number2 + number3 
    // return result                                                // This function now returns the sum of three numbers

    return number1 + number2 + number3                              //we can directly return the sum without storing it in a variable
   
   
    // console.log("Roshan")                                        // This line will not execute because it is after the return statement
}

const result2 = addThreeNumbers(4,5,6);                             // Calling the function with three arguments
console.log(result2);                                              // This will log the sum of the three numbers, which is 15



//using if ()..................................................................................
// function loginUsermessage(username){                                    // Function to log a user in with a username parameter              
                               
function loginUsermessage(username = ("Rkc")){                     // Function to log a user in with a username parameter, defaulting to "Rkc"                        
    //     if(username === undefined){                             // Check if username is undefined
//   console.log("Please enter a username");                       // If username is undefined, log a message 
//   return;                                                      //return from the function
//     }
  if(!username){                                            //using a an if statement to check if username is falsy this return same result
console.log("Please enter a username");                     // If username is falsy, log a message
return                                                      //return from the function
  }
  return `${username} just logged in `                    // Return a message indicating the user has logged in
    }

// console.log(loginUsermessage("Roshan"));                    // Calling the function with a username argument
console.log(loginUsermessage());                            // Calling the function without an argument, which will trigger the if condition




//...............................................

function calculateCartPrice(val1, val2, ...num1){
  return num1
}
// console.log(calculateCartPrice(5));
console.log(calculateCartPrice(5,10,99,100));


const user = {
  username: "Roshan",
  price: 199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
  username: "Aarti",
  price: 299
})


//for Array

const myArays = [ 5,7,9,4,8]
function accessMyAarrays(any_aaarys) {
  console.log(any_aaarys[2]);
}

// accessMyArats(myArays);
accessMyAarrays([2,8,453,9,45])



//practice...........................
const myUser={
       name: "Roshan",
       id: 145,
       surname:" Chandravanshi"
      }

      function AccessMyUser( myObj){
        console.log(`Hello my name is ${myObj.name} ${myObj.surname} & my id is ${myObj.id}`)
      }
      AccessMyUser(myUser);