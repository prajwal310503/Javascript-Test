/* Explain the concept of default parameters in ES6 functions. Provide an example demonstrating object passed as an argument. The function should extract and return the 'name' and 'age' properties from the object.*/

function extractInfo({ name = 'Unknown', age = 'Unknown' } = {}) {
    return { name, age };
}

const person = {
    name: 'Prajwal',
    age: 21
};


const { name, age } = extractInfo(person);
console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Prajwal Mulik, Age: 21


const defaultInfo = extractInfo();
console.log(`Name: ${defaultInfo.name}, Age: ${defaultInfo.age}`); // Output: Name: Unknown, Age: Unknown
