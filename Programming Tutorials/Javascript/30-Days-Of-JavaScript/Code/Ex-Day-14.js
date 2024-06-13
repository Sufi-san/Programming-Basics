// Using the try-catch-finally block and catching different error types

function capitalizeInitials(arr) {
    return arr.map(word => {
        let errorFound = false;
        try {
            return word[0].toUpperCase().concat(word.substr(1, word.length - 1));
        }
        catch(err) {
            console.error(`Name: ${err.name}, Message: ${err.message}`);
        }
        finally {
            let str = (errorFound)?"Error Found": "No Errors";
            console.log(str);
        }
    }).join(' ');
}

function divide(numsArr) {
    numsArr.forEach(nums => {
        try {
            if(typeof nums[0] != 'number' || typeof nums[1] != 'number') throw new TypeError('Arguments must be of type number');
            if(nums[1] == 0) {
                const err = new Error('Cannot divide by zero');
                err.name = 'DivideByZeroError';
                throw err;
            }
            console.log(nums[0] / nums[1]);
        }
        catch(err) {
            console.error(`Name: ${err.name}, Message: ${err.message}`);
        }
    })
}

const words = ["Trying", 5, "out", true, "error", "handling."];
console.log(capitalizeInitials(words));

const numsArr = [[1, 2], [1, '2'], [1, 'string'], [1, 0]];
divide(numsArr);

// Uncommenting below lines will result in:

// let num = 2 x 3; // Syntax Error
// let num = num1 * num2 // Reference Error