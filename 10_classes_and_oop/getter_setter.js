class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email =value;
    }

}
const Roshan = new User("Rkc@123", "abc")
console.log(Roshan.password);
console.log((Roshan.email));


//////////.........................................................

class BankAccount{
constructor(){
    this._balance = 0; // private-like property
}



  get balance(){
    return this._balance
}

  set balance(value){
    if(value < 0){
       console.log("Balance cannot be negative!");
    }
    else{ 
        this._balance = value;
    }
  }

   deposite(amount){
       if(amount > 0 ){
         this._balance += amount;
         console.log(`Depoited: ${amount} Total Balance is: ${this._balance}`);    
   } else{
     console.log(`Deposited Amount must be positive `);
   }
}

  withdraw(amount){
    if(amount  <= this._balance){
        this._balance -= amount;
        console.log(`Withdraw amount is:${amount} Total Balance is:${this._balance}`);
    }else{
        console.log(`Insufficient Fund!`);
    }
  }

}

const Account = new BankAccount();

Account.deposite(200);
Account.deposite(50);
Account.withdraw(20);
Account.withdraw(100);
Account.deposite(-10)
Account.withdraw(300)
console.log(Account.balance);


//...............

class Student{
    constructor(name){
        this._name = name;
        this._marks = [];
    }


    ///for name 
    get name(){
        return (this._name);
    }

    set name(value){
        if(value.trim() === ""){
            console.log("Name cannot be empty!"); 
        }else{
            this._name = value;
        }
    }

    //for mark


    addmark(mark){
        if(mark >= 0 && mark <= 100){
            this._marks.push(mark);
        }else{
             console.log("Invalid mark! Must be between 0 and 100.");
        }
    }
      get avarage(){
      if(this._marks.length === 0){
       return 0;}
    else {return this._marks.reduce((sum, m)=> sum+m ,0) / this._marks.length;}
   }
}

const student = new Student("roshan kumar");

student.name = ""
student.addmark(85)
student.addmark(90);
student.addmark(70);


console.log(student.name);
console.log(student.avarage);

////////////////////////........................................................

class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    get area(){
           return this._width * this._height;
    }

    get perimeter(){
        return 2*(this._width + this._height);
    }

    set height(value){
        if(value <= 0){
            console.log("Invalid dimension!");  
        }else{this._height = value}
    }
    
    set width(value){
        if(value <= 0){
         console.log("Invalid dimension!"); 
        }else{this._width = value}
    }
}

const rect = new Rectangle(10,5);

console.log(rect.area);
console.log(rect.perimeter);

//.........................................................................

class Circle{
    constructor(radius){
        this._radius = radius;
    }

    get diameter(){
        return 2*this._radius;
    }

    get circumference(){
           return 2 * Math.PI * this._radius;
    }

    get area(){
           return Math.PI*(this._radius ** 2);
    }

    set radius(value){
        if (typeof value !== "number" || value <= 0) {
        console.log("Invalid radius!");
    } else {
        this._radius = value;
    }
  }
}

const circle = new Circle(-2);

console.log(circle.diameter);
console.log(circle.circumference);
console.log(circle.area);

