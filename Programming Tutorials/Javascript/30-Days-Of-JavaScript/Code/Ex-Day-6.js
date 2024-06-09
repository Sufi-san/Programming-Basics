let i;
for(i = 0; i < 11; i++) console.log(i);
i = 0;
while(i < 11) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++
} while(i < 11);
for(i = 10; i >= 0; i--) console.log(i);
i = 10;
while(i >= 0) {
    console.log(i);
    i--;
}
i = 10;
do {
    console.log(i);
    i--;
} while(i >= 0);

let n = 8;
for(i = 0; i <= n; i++) console.log(i);


for(i = 0; i < n; i++) {
    console.log('#'.repeat(i + 1));
}

for(i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

console.log('i\ti^2\ti^3');
for(i = 0; i < 11; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

let evens = [], odds = [];
for(i = 1; i <= 101; i+=2) {
    evens.push(i - 1);
    if(i < 100) odds.push(i);
}
console.log(evens.join(' '));
console.log(odds.join(' '));

let primes = [];
for(let i = 2; i <= 100; i++) {
    let c = 2, isPrime = true;
    while(c * c <= i) {
        if(!(i % c)) {
            isPrime = false;
            break;
        }
        c++;
    }
    if(isPrime) primes.push(i);
}
console.log(primes.join(' '));

let sum = 0;
for(i = 0; i <= 100; i++) sum += i;
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

sum = 0
let sum2 = 0;
for(i = 0; i < evens.length; i++) sum += evens[i];
for(i = 0; i < odds.length; i++) sum2 += odds[i];
console.log(`The sum of all evens from 0 to 100 is ${sum}. And the sum of all odds from 0 to 100 is ${sum2}`);

let sumsOddEven = [sum, sum2];
console.log(sumsOddEven);

let randomArr = [];
for(i = 0; i < 5; i++) randomArr.push(Math.round(Math.random() * 10));
console.log(randomArr);

randomArr = [];
for(i = 0; i < 5; i++) {
    let rndNum = Math.round(Math.random() * 10);
    if(!randomArr.includes(rndNum)) randomArr.push(rndNum);
    else i--;
}
console.log(randomArr);

randomID = Array(6);
for(i = 0; i < randomID.length; i++) {
    let ch = String.fromCharCode(30 + Math.round(Math.random() * 92));
    randomID[i] = ch;
}
console.log(randomID.join(''));

let rndLen = Math.round(Math.random() * 100);
randomID = Array(rndLen);
for(i = 0; i < rndLen; i++) {
    let ch = String.fromCharCode(30 + Math.round(Math.random() * 92));
    randomID[i] = ch;
}
console.log(randomID.join(''));

let rndHex = '#', hexChars = '0123456789abcdef';
for(i = 0; i < 6; i++) {
    let rndInd = Math.floor(Math.random() * hexChars.length);
    rndHex = rndHex.concat(hexChars[rndInd]);
}
console.log(rndHex);

let rgbArr = Array(3);
for(i = 0; i < rgbArr.length; i++) {
    let rndNum = Math.floor(Math.random() * 256);
    rgbArr[i] = rndNum;
}
console.log(`rgb(${rgbArr.toString()})`);

const countries = require('./Additional Files/countries');
const upCountries = [];
const lenCountries = [];
for(country of countries) {
    upCountries.push(country.toUpperCase());
    lenCountries.push(country.length);
}
console.log(upCountries);

console.log(lenCountries);

countries.splice(countries.indexOf('Japan'), 0, 'Iceland');
const arrOfArr = [];
for(country of countries) {
    const arr = [];
    arr.push(country);
    arr.push(country.slice(0, 3).toUpperCase());
    arr.push(country.length);
    arrOfArr.push(arr);
}
console.log(arrOfArr);

const landCountries = [];
const iaCountries = [];
for(country of countries) {
    if(country.match(/land/gi)) landCountries.push(country);
    if(country.match(/ia/gi)) iaCountries.push(country);
}
if(landCountries.length) console.log(landCountries);
else console.log('All these countries are without land.');

if(iaCountries.length) console.log(iaCountries);
else console.log('These countries end without ia.');

let biggest = countries[0];
let chr5Countries = [];
for(country of countries) {
    let currLen = country.length;
    if(biggest.length < currLen) biggest = country;
    if(currLen == 5) chr5Countries.push(country);
}
console.log(biggest);

console.log(chr5Countries);

const webTechs = require('./Additional Files/web_techs');
let longest = webTechs[0];
for(tech of webTechs) {
    if(longest.length < tech.length) longest = tech;
}
console.log(longest);

const wordNCount = [];
for(tech of webTechs) {
    const arr = [tech, tech.length];
    wordNCount.push(arr);
}
console.log(wordNCount);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acr = '';
for(word of mernStack) acr = acr.concat(word[0]);
console.log(acr);

for(word of webTechs) console.log(word);

const fruits = ['banana', 'orange', 'mango', 'lemon'];
for(i = 0; i < fruits.length / 2; i++) {
    let temp = fruits[i];
    fruits[i] = fruits[fruits.length - 1 - i];
    fruits[fruits.length - 1 -i] = temp;
}
console.log(fruits);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(arr of fullStack) {
    for(tech of arr) {
        console.log(tech.toUpperCase());
    }
}

const countrCopy = countries.slice();
console.log(countrCopy);

const sortedCountries = countrCopy.sort();
console.log(sortedCountries);

webTechs.sort();
mernStack.sort();
console.log(webTechs,"\n", mernStack);

const countries2 = require('./Additional Files/countries2');

const landCountries2 = [];
const chr4Arr = [];
const word2Arr = [];
let maxCharCountry = countries2[0];
for(country of countries2) {
    if(country.match(/land/gi)) landCountries2.push(country);
    if(country.length > maxCharCountry.length) maxCharCountry = country;
    if(country.length == 4) chr4Arr.push(country);
    let words = country.split(' ');
    if(words.length >= 2) word2Arr.push(country);
}
console.log("Countries containing word 'land':",landCountries2);

console.log("Country with Highest Number of Characters:",maxCharCountry);

console.log("Countries containing only 4 characters:",chr4Arr);

console.log("Countries containing 2 or more words:",word2Arr);

const revCaptCountries = [];
for(i = countries2.length; i > 0; i--) {
    revCaptCountries.push(countries2[i - 1].toUpperCase());
}
console.log(revCaptCountries);
// We can also use unshift with a 0 to n for-loop, but that will increase complexity.