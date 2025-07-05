const name = "Roshan";
const repoCount = 1;

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//............string interpolation

const gameName = new String('Roshan')                 //given a string but there type is object 

console.log(gameName[3]);                             // how we acess key value pairs what value present in 3 index

console.log(gameName.__proto__);                      // from this way we use a all prototype functions.

console.log(gameName.length);                         //length of string;

console.log(gameName.toUpperCase());                  //convert to upper case

console.log(gameName.charAt(4));                      //find the character at index 4

console.log(gameName.indexOf('o'));                   //find the index of character 'o'

//but they not change the original string

const newString = gameName.substring(0,4);            //they used to extract the string from index 0 to 4
console.log(newString);

const anotherString = gameName.slice(2,5);            //it is used to extract the string from index 2 to 5
console.log(anotherString);


const newStringone = "     Roshan    ";
console.log(newStringone);
console.log(newStringone.trim());                     //it is used to remove the extra space from the string


const url = "https//roshan.com%25Chandravanshi"

console.log(url.replace('%25','-'));                  //it is used to replace the value from the string

console.log(url.includes('sundar'));                 //it is used to check the value is present in the string or not

const speech = "Hello my name is Roshan. I am a software developer. I love coding.";

console.log(speech.split(' '));                      //it is used to split the string into an array of words with space as a separator