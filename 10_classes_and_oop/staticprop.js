class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is:${this.username}`);
        
    }

    static CreateId(){             //static method is used for to not access this method by any object or child class
        return(`Uniqe Id is access by its parent class only: 1234`);
    }
}

const Roshan = new User("Roshan")
Roshan.logMe()
console.log(User.CreateId())
// console.log(Roshan.CreateId());                   // it will give error because CreateId is static method


class Techer extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const newTecher = new Techer("Aarti", "AA@gmail.com")

newTecher.logMe()
// console.log(newTecher.CreateId())             //child class can not access static method of parent class