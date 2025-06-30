// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// THis all are comparison operators we predict in easly way 

//now take some different data types and compare them

console.log("2" == 2);
console.log("02" == 2);

console.log(null == 0);  //false
console.log(null > 0);   //false
console.log(null >= 0);  //true
//The reson is that an equality check == ans comparisons >, <, >=, <= work differently.
//comparison convert null to a number, treating it as 0 . Thats why (3)null >= 0 is true and (1) null > 0is false.

console.log( undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//The reason is that undefined is not a number, so it cannot be compared to 0.

//=== strict comparison they are use to compare the value and the type also

console.log("2" === 2); //false...
