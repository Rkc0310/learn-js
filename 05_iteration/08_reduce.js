// Reduce Method
// The reduce method take an two parameters, a callback function and an initial value.
// The callback function takes two parameters, an accumulator and the current value.
// The reduce method applies the callback function to each element in the array, passing the accumulator and the current value as arguments.
// The return value of the callback function is used as the accumulator for the next iteration.
// The reduce method returns a single value, which is the final value of the accumulator after all iterations.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){          
//     console.log(`acc: ${acc} and curval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc ,currval)=> acc + currval,0)

console.log(myTotal);

const shoppingCart = [
{ itemName: "javaScript",
    price: 2999
},

{ itemName: "Python",
    price: 4999
},

{ itemName: "DSA",
    price: 6999
},

{ itemName: "BlockChain",
    price: 9999
},
]

const priceTopay = shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(`Total price TO Pay:${priceTopay}`);
