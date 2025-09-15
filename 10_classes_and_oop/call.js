function SetUsername(username){
    this.username = username;
}

function createUser(username,email, password){
  SetUsername.call(this, username)
this.email= email;
this.password = password;
} 

const newUser = new createUser("Rkc", "rkc@fb.com", "Rkc123")
console.log(newUser);




//////....................................................
function student(classname){
  this.classname = classname
}

function newStudent(classname, roolnu , grade){
student.call(this, classname)
  this.roolnu = roolnu;
  this.grade = grade
}

const CreateStudent = new newStudent("12th", "1122", "A+")
console.log(CreateStudent);

//.............................................................................
function car(name){
this.name = name
}

function newCars(name,brand, rate){
  car.call(this, name)
  this.brand  = brand;
  this.rate = rate;
}

const AnotherCar = new newCars("poloS15", "polo", "1000000")
console.log(AnotherCar);
