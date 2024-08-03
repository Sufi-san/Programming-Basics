function fullName(name) {
    console.log(name);
}

fullName('Sufiyan Chougule');

function fullName2(first, last) {
    console.log(first, last);
}

fullName2('Sufiyan', 'Chougule');

function addNumbers(first, second) {
    return first + second;
}

console.log(addNumbers(4, 5));

function rectArea(l, b) {
    return l * b;
}

console.log(rectArea(10, 9));

function rectPeri(l, b) {return 2 * (l + b);}

console.log(rectPeri(10, 9));

function rectPrismPeri(l, b, h) {return l * b * h;}

console.log(rectPrismPeri(10, 9, 8));

function circArea(r) {return Math.round(Math.PI * r ** 2);}

console.log(circArea(32));

function circCircumfer(r) {
    return Math.round(2 * Math.PI * r);
}

console.log(circCircumfer(32));

function density(mass, vol) {
    return Math.round(mass / vol);
}

console.log(density(78, 7));

function speed(disp, time) {
    return Math.round(disp / time);
}

console.log(speed(314, 7));

function weight(mass, g = 9.81) {
    return Math.round(mass * g);
}

console.log(weight(78));
console.log(weight(78, 1.682));

function convertToFahren(celsius) {
    return 9 * celsius / 5 + 32;
}

console.log(convertToFahren(43));

function BMI(w, h) {
    const bmi = w / (h * h);
    console.log(`BMI: ${bmi}`);
    let verdict = "Status: ";
    if(bmi < 18.5) {
        verdict = verdict.concat('Underweight');
    }
    else if(bmi < 24.9) {
        verdict = verdict.concat('Normal weight');
    }
    else if(bmi < 29.9) {
        verdict = verdict.concat('Overweight');
    }
    else verdict = verdict.concat('Obese');
    console.log(verdict);
}

BMI(73, 1.75);

function checkSeason(month) {
    month = month.toLowerCase();
    let season;
    if(month.startsWith('sep') || month.startsWith('oct') || month.startsWith('nov')) season = 'Autumn';
    else if(month.startsWith('dec') || month.startsWith('jan') || month.startsWith('feb')) season = 'Winter';
    else if(month.startsWith('mar') || month.startsWith('apr') || month.startsWith('may')) season = 'Spring';
    else if(month.startsWith('jun') || month.startsWith('jul') || month.startsWith('aug')) season = 'Summer';
    else season = 'Not Found';
    return season;
}

console.log(checkSeason("sEpTeMBeR"));

function findMax(...args) {
    if(args.length == 0) return undefined;
    let max = args[0];
    for(num of args) max = (max < num)? num: max;
    return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

function solveLinEquation(a, b, c) {
    let x = 0, y = 0, found = false;
    while(a * x + b * y + c < 0) {
        while(a * x + b * y + c < 0) y++;
        if(a * x + b * y + c == 0) {
            found = true;
            break;
        }
        x++;
        y = 0;
    }
    (found)? console.log(`x = ${x}, y = ${y}`): console.log(`No integer solution`);
}

// Equation in form: ax + by + c = 0, provide arguments: a, b, c
solveLinEquation(8, 3, -18); // Integers only

function solveQuadEquation(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;
    ans1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    ans2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`x = ${ans1}, ${ans2}`);
}

// Equation in form: ax^2 + bx + c = 0, provide arguments: a, b, c
solveQuadEquation(8, 3, -18);

// Trying out a self-invoking function
(function printArray(arr) {
    let line = '';
    for(num of arr) line = line.concat(` ${num}`);
    console.log(line);
})([1, 2, 3, 4]);

function showDateTime() {
    const dateTime = [], dateObj = new Date();
    dateTime[0] = dateObj.getDate();
    dateTime[1] = dateObj.getMonth() + 1;
    dateTime[2] = dateObj.getFullYear();
    dateTime[3] = dateObj.getHours();
    dateTime[4] = dateObj.getMinutes();
    for(let i = 0; i < dateTime.length; i++) {
        dateTime[i] = ''.concat(dateTime[i]);
        if(dateTime < 10) dateTime[i] = '0'.concat[dateTime[i]];
    }
    let format = `${dateTime[0]}/${dateTime[1]}/${dateTime[2]} ${dateTime[3]}:${dateTime[4]};`;
    console.log(format);
}

showDateTime();

function swapValues(x, y) {
    console.log(`Before Swap: x = ${x}, y = ${y}`);
    x ^= y;
    y ^= x;
    x ^= y;
    console.log(`After Swap: x = ${x}, y = ${y}`);
}

let x = 10, y = -50;
swapValues(x, y);

