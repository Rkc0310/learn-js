// java script execution context 

//{} -> Global Ec
//1-Global Execution Context 
//2-Function Execution Context
//3-Eval Execution Context

// +++++++++++++++++................+++++++++

//{}-> 
// 1-Memory Creation Phase 
// 2-Execution Phase

let val1 = 10;
let val2 = 5;

function addnum(num1, num2){
    let total = num1 + num2
    return total
}

let result = addnum(val1, val2);
console.log(result);

let result2 = addnum(6,7); 
console.log(result2);



// 1. Global Execution Context Creation.............................................................

// JavaScript creates a global execution context before it runs any code.
// It binds the keyword this to the global object.
// This phase is where memory and variables are prepared before code starts running.



// 🔄 2. Memory Creation Phase (Hoisting).............................................................

// In this phase, JavaScript scans the code and sets up memory space for:
// Variables with undefined.
// Functions with full definitions.

// Memory Set-Up:
// Identifier	Memory Allocated
// val1    -	undefined
// val2    -	undefined
// addNum  -	Function definition
// result1  -   undefined
// result2	-   undefined



// 3. Execution Phase (Code is Run)..........................................................
// Now, JavaScript runs line-by-line and assigns real values:

// Line	Action
// val1 = 10	           Now val1 = 10
// val2 = 5	               Now val2 = 5
// addNum(val1, val2)	   Function call → creates new Execution Context
// result1 = 15	           From function return
// result2 = 12	           Second function call

// Function Execution Context....................................................
// When a function is called (addNum(val1, val2)), it creates a new execution context.

// Inside addNum(val1, val2):

// 🔹 Memory Phase (for addNum):
// num1 → undefined
// num2 → undefined
// total → undefined

// 🔹 Execution Phase:
// num1 → 10
// num2 → 5
// total → 15
// Return → 15


// After function finishes:
// Execution Context is deleted from the call stack
