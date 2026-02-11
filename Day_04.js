/* LOOPS */

/*
Q1) wap to print natural numbers from 1 to N

 */

function Natural_num(n){
    let i;
    for(i=1;i<=n;i++){
        console.log(i);}
}
Natural_num(10)

/*
Q2) wap to print natural numbers from N to 1

 */

function Reverse_Natural_num(n){
    let i;
    for(i=n;i>=1;i--){
        console.log(i);}
}
Reverse_Natural_num(10)

/*
Q3) wap to sum upto N terms

 */

function Sum_upto_n(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i  // sum = sum + i
    }
    console.log(sum);
    
}
Sum_upto_n(5)

/*
Q4) wap to find a factorial of a number

 */

function factorial(n){
     let fact = 1;
    for(let i=1;i<=n;i++){
        fact *= i  // fact = fact * i
    }
    console.log(fact);

}
factorial(5)

/*
Q5. Sum of Even and Odd Numbers in Range(seperately)
*/
function sum_even_odd(n){
    if(isNaN(n)) return "Invalid range"
    let even_sum =0;
    let odd_sum =0;
    
    for(let i=1;i<=n;i++){
        if(i%2==0)even_sum +=i;
        else odd_sum +=i; }
    console.log(even_sum,odd_sum);
}
sum_even_odd(20);

/*
Q6. All Factors of a Number
*/
// Method 1: Check from 1 to n
function All_factors_of_number(n){
    if(isNaN(n)) return "Invalid Input";
    let i;
    for(i=1;i<=n;i++){
        if(n%i==0) console.log(i)
            else "No factors"
    
    }
}
All_factors_of_number(30)

// Method 2: Check from 1 to n/2
// "Factors of any number is 1 and itself otherwise its or half or smaller than half"
// for(i=2;i<=n/2;i++){
//     if(n%i==0){console.log(i)}
//     //seperatly print 1 and n
// }


/*
Q7. checking primes  = prime numbers are which are divisible by itself and one   only 
*/
//Method 1
// * Time Complexity**: O(n)

function isPrime1(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count === 2;
}
console.log(isPrime1(10)); // true


// method 2
// *Time Complexity**: O(n/2)

function isPrime2(n){
    if(n<=1) return "false";
    for(let i =2 ;i<=n/2;i++){
        if(n%i===0) return "false"
        
    }
    return "true"
}
console.log(isPrime2(11))

// method 3

function isPrime3(n){
    if(isNaN(n))  return "Invalid Input";
    if(n<=1) return "false"
    if(n==2) return "true"
    if(n%2==0) return "false"
    for(let i=3; i*i<=n;i+=2){
        if(n%i==0) return "false"
    }
    return "true"
}

console.log(isPrime3(7))

// * Time Complexity**: O(√n)
// * Why Efficient?** Because any non-prime number `n` must have at least one factor less than or equal to √n.