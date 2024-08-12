// Analyzing the order of execution of callbacks, in case of nested '.then()' methods
// Even though promiseB will get resolved first, its '.then()' method will not be inserted into the queue before promiseA is resolved. This is because, promiseB's .then() is nested inside promiseA's .then() method

const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("PromiseA: Task completed after 5 seconds");
        resolve("PromiseA Resolved");
    }, 5000);
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("PromiseB: Task completed after 2 seconds");
        resolve("PromiseB Resolved");
    }, 2000);
});

console.log("PromiseA State:", promiseA);
console.log("PromiseB State:", promiseB);
promiseA.then(response => {
    console.log(response);
    console.log("PromiseA State:", promiseA);
    console.log("PromiseB State:", promiseB);
}).then(() => {
    promiseB.then(response => {
        console.log(response);
        console.log("PromiseA State:", promiseA);
        console.log("PromiseB State:", promiseB);
    })
})