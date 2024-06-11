/*

 1. forEach: 
 Can be called a general purpose method of looping over the elments of array in ascending order.
 As it provides an option of accepting indices and the original array in its argument, we can even modify the original array instead of creating copies.

 2. map:
 Main purpose is to change or modify the array elements by looping over them. It is an immutable function and does not modify the original array, returns a copy instead.

 3. filter:
 Main purpose is to filter out elements from the array if they do not meet a set criteria. It is also immutable and returns a copy of result instead of modifying original array.

 4. reduce:
 Effective for cases when we want to maintain a result while traversing the array (sum, product or maximum of array elements). This is also an immutable function.

 Callback Function:
 A callback function is any function that is passed as an argument to another function.
*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((country) => console.log(country));

names.forEach((name) => console.log(name));

numbers.forEach(number => console.log(number));

const upCountries = countries.map(country => country.toUpperCase());
console.log(upCountries);

const lenCountries = countries.map(country => country.length);
console.log(lenCountries);

const sqNumbers = numbers.map(number => number ** 2);
console.log(sqNumbers);

const upNames = names.map(name => name.toUpperCase());
console.log(upNames);

const prodPrices = products.map(product => product.price);
console.log(prodPrices);

const noLandCountries = countries.filter(country => !country.match(/land/i));
console.log(noLandCountries);

const no6Countries = countries.filter(country => country.length != 6);
console.log(no6Countries);

const lessThan6Countries = countries.filter(country => country.length < 6);
console.log(lessThan6Countries);

const noInitE_Countries = countries.filter(country => country[0] != 'E');
console.log(noInitE_Countries);

const onlyValPrices = prodPrices.filter(price => typeof price == 'number');
console.log(onlyValPrices);

function getStringLists(arr) {
    return arr.filter(item => typeof item == 'string');
}

const onlyStrArr = getStringLists([1, '2', 2, '3', '4', 3, 5, 8, '9']);
console.log(onlyStrArr);

let sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);

let countrySent = countries.reduce((acc, curr) => {
    if(curr != countries[countries.length - 1]) return acc.concat(` ${curr}`).concat(', ');
    else return acc.concat(` and ${curr} are north European countries`);
}, "Estonia,");
console.log(countrySent);

/*
    'some' checks for the presence of at least a single element that matches a criteria.

    'every' makes sure that all array elements match the required criteria.
*/
console.log(`Some name lengths greater than 7: ${names.some((name) => name.length > 7)}`);

console.log(`All countries contain 'land'?: ${countries.every((country) => country.match(/land/i))}`);

/*
    When a match for set criteria is found for the required word in the array,
    
    i) 'find' returns the first word itself.

    ii) 'findIndex' returns index of that first word.
*/

console.log(`First country containing only 6 letters: ${countries.find(country => country.length == 6)}`);

console.log(`Position of first country that contains 6 letters: ${countries.findIndex(country => country.length == 6)}`);

console.log(`Norway's index: ${countries.findIndex(country => country == 'Norway')}`);

console.log(`Russia's index: ${countries.findIndex(country => country == 'Russia')}`);

let totalPrice = products.map((product) => product.price).filter((price) => typeof price == 'number').reduce((acc, curr) => acc + curr);
console.log(`Total price using chained iterator: ${totalPrice}`);

let totalPrice2 = products.reduce((acc, curr) => {
    acc.push(curr.price);
    return acc;
}, []).reduce((acc, curr) => (typeof curr == 'number')? (acc + curr): acc, 0);
console.log(`Total price using two reduce: ${totalPrice2}`);

const countries2 = require('./Additional Files/countries2');
const countries_data = require('./Additional Files/countries_data');

function categorizeCountries(lookUpStr) {
    return countries2.filter(country => country.toLowerCase().includes(lookUpStr.toLowerCase()));
}

console.log(categorizeCountries('land'));
console.log(categorizeCountries('ia'));
console.log(categorizeCountries('Island'));
console.log(categorizeCountries('stan'));

function letterCounts() {
    let result = [];
    let code = 'A'.charCodeAt(0);
    for(let i = code; i < code + 26; i++) {
        let alpha = String.fromCharCode(i);
        result.push(
            {letter: alpha, 
             count: 
             countries2.reduce((count, country) => (country.startsWith(alpha))? count + 1: count
        , 0)});
    }
    return result;
}

console.log(letterCounts());

function getFirstTenCountries() {
    return countries2.reduce((arr, country) => {
        if(arr.length < 10) arr.push(country);
        return arr;
    }, []);
}

console.log(getFirstTenCountries());

function getLastTenCountries() {
    return countries2.filter(country => countries2.indexOf(country) > countries2.length - 11);
}
console.log(getLastTenCountries());

