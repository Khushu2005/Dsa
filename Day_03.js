// Conditional Statments 

/*
Q1) WAP to find greatest of two numbers
*/

function GreatestNumber(a,b){
    console.log(Math.max(a,b));
}
GreatestNumber(20,10)

/*
Q2) Check if a number is even or odd:
 */

function EvenOdd(num){
    const result = num%2==0 ? "Even" :"Odd";
    console.log(result)
}
EvenOdd(30);

/*

Q3)Check if a User is Valid Voter or not?
 */

function ValidVoter(name,age){
    const result = age<18? `${name} is not a Valid Voter` : `${name} is a Valid Voter` 
    console.log(result)
}
ValidVoter("Anupam" ,10)

/*
Q4) WAP that takes 3 integers as input and prints greatest  of the  3 numbers # if 2 or more numbers are equal and largest print that number.
*/

function Largestnumber(a,b,c){
    if(a>=b && a>=c) console.log(a);
    else if(b>=a && b>=c) console.log(b);
    else console.log(c);
}
Largestnumber(10,20,40)

/*
Q5) check if a year id leap year or not 
*/

function IsleapYear(year){
    const results = (year%4==0 &&year%100!=0) || (year%400==0) ? "Leap year" : "Not a leap year"
    console.log(results);
    
}
IsleapYear(1600)

/*
Q6) Wap that takes an initial amount as input & calculates the final amount after applying  a flat discount based on the following conditions 
   0 - 5000    = 0%
  5001 - 7000  = 5%
  7001 - 9000  = 10%
more than 9000 = 20%
*/

function CalculatedFinalAmount(amount){
    let discount=0;
    if(amount>0 && amount<5001) discount=0;
    else if(amount<7001) discount=5
    else if(amount<9001) discount=10;
    else discount=20;

    console.log(`${amount-(amount*discount /100 )}`);
    
}
CalculatedFinalAmount(5001)