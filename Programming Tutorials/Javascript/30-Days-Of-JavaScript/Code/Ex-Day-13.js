// const countries2 = require('./Additional Files/countries2');
// const countries_data = require('./Additional Files/countries_data');

console.table(countries2);

console.table(countries_data);

let odds = [], evens = [];
for(let i = 0; i < 20; i++) {
    (i & 1)? odds.push(i): evens.push(i);
}
console.group('Odds:');
console.log(odds.join(' '));
console.groupEnd();
console.group('Evens:');
console.log(evens.join(' '));
console.groupEnd();

let a = 10, b = 2 * a;
console.assert(a > b, `${a} is not greater than ${b}`);

function printArgs(useArgObj, ...rest) {
    if(useArgObj) {
        console.warn("Using 'arguments' object is not the recommended way");
        for(let i = 1; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
        // The arguments object, does not include the rest parameter
        return;
    }
    for(let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

printArgs(false, 1, 2, [1, 2], false);
printArgs(true, 1, 2, [1, 2], false);

console.error("Sample Error Message!!");

let i = 0;
let arr = [1, 4, 7, 10], sum;
console.time('while');
sum = 0;
while(i < arr.length) {
    sum += arr[i];
    i++;
}
console.log("Sum:",sum);
console.timeEnd('while');
console.time('for');
sum = 0;
for(i = 0; i < arr.length; i++) sum += arr[i];
console.log("Sum:",sum);
console.timeEnd('for');
console.time('for of');
sum = 0;
for(const num of arr) sum += num;
console.log("Sum:",sum);
console.timeEnd('for of');
console.time('for Each');
sum = 0;
arr.forEach(num => sum += num);
console.log("Sum:",sum);
console.timeEnd('for Each');