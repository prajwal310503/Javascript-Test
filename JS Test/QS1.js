// QS1.Explain the concept of let, const, and var in ES6. Provide examples to demonstrate their differences and explain when each should be used.

//1.Let

/* let allows you to declare variables that are limited to the scope of a block statement or expression.
   Variables declared with let can be reassigned.
   Variables declared with let are not hoisted to the top of the block.*/

let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Output: 20
}
console.log(x); // Output: 10



//2. Const

/*const also declares variables, but with constant values.
Variables declared with const cannot be reassigned.*/

const PI = 3.14;
PI = 3; 
const arr = [1, 2, 3];
arr.push(4); // Allowed



//3. Var

/*var is the old way of declaring variables in JavaScript.
Variables declared with var have function scope or global scope if declared outside any function.*/

var y = 10;
if (true) {
    var y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 20
