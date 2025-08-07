let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const  lowOrHi  = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p  = document.createElement('p');

let preGuess = []                                              //user submit a value is print here to not guess same value
let numGuess = 1;                                              //how many guess user attemp start from 1 

let playGame = true;                                          //allow user to play game or not to check condition 

//first we check we are able to play game or not 
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()                                    //prevent default is used to stop the form from submitting and refreshing the page
       
        const guess = parseInt(userInput.value);               // user input a value and convert it to integer
  
        console.log(guess);
        
       validateGuess(guess);                                 //passing guess value to validate function
    });

}

function validateGuess(guess){                                //useing this fn to validate a guess nu by user its valid or not
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess < 1){
        alert('Please enter a number more than 1');
    }else if(guess > 100){
        alert('Please enter a number less than 100');
    }else{
        preGuess.push(guess)                                  //puse to array 
        if(numGuess === 11){                                  //checking user reached maximum nu. of guess or not
           displayGuess(guess);                              // display guess value using displayGuess function
           displayMessage(`Game Over. Random number was ${randomNumber}`)                      // display message using displayMessage function
           endGame()                                                                           // call endGame function to stop the game    
        }else{                                                                   // if user not reach maximum guess then we check the guess value
            displayGuess(guess)                                                  // display guess value using displayGuess function
            checkGuess(guess)                                                   // check the guess value using checkGuess function
        }            
    }
}

function checkGuess(guess){                                                         //its use to print message guess value correct or low or high 
    if(guess === randomNumber){
         displayMessage(`You guessed it right`)
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess){                                           //direct intract with DOM Claen Value , update array  
userInput.value = '';                                                  //clear input field after user submit a value
guessSlot.innerHTML += `${guess} , `                                  // display guess value in guessSlot += is used to append the value to the existing content  
numGuess++;                                                             // increment the number of guesses by 1

remaining.innerHTML = `${11-numGuess}`                                // display the number of remaining guesses
}

function displayMessage(message){  // display message in lowOrHi div
    lowOrHi.innerHTML = `<h2>${message} </h2>`
}

function endGame(){
userInput.value = '';  // clear input field
userInput.setAttribute('disabled', "")     // disable input field so user can't enter any value
p.classList.add('button')      // add class to p element for styling
p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`; // add text to p element
startOver.appendChild(p) // append p element to startOver div
playGame = false ;        // set playGame to false so user can't play the game again    

newGame()  // call newGame function to start a new game
}

function newGame (){

 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
 });
}

