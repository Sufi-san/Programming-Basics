// The tasks assigned to promises start executing instantly after the promise is initialized
// When the task is complete, the promise is resolved.
// The .then() method and the 'await' keyword are used only to retrieve the result from the resolved promises and further execution starts only after the promises they are assigned to, are resolved.

const promiseX = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("PromiseX: Task completed after 5 seconds");
        resolve("PromiseX Resolved");
    }, 5000);
});

const promiseY = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("PromiseY: Task completed after 2 seconds");
        resolve("PromiseY Resolved");
    }, 2000);
});

let count = 1;
const intervalID = setInterval(() => {
    console.log(`\nAfter ${count} seconds -`);
    console.log("PromiseX State:", promiseX);
    console.log("PromiseY State:", promiseY);
    count++;
    if(count == 6) clearInterval(intervalID);

    // If a promise is fulfilled/resolved, any .then() method called on it will instantly return a response
    // If a promise is pending, any .then() method called on it will get queued on the task queue

    // Below callback will be queued in the task queue till promiseX gets resolved, and promiseX gets resolved only after 5 seconds, once 5 seconds pass, all the queued method will execute instantly in the order in which they were queued.
    promiseX.then(response => console.log(response)); 

    // Below callback will be queued only once and after that all callbacks will execute instantly. This is because promiseY gets resolved after only 2 seconds.
    promiseY.then(response => console.log(response));
}, 1000);