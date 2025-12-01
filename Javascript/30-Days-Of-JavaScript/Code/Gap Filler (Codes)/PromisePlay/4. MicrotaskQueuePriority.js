// Methods like 'setTimeout' and 'setInterval' have their callbacks inserted into the Macrotask Queue (Task Queue).
// Promises have a higher priority and are placed into the Microtask Queue (Priority/Promise Queue).
// Microtask Queue callbacks are generally of higher priority than callbacks of Macrotask Queue.

function getPromise(count) {
    const promise = new Promise((resolve) => {
        console.count("Promise Task Complete");
        resolve(`Promise resolved`);
        if(count < 5) getPromise(count + 1).then(response => console.log(response));
    })
    return promise;
}

let count = 0;
const intervalID = setInterval(() => {
    console.count('Timeout Task Complete');
    count++;
    if(count == 5) clearInterval(intervalID);
}, 0);

getPromise(0).then(response => console.log(response));