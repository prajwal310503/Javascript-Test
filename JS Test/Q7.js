// Q7.Explain the concept of Promises in JavaScript. Provide an example of using Promises to handle asynchronous operations, such as fetching data from an API.

// Promises are used in JavaScript to handle asynchronous operations. They offer a way to handle errors and outcomes of asynchronous functions, such as those used in AJAX requests or multi-step tasks. Promises provide an object that describes the status of a task and the ability to chain methods.

const myTask = () => {

    const conditionMet = true;

    return new Promise((resolve, reject) => {
        // perform some asynchronous operation
        setTimeout(() => {
            // operation finished
            if (conditionMet) {
                resolve("The task succeeded");
            } else {
                reject("The task failed");
            }
        }, 1000);
    });
}

myTask()
    .then(res => console.log(res))
    .catch(err => console.log(err));
