const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const emptySet = new Set();
console.log(emptySet);

const set10 = new Set();
for(let i = 0; i < 11; i++) set10.add(i);
console.log(set10);

if(set10.delete(5)) console.log(set10);

set10.clear();
console.log(set10);

const strArrSet = new Set(countries);
console.log(strArrSet);

const countryCounts = new Map();
for(const country of countries) {
    countryCounts.set(country, country.length);
}
console.log(countryCounts);

let c = [...a, ...b];
const unionAB = new Set(c);
console.log(unionAB);

const setB = new Set(b);
c = a.filter(num => setB.has(num));
const intersectAB = new Set(c);
console.log(intersectAB);

c = a.filter(num => !setB.has(num));
const diffAB = new Set(c);
console.log(diffAB);

const countries_data = require('./Additional Files/countries_data');
const langs = new Set();
countries_data.forEach(country => {
    country.languages.forEach(language => langs.add(language));
})
console.log(`Number of languages in countries object file: ${langs.size}`);

function mostSpokenLanguages(countries_data, size) {
    const langCounts = new Map();
    countries_data.forEach(country => {
        country.languages.forEach(language => {
            let count = langCounts.get(language);
            count = (count)? count: 0;
            langCounts.set(language, count + 1);
        })
    });
    const langCountsArr = [];
    for(const [lang, count] of langCounts) {
        let langObj = {};
        langObj[lang] = count;
        langCountsArr.push(langObj);
    }
    langCountsArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);
    return langCountsArr.slice(0, size);
}

console.log(mostSpokenLanguages(countries_data, 10));
console.log(mostSpokenLanguages(countries_data, 3));