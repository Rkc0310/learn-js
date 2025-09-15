class User{                                   //base class or parent class or super class 
    constructor(username){                         //create a constructor which takes username as parameter 
        this.username =  username                        //assign the parameter to the property of the class 
    }

    logMe(){                                          //create a method in side the class
        console.log(`Username is ${this.username}`);      //print the username property of the class can be accessed using this keyword
    }
}
 
class Techer extends User{            //derived class or child class or sub class name of the class is Techer and it extends the User class
    constructor(username, email, password){           //create a constructor which takes username, email and password as parameter
        super(username)                   //call the constructor of the parent class using super keyword and pass username parameter to it
        this.email = email                         //assign the email parameter to the property of the class
        this.password = password                //assign the password parameter to the property of the class
    }

    addCourse(){                       //create a method in side the class
        console.log(`A new cource was added by ${this.username}`);//print the username property of the class can be accessed using this keyword
    }
}

const chai = new Techer("chai", "chai@gmail.com", "1234")     //create an object of the Techer class and pass the parameters to the constructor

console.log(chai);                         //print the object
chai.addCourse();                          //call the addCourse method of the object
// chai.logMe();                          //call the logMe method of the object we access the method of the parent class using the object of the child class because of inheritance

const masalaChai = new User("masalaChai")//create an object of the User class and pass the parameter to the constructor

// masalaChai.addCourse()                  //we cannot access the method of the child class using the object of the parent class
masalaChai.logMe()                  //call the logMe method of the object   //we can access the method of the parent class using the object of the parent class

console.log(chai === masalaChai);        //compare the two objects //false because they are two different objects
console.log(chai === Techer);              //false because chai is an object and Techer is a class and they intance of different types

//instanceof operator is used to check whether an object is an instance of a class or not
console.log(chai instanceof Techer);       //true because chai is an object of the Techer class
console.log(chai instanceof User);     //true because chai is an object of the User class because of inheritance



////////////..............................................................
class cars{
    constructor(brand){
this.brand = brand;
    }

    note(){
        console.log(`This was one of the best card from: ${this.brand}`);  
    }
}
class carsDetail extends cars{
    constructor(brand,price,model){
        super(brand);
        this.price = price;
        this.model = model;
    }

  Offer(){
    console.log(`offeris the price for: ${this.brand} model:${this.model} price is:${this.price}`);
    
  }
}

 const newCars = new carsDetail("BMW", "20000$)", "A17")
 console.log(newCars);
 newCars.note();
 newCars.Offer()



//''''''''''''''''''''''''''''''''''''''''''''

class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        return("Some generic animal sound")
    }
}
 

class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }

    makeSound(){
        return (`My Dog Name is ${this.name} there breed is ${this.breed} they sound Woff`)
    }
}

const myDog =  new Dog("Buddy", "Labrador")

console.log(myDog.name);
console.log(myDog.breed);
console.log(myDog.makeSound());



