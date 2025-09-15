let myName = "Roshan"

console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {              // creating a object 
    thor: "hammer",                       //key value 
    spiderman: "sling",

//define a methode 

getSpidePower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
    
    }
}

Object.prototype.roshan = function(){      // adding a methode to all objects we can access this methode in all arrays and functions and strings because this all passed from object prototype 
    console.log(`roshan is pesent in all objects`);
}

Array.prototype.heyRoshan = function(){     // adding a methode to all arrays that we can access this methode in all arrays not in objects and strings because this all passed from array prototype
    console.log(`Roshan says hello`);
}

// heroPower.roshan();
myHeros.roshan();
myHeros.heyRoshan();      // we can access this methode in all arrays
// heroPower.heyRoshan();   // we can't access this methode in objects



//inheritance............................................................

const User = {                         // parent object
    name: "Rkc",
    email: "rkc@google.com"
}

const Techer  = {                          // child object  
    makeVideo: true
}

const TechingSupport ={                      // child object
    isAvailable: false
}

const TASupport = {                                              // child object
    makeAssignment: "JS Assignment",
    fullTime: true,

    __proto__: TechingSupport             // inheritance using __proto__ we can access all the properties of TechingSupport in TASupport
}

Techer.__proto__ = User           // inheritance using __proto__ we can access all the properties of User in Techer

//modern syntax
Object.setPrototypeOf(TechingSupport, Techer)  //this is modern syntax of inheritance we can access all the properties of Techer in TechingSupport 



let anotherUsername = "Rkc       "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

String.prototype.splitword = function(){
    console.log(`The spliting word is: ${this.trim().split("")}`); 
}

anotherUsername.truelength()
"Roshan".truelength()
"AArti".truelength()
anotherUsername.splitword();
"vikash".splitword();


const student = {
    name: "jon"
}

const stdDetail = {
    branch: "cse",
    favSubj: "javaScript",

    }

    Object.setPrototypeOf(student, stdDetail);


console.log(student.name);
console.log(student.branch);
console.log(student.favSubj);





