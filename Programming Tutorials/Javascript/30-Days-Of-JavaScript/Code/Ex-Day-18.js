const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function printData() {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    for(country of data) {
        console.log("\nName:", country.name);
        console.log("Capital:",country.capital);
        console.log("Languages:", country.languages);
        console.log("Population:", country.population);
        console.log("Area:", country.area);
    }
}
printData();

function getCatNameString(catData) {
    let names = [];
    for(cat of catData) names.push(`'${cat.name}'`);
    return names.join(' ');
}

function getAverageWeights(catData) {
    let totalAvgWeightSum = 0, catCount = 0;
    catData.forEach((cat) => {
        catCount++;
        let metricWeights = cat.weight.metric.match(/\d+/g);
        let avgWeight = (+metricWeights[0] + +metricWeights[1]) / 2;
        totalAvgWeightSum += avgWeight;
        console.log(`Average Weight for ${cat.name}: ${avgWeight}`);
    })
    return Math.round(totalAvgWeightSum / catCount * 100) / 100;
}

function displayTenLargestCountries(countryData) {
    const countries = [];
    for(country of countryData) {
        let countryObj = {name: country.name, area: country.area};
        countries.push(countryObj);
    }
    countries.sort((a, b) => {
        if(!a.area) return 1;
        if(!b.area) return -1;
        return b.area - a.area;
    });
    console.log(countries);
    console.log("Ten Largest Countries by Area: (Decreasing Order)")
    for(let i = 0; i < 10; i++) {
        console.log(countries[i].name);
    }
}

function displayAllOfficialLanguages(countryData) {
    const allLangs = new Set();
    countryData.forEach((country) => {
        let languages = country.languages;
        languages.forEach(language => allLangs.add(language.name));
    })
    console.log("Total Number of Official Languages in the World:",allLangs.size);
    console.log('Languages:',allLangs);
}

fetch(catsAPI).then(response => response.json()).then(data => {
    let catNames = getCatNameString(data);
    console.log(catNames);
    console.log(`\nTotal Average Weight: ${getAverageWeights(data)}`);
}).catch(error => console.error(error));

fetch(countriesAPI).then(response => response.json()).then(data => {
    displayTenLargestCountries(data);
    displayAllOfficialLanguages(data);
}).catch(error => {console.error(error)});