const letCounts = letterCounts();
let maxLetter = letCounts[0].letter, maxCount = 1;
letCounts.forEach((obj) => {
    if(maxCount < obj.count) {
        maxCount = obj.count;
        maxLetter = obj.letter;
    }
});
console.log(`Letter used the most as Initial: ${maxLetter}, Times Used: ${maxCount}`);

let nameSortCountries = countries_data.slice().sort((a, b) => {
    if(a.name < b.name) return -1;
    else if(a.name > b.name) return +1;
    else return 0;
});
for(country of nameSortCountries) {
    console.log(country.name);
}

let capitalSortCountries = countries_data.slice().sort((a, b) => {
    if(a.capital < b.capital) return -1;
    else if(a.capital > b.capital) return +1;
    else return 0;
})
for(country of capitalSortCountries) {
    console.log(`${country.capital}, ${country.name}`);
}

let popuSortCountries = countries_data.slice().sort((a, b) => {
    return a.population - b.population;
})
for(country of popuSortCountries) {
    console.log(`${country.population}, ${country.name}`);
}

function mostSpokenLanguages(countries, countryCount) {
    let langCounts = {};
    countries.forEach((country) => {
        country.languages.forEach((language) => {
            langCounts[language] = (langCounts[language])? langCounts[language] + 1: 1;
        });
    })
    let langCountArr = Object.entries(langCounts).map((entry) => {
        return {language: entry[0], count: entry[1]};
    });
    langCountArr.sort((a, b) => {
        return b.count - a.count;
    })
    return langCountArr.slice(0, countryCount);
}

console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));

function mostPopulatedCountries(countries, countryCount) {
    let countryPopuls = [];
    countries.forEach((country) => {
        countryPopuls.push({country: country.name, population: country.population});
    });
    countryPopuls.sort((a, b) => b.population - a.population);
    return countryPopuls.slice(0, countryCount);
}

console.log(mostPopulatedCountries(countries_data, 10));
console.log(mostPopulatedCountries(countries_data, 3));

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = {
    count: arr => arr.length,
    sum: arr => arr.reduce((sum, num) => sum + num),
    min: arr => arr.reduce((min, num) => Math.min(min, num)),
    max: arr => arr.reduce((max, num) => Math.max(max, num)),
    range: function(arr) {return this.max(arr) - this.min(arr)},
    mean: function(arr) {return Math.round(this.sum(arr) / this.count(arr) * 100) / 100 },
    median: function(arr) {
        const arrC = arr.slice().sort();
        let median, mid = arrC.length / 2;
        if(arrC.length & 1) median = arrC[Math.floor(mid)];
        else median = (arrC[Math.floor(mid)] + arrC[Math.ceil(mid)]) / 2;
        return median;
    },
    mode: function(arr) {
        const numCounts = {};
        arr.forEach(num => {
            (numCounts[num])? numCounts[num]++: numCounts[num] = 1;
        });
        let num = arr[0], count = 1;
        for(numX of Object.keys(numCounts)) {
            if(numCounts[num] < numCounts[numX]) {
                num = numX;
                count = numCounts[numX];
            }
        }
        return `(${num}, ${count})`;
    },
    var: function(arr) {
        const mean = this.mean(arr);
        let varSum = arr.reduce((sum, num) => {
            let curr = num - mean;
            return Math.pow(curr, 2) + sum;
        }, 0);
        return Math.round(varSum / this.count(arr) * 100) / 100;
    },
    std: function(arr) {return Math.round(Math.sqrt(this.var(arr)) * 100) / 100},
    freqDist: function(arr) {
        const freqObj = {};
        arr.forEach(num => {
            (freqObj[num])? freqObj[num]++: freqObj[num] = 1;
        })
        const freqArr = [], multi = 100 / this.count(arr);
        for(num of Object.keys(freqObj)) {
            freqArr.push(`(${freqObj[num] * multi}, ${num})`);
        }
        return freqArr;
    },
    describe: function(arr) {
        console.log('Count:', this.count(arr)) 
        console.log('Sum: ', this.sum(arr)) 
        console.log('Min: ', this.min(arr)) 
        console.log('Max: ', this.max(arr))
        console.log('Range: ', this.range(arr))
        console.log('Mean: ', this.mean(arr)) 
        console.log('Median: ',this.median(arr)) 
        console.log('Mode: ', this.mode(arr)) 
        console.log('Variance: ',this.var(arr)) 
        console.log('Standard Deviation: ', this.std(arr))
        console.log('Frequency Distribution: ',this.freqDist(arr))
    },
}

statistics.describe(ages);
