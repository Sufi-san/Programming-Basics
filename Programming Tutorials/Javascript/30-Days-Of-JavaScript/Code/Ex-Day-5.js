const empty = [];
console.log(empty);

const fiver = [1, 2, 3, 4, 5];
console.log(fiver);
console.log(fiver.length);

const fiverMid = Math.floor(fiver.length / 2);
console.log(fiver[0], fiver[fiverMid], fiver[fiver.length - 1]);

const mixedTypes = [0, '1', true, null, undefined, fiver]
console.log(mixedTypes);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);

console.log(itCompanies.length);

let compMid = Math.floor(itCompanies.length / 2);
console.log(itCompanies[0], itCompanies[compMid], itCompanies[itCompanies.length - 1]);

for(let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i]);

for(let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i].toUpperCase());

const sent1 = itCompanies.slice(0, itCompanies.length - 1).toString();
console.log(`${sent1} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

const filtered = [];
itCompanies.forEach((company) => {
    if(!company.match(/o/i)) filtered.push(company);
});
console.log(filtered);

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3));

console.log(itCompanies.slice(compMid - 1, compMid + 2));

console.log(itCompanies.shift());
console.log(itCompanies);

let newMid = Math.floor(itCompanies.length / 2);
console.log(itCompanies.splice(newMid - 1, 2));
console.log(itCompanies);

console.log(itCompanies.splice(0));
console.log(itCompanies);

// Exported both arrays from each of the files using 'module.export = ...'
const countries = require('./Additional Files/countries');
const webTechs = require('./Additional Files/web_techs');
console.log(countries);
console.log(webTechs);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[^a-zA-Z ]/, '').split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); // not really allergic...
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

if(countries.includes('Ethiopia')) console.log("ETHIOPIA");
else countries.push('Ethiopia');

if(webTechs.includes('Sass')) console.log('Sass is a CSS preprocess.');
else {
    webTechs.push('Sass');
    console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log("Ages:", ages);
console.log(`Minimum Age: ${ages[0]}, Maximum Age: ${ages[ages.length - 1]}`);
let mid = Math.floor(ages.length / 2);
let medAge = (ages.length & 1)? ages[mid]: (ages[mid] + ages[mid + 1]) / 2;
console.log(medAge);
let avgAge = 0;
ages.forEach((age) => {
    avgAge += age;
})
avgAge /= ages.length;
console.log(`Average Age: ${avgAge}`);
console.log(`Age range: ${ages[ages.length - 1] - ages[0]}`);
console.log(Math.abs(ages[0] - avgAge) == Math.abs(ages[ages.length - 1] - avgAge));

console.log(countries.slice(0, 10));

let countrMid = Math.floor(countries.length / 2);
let midCountries = (countries.length % 2 == 0)? countries.slice(mid, mid + 2): countries[mid];
console.log(midCountries);


let midPoint = (countries.length & 1)? countrMid: countrMid + 1;
let countries1 = countries.slice(0, midPoint + 1);
let countries2 = countries.slice(midPoint + 1);
console.log(`Countries1: ${countries1}`);
console.log(`Countries2: ${countries2}`);
