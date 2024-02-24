/* Q1.Explain the following ES6 features with examples:
- Arrow Functions
- Template Literals
- Destructuring Assignment */



// 1. Arrow Functions

// It provides a more concise syntax for writing function expressions by opting out the function and return keywords.

// Arrow function
var sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5






// 2. Template Literals

// Template literals provide an easy and clean way create multi-line strings and perform string interpolation.

let str = `The quick brown fox
    jumps over the lazy dog.`;

// String with embedded variables and expression
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // The sum of 10 and 20 is 30






// 3. Destructuring Assignment

// The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables by providing a shorter syntax.

let students = ["Varad", "Prajwal"];

let [V, P] = students; // Array destructuring assignment

alert(V); // Varad
alert(P); // Prajwal