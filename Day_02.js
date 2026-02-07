/* MATH FUNCTIONS

Math.ceil     = Rounds number upwards    👉 Math.ceil(4.2); // 5
Math.floor    = Rounds number downwards  👉 Math.floor(4.9); // 4
Math.max      = Returns largest value    👉 Math.max(3,7,2); // 7
Math.min      = Returns smallest value   👉 Math.min(3,7,2); // 2
Math.PI       = Value of pi (3.14…)      👉 Math.PI; // 3.14159
Math.pow      = Power of number          👉 Math.pow(2,3); // 8
Math.sqrt     = Square root of number    👉 Math.sqrt(16); // 4
Math.trunc    = Removes decimal part     👉 Math.trunc(4.9); // 4
Math.abs      = Makes number positive    👉 Math.abs(-5); // 5
Math.random   = Generates random number  👉 Math.round(4.5); // 5
Math.round    = Nearest integer round    👉 Math.random(); // 0.0 to 0.999...

 */

/* 
Q1) Accept the principal amount (P), annual interest rate (r), the number of years (t), and number of times interest is compounded per year (n). Write a program to calculate the compound interest. The formula to calculate compound interest is:
A = P × (1 + r/n)^(n × t)
Where A is the amount of money accumulated after n years, including interest. P is the principal amount (the initial sum of money). r is the annual interest rate (in decimal). t is the time the money is invested for in years. n is the number of times that interest is compounded per year. The compound interest is then calculated as CI = A – P.
*/

function CI(P, r, t, n) {
    let A = P*Math.pow((1+r/n),(n*t));
    let CompundInterest = A-P;
    console.log(CompundInterest.toFixed(2));
    
}

CI(1000,0.5,10,4);

/*
Q2) Accept the lengths of the three sides of a triangle, write a program to calculate the area of the triangle using Heron’s formula. The formula states that if the sides of the triangle are a, b, and c, Where s is the semi-perimeter of the triangle.
 */

function AreaOfTraingle(a,b,c){
    let s = (a+b+c)/2;
    let Area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log(Area.toFixed(1))
}
AreaOfTraingle(3,4,5)

/*
Q3) Accept the radius of a circle as float, write a program to calculate both the circumference and area of the circle. Use the following formulas:
Circumference C = 2 · π · r
Area A = π · r²
Where r is the radius of the circle.
Hint: For getting pi value you can use Math.PI. Note: Do not use Math.pow to calculate the answer to the correct decimal place.
 */

function CircleProperties(r){
    let circumference= 2*Math.PI*r;
    let area = Math.PI*r*r;

    console.log([circumference.toFixed(2),area.toFixed(2)])
}
CircleProperties(5.2)