function reverseArray(arr) {
    console.log(`Original Array: ${arr}`)
    let newArr = [];
    for(let i = arr.length; i > 0; i--) {
        newArr.push(arr[i - 1]);
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(`Reversed Array: ${reverseArray(arr)}`);

function capitalize(arr) {
    console.log(`Original Array: ${arr}`)
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

const arr2 = ['Albania', 'Andorra', 'Latvia', 'Greece', 'Japan'];
console.log(`Capitalized: ${capitalize(arr2)}`);

function addItem(arr, item) {
    console.log(`Original Array: ${arr}, Item to add: ${item}`);
    let newArr = [];
    newArr = arr.slice();
    newArr.push(item);
    return newArr;
}

const arr3 = ['Apple', 'Mango', 'Grapes'];
console.log(`After adding item: ${addItem(arr3, 'Banana')}`);

function removeItem(arr, index) {
    console.log(`Original Array: ${arr}, Item to remove: ${arr[index]}`);
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(i == index) continue;
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(`After removing item: ${removeItem(arr3, 1)}`);

function sumOfNumbers(range) {
    return range * (range + 1) / 2;
}

console.log(`Sum of integers, from 0 to 100: ${sumOfNumbers(100)}`);

function sumOfOdds(range) {
    let terms = (range & 1)? Math.ceil(range / 2): range / 2;
    return terms ** 2;
}

console.log(`Sum of odds till 100: ${sumOfOdds(100)}`);

function sumOfEven(range) {
    let terms = (range & 1)? Math.ceil(range / 2): range / 2 + 1;
    return terms * (terms - 1);
}

console.log(`Sum of evens till 100: ${sumOfEven(100)}`);

function evenAndOdds(range) {
    if(range < 0) return undefined;
    let terms = (range & 1)? Math.ceil(range / 2): range / 2;
    console.log(`The number of odds are ${terms}.`);
    console.log(`The number of evens are ${range - terms + 1}`);
}

evenAndOdds(100);

function sum(...nums) {
    let sum = 0;
    for(num of nums) sum += num;
    return sum;
}

console.log(sum(1, 2, 3, 40, 89));
console.log(sum(-50, 0, -15, 18));

function randomUserIP() {
    let IP = '';
    for(let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 256);
        IP = IP.concat(num);
        if(i < 3) IP = IP.concat(':');
    }
    return IP;
}

console.log(randomUserIP());

function randomMacAddress() {
    let MAC = '';
    let hexString = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++) {
        let ind1 = Math.floor(Math.random() * hexString.length);
        let ind2 = Math.floor(Math.random() * hexString.length);
        MAC = MAC.concat(hexString[ind1].concat(hexString[ind2]));
        if(i < 5) MAC = MAC.concat(':');
    }
    return MAC;
}

console.log(randomMacAddress());

function randomHexaNumberGenerator() {
    let num = ['#'];
    let hexString = '0123456789abcdef';
    for(let i = 0; i < 6; i++) {
        num.push(hexString[Math.floor(Math.random() * hexString.length)]);
    }
    return num.join('');
}

console.log(randomHexaNumberGenerator());

function userIDGenerator(size, count) {
    let IDs = [];
    for(let j = 0; j < count; j++) {
        let ID = [];
        for(let i = 0; i < size; i++) {
            let code = Math.floor(30 + Math.random() * 93);
            let ch = String.fromCharCode(code);
            if(ch.match(/[^a-zA-Z0-9]/)) {
                i--;
                continue;
            }
            ID.push(ch);
        }
        IDs.push(ID.join(''));
    }
    return IDs.join('\n');
}

console.log(userIDGenerator(7, 1));

console.log(userIDGenerator(5, 5));
console.log(userIDGenerator(16, 5));

function rgbColorGenerator() {
    let rgb = [];
    for(let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

console.log(rgbColorGenerator());

function arrayOfHexaColors(count) {
    let arr = [];
    for(let i = 0; i < count; i++) arr.push(randomHexaNumberGenerator());
    return (arr.length == 1)? arr[0]: arr;
}

console.log(arrayOfHexaColors(5));

function arrayOfRgbColors(count) {
    let arr = [];
    for(let i = 0; i < count; i++) arr.push(rgbColorGenerator());
    return (arr.length == 1)? arr[0]: arr;
}

console.log(arrayOfRgbColors(5));

function convertHexaToRgb(hex) {
    console.log(`HEX: ${hex}`);
    let r = hexToDec(hex[1], 16) + hexToDec(hex[2]);
    let g = hexToDec(hex[3], 16) + hexToDec(hex[4]);
    let b = hexToDec(hex[5], 16) + hexToDec(hex[6]);
    return `rgb(${r},${g},${b})`;
}

function hexToDec(ch, base = 1) {
    let num;
    if(!ch.match(/[^0-9]/)) {
        num = Number(ch) * base;
    }
    else {
        num = ch.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
        num *= base;
    }
    return num;
}

console.log("RGB: ",convertHexaToRgb(randomHexaNumberGenerator()));

function convertRgbToHexa(rgb) {
    console.log("RGB:",rgb);
    let nums = rgb.match(/\d+/g);
    for(let i = 0; i < nums.length; i++) {
        nums[i] = decToHex(Number(nums[i]));
    }
    return `#${nums.join('')}`;
}

function decToHex(num) {
    let hex = '';
    while(num > 0) {
        let rem = num % 16;
        rem = (rem >= 10)? getAlpha(rem): String(rem);
        hex = rem.concat(hex);
        num = Math.floor(num / 16);
    }
    return (hex.length == 1)? '0'.concat(hex): hex;
}

function getAlpha(num) {
    let alpha = 'a'.charCodeAt(0) + num - 10;
    return String.fromCharCode(alpha);
}

console.log(`HEX: ${convertRgbToHexa(rgbColorGenerator())}`);

function generateColors(type='hexa', count=1) {
    return (type == 'hexa')? arrayOfHexaColors(count): arrayOfRgbColors(count);
}

console.log(generateColors('hexa', 3));
console.log(generateColors('hexa'));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb'));

function shuffleArray(arr) {
    console.log(`Original Array: ${arr}`);
    let shuffled = arr.slice();
    for(let i = 0; i < arr.length; i++) {
        let randInd = Math.floor(Math.random() * shuffled.length);
        let temp = shuffled[i];
        shuffled[i] = shuffled[randInd];
        shuffled[randInd] = temp;
    }
    return shuffled;
}

let myArr = ['Sufi', 1, true, 'Faizu', false, 3.8, 'Raiho'];
console.log(`Shuffled Array: ${shuffleArray(myArr)}`);

function factorial(num) {
    let ans = 1;
    while(num > 1) {
        ans *= num;
        num--;
    }
    return ans;
}

console.log(factorial(12));

function isEmpty(param='') {
    if(param === null && param === undefined) return true;
    param = ''.concat(param);
    return param.length == 0;
}

console.log(isEmpty([]));
console.log(isEmpty([1,2]));
console.log(isEmpty(568));
console.log(isEmpty(''));

// Exercise Level 3: Q11, Already done above

function sumOfArrayItems(arr) {
    let sum = 0, invalid = false;
    for(item of arr) {
        if(typeof item != 'number') {
            invalid = true;
            break;
        }
        sum += item;
    }
    return (invalid)? `Invalid Array (All elements should be numbers)`: sum;
}

console.log(sumOfArrayItems(myArr));
console.log(sumOfArrayItems([1, 5, 8, 9, 10]));

function average(arr) {
    let sum = sumOfArrayItems(arr);
    let result = (typeof sum == 'number')? sum / arr.length: sum;
    return result;
}

console.log(average(myArr));
console.log(average([1, 5, 8, 9, 10]));

function modifyArray(arr) {
    if(arr.length < 5) return 'Item not found';
    arr[4] = (typeof arr[4] == 'string')? arr[4].toUpperCase(): arr[4];
    return arr;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

function isPrime(num) {
    if(typeof num != 'number') return false;
    let c = 2;
    while(c * c <= num) {
        if(!(num % c)) return false;
        c++;
    }
    return true;
}

console.log(isPrime(25));
console.log(isPrime(23));

function allUnique(arr) {
    if(arr.length == 0) return true;
    const set = new Set();
    for(item of arr) {
        if(set.has(item)) return false;
        set.add(item);
    }
    return true;
}

console.log(allUnique(myArr));
console.log(allUnique([1, 2, 'a', 4, 'a']));
console.log(allUnique([2, 2, 5, 3, 'a']));

function allSameType(arr) {
    if(arr.length == 0) return true;
    let type = typeof arr[0];
    for(item of arr) {
        if(typeof item != type) return false;
    }
    return true;
}

console.log(allSameType([1, 2, '3', 4, '5']));
console.log(allSameType([1, 2, 3, 4]));
console.log(allSameType([true, false, false, true]));
console.log(allSameType(['a', 'b', 'c']));

function isValidVariable(varName='') { // checks only for syntax, not reserved keywords
    varName = ''.concat(varName);
    if(isEmpty(varName)) return false;
    if(varName[0].match(/[^a-zA-Z$_]/)) return false;
    if(varName.match(/[^a-zA-Z$_0-9]/)) return false;
    return true;
}

console.log(isValidVariable());
console.log(isValidVariable(7));
console.log(isValidVariable('_%^@6'));
console.log(isValidVariable('abcd'));
console.log(isValidVariable('7abcd'));
console.log(isValidVariable('$abcd'));
console.log(isValidVariable('_abcd'));

function sevenRandomNumbers() {
    let arr = [], set = new Set();
    for(let i = 0; i < 7; i++) {
        let num = Math.floor(Math.random() * 10);
        if(set.has(num)) {
            i--;
            continue;
        }
        arr.push(num);
        set.add(num);
    }
    return arr;
}

console.log(sevenRandomNumbers());

function reverseCountries(countries) {
    console.log('Original:',countries);
    let reversed = [];
    for(let i = countries.length; i > 0; i--) reversed.push(countries[i - 1]);
    return reversed;
}

const countries = require('./Additional Files/countries');

console.log('Reversed:', reverseCountries(countries));
