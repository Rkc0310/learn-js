const user = {
    username: "Roshan",
    loginCount: 8,
    signedIn: true,

   getUserDetails: function(){
    //  console.log("Got user detailed from database");
    console.log(`username: ${this.username}`);
    console.log(this);
    

   }
}
// console.log(user.username);
// console.log(user.getUserDetails());


function User(username, loginCount, Islogedin){
    this.username = username,
    this.loginCount = loginCount,
    this.Islogedin = Islogedin

    this.greeting  = function(){
        console.log(this.username);
    }

    return true
}


//when we use new keyword a empty object created called instanceof  object
// and this keyword point to that object
// and at the end of the function that object is returned from the function
const userOne = new User("Roshan", 10, true)
const userTwo = new User("vikas", 15, false)
console.log(userOne.constructor);                                                              // refrence to iys self function
// console.log(userTwo);
