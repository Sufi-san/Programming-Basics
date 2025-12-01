// The order of execution of '.then()' methods is NOT dependent on the order in which the promises are initialized and '.then()' methods are attached to them.
// It depends on WHEN the particular promise to which the .then() is called from, is resolved.
// However, this behavior may vary in case of nested '.then()' methods.

let count = 1;
const intervalID = setInterval(() => {
    console.log(`\nAfter ${count} seconds -`);
    console.log("PromiseA State:", promiseA);
    console.log("PromiseB State:", promiseB);
    count++;
    if(count == 6) clearInterval(intervalID);
}, 1000);

// we have used 'var' for both promises here to enable hoisting and prevent ReferenceError
var promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromiseA: Task completed after 5 seconds");
        resolve("PromiseA Resolved");
    }, 5000);
});

promiseA.then(response => {
    console.log(response);
    console.log("PromiseA State:", promiseA);
    console.log("PromiseB State:", promiseB);
})

var promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("\nPromiseB: Task completed after 2 seconds");
        resolve("PromiseB Resolved");
    }, 2000);
});

promiseB.then(response => {
    console.log(response);
    console.log("PromiseA State:", promiseA);
    console.log("PromiseB State:", promiseB);
})