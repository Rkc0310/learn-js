// ES6

class user{                                            //create a class named user
    constructor(username, email, password){            //create a constructor which takes username, email and password as parameter
        this.username = username;                     //
        this.email = email;
        this.password = password
    }

    encryptPassword(){                                  //create a method in side the class
        return`${this.password}abc`                     //return the password property of the class can be accessed using this keyword
    }

    upperusername(){                 //create a another method in side the class
        return`${this.username.toUpperCase()}`             //return the username property of the class can be accessed using this keyword and convert it to uppercase
    }
}

const chai  = new user("chai", "chai@gmail.com", "123")      //create an object of the user class and pass the parameters to the constructor

console.log(chai.encryptPassword());           //call the encryptPassword method of the object
console.log(chai.upperusername());            //call the upperusername method of the object

//behind the scene we can achive the same thing using function constructor and prototype

// ES5

// function User(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

// User.prototype.encryptPassword = function(){
//     return`${this.password}abc`
// }

// User.prototype.upperUsername = function(){
//     return`${this.username.toUpperCase()}`
// }

// const tea =new User("Tea", "tea@gmail.com", "123")

// console.log(tea);
// console.log(tea.encryptPassword());
// console.log(tea.upperUsername());

