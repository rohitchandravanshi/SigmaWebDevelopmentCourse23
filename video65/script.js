// let num = prompt("Enter a number")
// // let a =45;
// console.log(a)


// Write a program to calculate factorial of a number using reduce and using for loop 
    
// eg : 6! = 6*5*4*3*2*1

let num = 6;
let factorial = 1;

for(i=num; i>=1; i--){
    factorial = factorial*i;
}
console.log(factorial)