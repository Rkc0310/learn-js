//+++++++++++++++++++++++++ Immediately Invoked Function Expression (IIFE)++++++++++++++++++++++++++++++++++++++++++++++++++

// Named IIFE: This function is defined and executed immediately
(function chai () {
    console.log(`Roshan`);  // Output: Roshan
})(); // The () at the end invokes the function immediately and use ; for end a invoke  




//.................................... Arrow function IIFE with a parameter.............................................
((surname) => {
    console.log(`Roshan kumar ${surname}`);                                                  // Output: Roshan kumar Chandravanshi
})("Chandravanshi");                                                         // The argument "Chandravanshi" is passed directly into the IIFE

