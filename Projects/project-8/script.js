// console.log("roshan");

//  const quotes = [
//       "The only limit to our realization of tomorrow is our doubts of today.",

//       "Success is not final, failure is not fatal: It is the courage to continue that counts.",

//       "Don’t watch the clock; do what it does. Keep going.",

//       "Keep your face always toward the sunshine—and shadows will fall behind you.",

//       "The future belongs to those who believe in the beauty of their dreams."
//     ];

//     let index = 0 
//    const quotesElement = document.getElementById('quote')
//    const  pauseBtn =  document.getElementById('pauseBtn')
//    const resumeBtn =    document.getElementById('resumeBtn')

//    function showQuotes(){
//     quotesElement.innerHTML = quotes[index]
//     index = (index + 1) % quotes.length;
//    }
    
//     let intervalId = null;
   
//    function startInterval(){
//         if(!intervalId){
//             intervalId = setInterval(showQuotes,3000);
//         }
//    };

//    function stoptInterval(){
//     if(intervalId){
//         intervalId = clearInterval(intervalId);
//         intervalId = null; 
//     }
//    }
//    pauseBtn.addEventListener('click', stoptInterval);
//    resumeBtn.addEventListener('click', startInterval);
    
//    showQuotes();
//    startInterval();


// ///  cycles through every character of a text, changing each character’s color one by one using setInterval

//  const textElement =  document.getElementById('text');
//  const text = textElement.textContent;
//  let index = 0;

//  function highlightCharacter(){
//     const char = text.split("");
// for(let i = 0; i<char.length; i++){
//     char[i] = char[i];
// }

// char[index] = `<span class = "colored"> ${char[index]}</span>`

//  textElement.innerHTML = char.join("");

//  index = (index + 1) % char.length;
//  }

//  setInterval(highlightCharacter,300);



// //timer using a setinterval and stop and start button
// let seconds = 0
// const timer = document.getElementById('time');
// const start= document.getElementById('startBtn');
// const stop= document.getElementById('stopBtn')



// let intervalId  = null

// start.addEventListener('click',function(){
//     if(!intervalId){
//        intervalId = setInterval(()=>{
//     seconds++
//     timer.textContent = seconds;
// },1000);
//     }
// })

// stop.addEventListener('click',function(){
//     if(intervalId){
//         intervalId = clearInterval(intervalId)
//         intervalId = null;
//     }
// })


///Question 3  Create a countdown timer using setInterval.

// console.log("rk");

// let number = prompt("pls enter a any number");

// const count = document.getElementById('countDown')

// count.textContent = number;

// let countDown = setInterval(()=>{
//     number--

//     if(number >= 0){
//         count.textContent = number;
//     }else{
//         clearInterval(countDown)
//         count.textContent = "Time's up!";
//     }
// },1000);


// //Question4 Create a progress bar animation using setInterval.

// const container = document.getElementById('container');
// const progressBar = document.getElementById('progressBar');
// const statusText = document.getElementById('status');
// let progress = 0 

// const setIntervalId = setInterval(()=>{
//    progress += 5;
 

//     if(progress <= 100){
//         progressBar.style.width = progress + "%";
//     }else{
//        clearInterval(setIntervalId)
//        statusText.textContent = "Loding Complete"
//     }
// },500)
// console.log(progress);



//Ques5 Create a blinking text animation using setInterval.

const blinkText = document.getElementById("blink-text");
let isvisible = true;

const setIntervalId = setInterval(()=>{
    if(isvisible){
        blinkText.style.visibility = "hidden";
    }else{
        blinkText.style.visibility = "visible"
    }
    isvisible = !isvisible;
},500);

setTimeout(()=>{
    clearInterval(setIntervalId)
    blinkText.style.visibility = "visible"
},10000)

