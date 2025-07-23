//if

// const isUserloggedIn = true 
// if (isUserloggedIn){
//     console.log("Exicuted")
// }

// There are multiple comparition operators 
//  <, >, <= ,>=, == , !=, === 

if (3 != 2){
    console.log("three is not equal to 2 ");  
}

if (2 == "2"){
    console.log("executed");
}

if (2 === "2"){
    console.log("Executed"); 
}else {
    console.log(`2 is not equal to "2"`);
}

const temperature = 41;

if (temperature === 50){
    console.log("temperatue less than 50");
}else{
    console.log("temperature greater than 50"); 
}
console.log("they always exicuted");

//short hand notation 
const balance = 1000;

if(balance > 500)console.log("test "), console.log("test2");

//nested if else
if(balance < 500){
    console.log("less than 500 ");
} 
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 950){
console.log("less than 950");
}
else{
    console.log("less than 1200");
}

const isUserloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail =true

if (isUserloggedIn && debitCard ){
    console.log("Allow to buy cource");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}




    
