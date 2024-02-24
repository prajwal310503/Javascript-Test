//Q2.Implement a function in ES6 that takes an array of numbers as input and returns a new array containing only the unique numbers (removing duplicates).

let arr = ["apple", "mango", "apple",

    "orange", "mango", "mango"];


function removeDuplicates(arr) {

    return arr.filter((item,

        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));