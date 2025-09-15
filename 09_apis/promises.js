const promiseOne = new Promise(function(resolve, reject){  //create a promise 
    //Do an aync task                                       //they used to be do async task
    //DB calls, cryptography, network                      // database calls, cryptography, network
  
    setTimeout(function(){                                           //simulate async task using settimeout
        console.log("Async task is Complete");
        resolve();                                       //if async task is completed we call resolve they means promise is fullfilled 
    },1000)
})

promiseOne.then(function() {                             //consume the promise using then method they directly connected with resolve

    console.log("Promise C onsumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2 is completed");
        resolve();
    },1000)
}).then(()=>{
    console.log("promise 2 is consumed");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Rkc", email: "rkc@example.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user);
console.log(user.username);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false                               
        if(!error){
            resolve({username: "roshan", passwod: "rk123"})
        }else{
              reject("Error Somthing went wrong ")                 //if error is true we call reject they means promise is not fullfilled
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{  //we can chain multiple then method
console.log(username);
})
.catch(function(error){                           //catch method they directly connected with reject and catch the error
    console.log(error);
})
.finally(function(){     //finally method is call every time after the promise is settled either resolved or rejected
    console.log("The promise is either resolve or rejected");  
})


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true                         
        if(!error){
            resolve({username: "javascript", passwod: "node123"})
        }else{
              reject("Error js went wrong ")            
        }
    },1000)
});

async function consumePromisefive() {
   try {
    const response =await promiseFive
    console.log(response);
   }
   catch(error){
    console.log(error);
   }
}

consumePromisefive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
console.log(error);clear
})

//The fetch() function in JavaScript is a modern way to make HTTP requests to servers, returning promises that simplify handling responses and errors compared to older XMLHttpRequest methods


// Syntax and Parameters
// javascript
// fetch(url, options)
// url (required): String containing the endpoint/resource.

// options (optional): An object specifying method, headers, body, credentials, etc