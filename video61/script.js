/*Ceate a faulty calculator using JavaSccirpt

This Faulty calculator does following:
1. It takes two numbers as input from thr user
2. It performs wrong operations as follows:
+ ---> -
- ---> +
- ---> /
/ ---> **

It performs wrong opration  10% of the times
*/

let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter opration")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

console.log(random)

if(random>0.1){
   //Perform correct calculation
   console.log(`The result is ${a} ${c} ${b}`)
   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
  //Perform wrong calculation
  c = obj[c]
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}