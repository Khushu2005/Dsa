// AIRTHEMATIC OPERATORS

// String + Int 

let a = 10;
let b = 20;

console.log('Sum of ' +a + " and " +  b + " is " + (a+b))
// 'Sum of' + a                    = "Sum of 10"              --- string + int = string (Concatenation)
// "Sum of 10" + "and"             = "Sum of 10 and"          --- string + string (Concatenation)
// "Sum of 10 and" + b             = "Sum of 10 and 20"       --- string + int = string (Concatenation)
// "Sum of 10 and 20" + "is"       = "Sum of 10 and 20 is"    --- string + string (Concatenation)
// "Sum of 10 and 20 is" + (a+b)   = "Sum of 10 and 20 is 30" --- (a+b)priority int+int = int = 30,string + int = string 



//  TYPE COERCION
// JS me type coercion ka matlab hota hai:
// jab JavaScript automatically ek data type ko dusre data type me convert kar deta hai operation ke time.

// (-,*,%,/) jaise operators me 

let first = 10;
let second = "20"

let ans = second-first

console.log(ans)//output =  10
// second is converted in number 

console.log(typeof(ans)) // number




// UNARY OPERATORS
//  dosent need 2 operands 

//Increment 

// pre-increment
let one = 10;
console.log(++one,one) // o/p = 11 , one= 11

// post-increment
let one_1 = 10;
console.log(one_1++,one_1) // o/p = 10 , one_1 = 11


//decrement

// pre-decrement
let sec = 5;
console.log(--sec,sec) // o/p = 4 , one= 4

// post-decrement
let sec_1 = 5;
console.log(sec_1--,sec_1) // o/p = 5 , one_1 = 4

// Special Cases
console.log(--10); // Error these operators can't be perfomed on constants 

let c = true;     //value of true is 1
console.log(++c);




