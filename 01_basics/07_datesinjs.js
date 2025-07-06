//Dates 
 
let myDate = new Date()                                           //date object with current date and time
                                         
console.log(myDate.toString());                                 //ToString method returns a string representation of the date object
console.log(myDate.toDateString());            //ToDateString method returns a string representation of the date object without the time
console.log(myDate.toISOString());      //ToISOString method returns a string representation of the date object in ISO format like
console.log(myDate.toLocaleDateString());  //ToLocaleDateString method returns a string representation of the date object in the local format
console.log(myDate.toLocaleTimeString());//ToLocaleTimeString method returns a string representation of the time in the local format

console.log(typeof myDate);

//...........................syntax for creating date objects....................................................

let myCreateDate = new Date(2025, 6 , 15)                       //Creating a date object with year, month (0-11), and day
console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date(2025, 6 , 15 ,5 ,3);              //creating a date object with year, month (0-11), day, hour, and minute
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("2025-07-15");                    //creating a date object with a string in YYYY-MM-DD format
console.log(myCreateDate3.toLocaleString());

let myCreateDate4 = new Date("07-15-2025")                    //creating a date object with a string in MM-DD-YYYY format
console.log(myCreateDate4.toDateString());

let myCreateDate5 = new Date("July 15, 2025")                 //creating a date object with a string in Month DD, YYYY format
console.log(myCreateDate5.toDateString());


let myTimeStamp = Date.now();                           //Date.now() returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(myTimeStamp);

console.log(myCreateDate.getTime());                //gwe convert date object to timestamp in milliseconds to compare with other timestamps
console.log(Math.floor(Date.now()/1000))              //we can also convert the timestamp to seconds by dividing by 1000 and rounding down using  Math.floor() 




let newDate =new Date();                             //Creating a new date object with the current date and time 
console.log(newDate);      
console.log(newDate.getDate());     //getDate() returns the day of the month (1-31) for the specified date according to local time
console.log(newDate.getMonth() + 1); //getMonth() returns the month (0-11) for the specified date according to local time, so we add 1 to get the correct month
console.log(newDate.getDay());     //getDay() returns the day of the week (0-6) for the specified date according to local time

console.log(newDate.toLocaleString('default',{ //toLocaleString() returns a string with a language-sensitive representation of the date and time
    year: "numeric",           //year in numeric format
    month: "long",            //month in long format (e.g., January, February)
    day: "numeric",          //day in numeric format
    weekday: "long"         //weekday in long format (e.g., Sunday, Monday)
}))








