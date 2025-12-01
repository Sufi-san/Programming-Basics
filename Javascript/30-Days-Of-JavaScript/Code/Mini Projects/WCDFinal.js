const fetchURL = 'https://restcountries.com/v2/all';

const countryCountTxt = document.querySelector('#country-count-txt');
const matchedCountriesTxt = document.querySelector('#matched-countries-txt');

const searchOptsDiv = document.querySelector('#search-options');
const searchbar = document.querySelector('#search-bar');
const sortBtnsDiv = document.querySelector('#sort-buttons-div');
const countryBoxDisp = document.querySelector('#country-boxes-div');

const visualDisp = document.querySelector('#visualisation-div');
const choiceBtnsDiv = document.querySelector('#choice-buttons-div');
const visualInfo = document.querySelector('#visual-info');

searchbar.value = '';
searchbar.addEventListener('focus', e => {
    e.target.placeholder = '';
    e.target.style.color = 'orange';
});

searchbar.addEventListener('blur', e => {
    e.target.placeholder = 'Search countries by name, city and languages';
    if(e.target.value == '') e.target.style.color = '#616161';
});

searchbar.addEventListener('input', e => {
    if(e.target.value.length > 0) {
        e.target.value = e.target.value.toUpperCase();
    }
});

fetch(fetchURL)
.then(response => response.json())
.then(countries => {
    const flagMap = getFlagImageMap(countries);
    const worldPopulation = countries.reduce((total, curr) => {return total + curr.population}, 0);

    let activeBtnID = sortBtnsDiv.firstElementChild.id;
    let descSort = false;
    let visByPopulation = true;

    countryCountTxt.appendChild(document.createTextNode(`Currently, we have ${countries.length} countries`));
    fillCountryBoxDisplay(countries, flagMap);
    fillVisualByPopul(countries, worldPopulation);

    let filteredCountries = [...countries];
    searchbar.addEventListener('input', e => {
        const inputVal = e.target.value.trim();
        const emptyInput = inputVal.length == 0;

        filteredCountries = countries.filter(country => {
            const regExp = new RegExp(inputVal, 'i');

            let a = normalized(country.name).match(regExp);
            let b = country.capital != null && normalized(country.capital).match(regExp);
            let c = false;
            country.languages.forEach(language => {
                if(normalized(language.name).match(regExp)) {
                    c = true;
                    return;
                }
            });

            if(a || b || c) return country;
        });

        sortFiltered();
        fillCountryBoxDisplay(filteredCountries, flagMap);
        updateMatchedCount(emptyInput);
        updateVisual(emptyInput);
    });

    sortBtnsDiv.addEventListener('click', e => {
        const targ = e.target;
        if(targ.tagName != 'BUTTON') return;

        const icon = targ.querySelector('i');
        const classList = icon.classList;
        const classA = 'fa-up-long', classB = 'fa-down-long';

        if(targ.id == activeBtnID) {
            descSort = !descSort;
            if(!descSort) classList.replace(classA, classB);
            else classList.replace(classB, classA);
        }
        else {
            descSort = false;
            icon.style.opacity = 1;
            sortBtnsDiv.querySelector(`#${activeBtnID}`).querySelector('i').style.opacity = 0;
            
            if(classList.contains(classA)) classList.replace(classA, classB);
            activeBtnID = targ.id;
        }

        sortFiltered();
        fillCountryBoxDisplay(filteredCountries, flagMap);
    });

    choiceBtnsDiv.addEventListener('click', e => {
        const targ = e.target;
        if(targ.tagName != 'BUTTON') return;

        visByPopulation = (targ.id == 'vis-popul-btn');
        updateVisual(searchbar.value.trim().length == 0);
    });

    function sortFiltered() {
        let property = 'name';
        if(activeBtnID == 'capital-btn') property = 'capital';
        if(activeBtnID == 'popul-btn') property = 'population';

        filteredCountries.sort((countryA, countryB) => {
            const prop1 = normalized(countryA[property]);
            const prop2 = normalized(countryB[property]);

            if(prop1 == null) return 1;
            if(prop2 == null) return -1;

            const returnVal = (descSort)? [-1, 1]: [1, -1];
            return prop1 > prop2? returnVal[0]: returnVal[1];
        });
    }

    function updateMatchedCount(inpEmpty) {
        if(inpEmpty) {
            matchedCountriesTxt.innerText = '';
            return;
        }
        matchedCountriesTxt.innerText = `${filteredCountries.length} countries satisfied the search criteria.`
    }

    function updateVisual(emptyInput) {
        if(emptyInput) {
            const infoText = (visByPopulation)? 'populated countries': 'spoken languages'
            visualInfo.innerText = `10 most ${infoText} in the world`;
        }
        else {
            const infoWord = (visByPopulation)? 'Population': 'Languages';
            visualInfo.innerText = `World ${infoWord}`;
        }
        
        if(visByPopulation) fillVisualByPopul(filteredCountries, worldPopulation);
        else fillVisualByLang(filteredCountries);
    }

})
.catch(e => console.log(e));

function getFlagImageMap(countries) {
    const flagMap = new Map();
    countries.forEach(country => {
        const countryFlagImg = document.createElement('img');
        countryFlagImg.setAttribute('src', country.flags.svg);
        countryFlagImg.style.width = '100px';
        countryFlagImg.style.height = '50px';
        flagMap.set(country.name, countryFlagImg);
    });
    return flagMap;
}

function fillCountryBoxDisplay(countries, flagMap) {
    countryBoxDisp.innerHTML = '';
    let countryBoxRow = document.createElement('div');
    countryBoxRow.setAttribute('class', 'country-box-row');

    for(let i = 0; i < countries.length; i++) {
        const countryFlagImg = flagMap.get(countries[i].name);
        countryBoxRow.appendChild(getCountryBoxDOM(countries[i], countryFlagImg));

        if((i > 0 && (i + 1) % 7 == 0) || i == countries.length - 1) {
            countryBoxRow.style.columnGap = `${(7 - i % 7) * 10}px`;
            countryBoxDisp.appendChild(countryBoxRow);
            countryBoxRow = document.createElement('div');
            countryBoxRow.setAttribute('class', 'country-box-row');
        }
    }
}

function getCountryBoxDOM(country, flagImg) {
    const countryBox = document.createElement('div');
    countryBox.setAttribute('class', 'country-box');

    const countryName = document.createElement('p');
    countryName.innerText = country.name.toUpperCase();
    countryName.setAttribute('class', 'country-name');

    const countryDetails = document.createElement('div');
    countryDetails.setAttribute('class', 'country-details-div');
    
    const capitalName = document.createElement('p');
    capitalName.innerText = `Capital: ${country.capital?? 'None'}`;

    const langNames = document.createElement('p');
    const languages = [];
    country.languages.forEach(language => languages.push(language.name));
    langNames.innerText = `Languages: ${languages.join(', ')}`;
    
    const population = document.createElement('p');
    population.innerText = `Population: ${country.population?? 0}`;

    countryDetails.appendChild(capitalName);
    countryDetails.appendChild(langNames);

    countryDetails.appendChild(population);
    countryBox.appendChild(flagImg);
    countryBox.appendChild(countryName);
    countryBox.appendChild(countryDetails);

    return countryBox;
}

function fillVisualByPopul(countries, worldPopulation) {
    visualDisp.innerHTML = '';

    const copyCountries = [...countries];
    copyCountries.sort((a, b) => {
        const popul1 = a.population;
        const popul2 = b.population;
        return popul2 - popul1;
    })

    visualDisp.appendChild(getVisualRow('World', worldPopulation, worldPopulation));

    for(let i = 0; i < 10; i++) {
        const country = copyCountries[i];
        const visualRow = getVisualRow(country.name, country.population, worldPopulation);
        visualDisp.appendChild(visualRow);
    }
}

function fillVisualByLang(countries) {
    visualDisp.innerHTML = '';

    const langCountMap = new Map();
    const allLangNames = [];
    countries.forEach(country => {
        const languages = country.languages;
        languages.forEach(language => {
            const langName = language.name;
            const langCount = langCountMap.get(langName)?? 0;
            if(langCount == 0) allLangNames.push(langName);
            langCountMap.set(langName, langCount + 1);
        })
    })

    allLangNames.sort((a, b) => langCountMap.get(b) - langCountMap.get(a));
    const maxLangCount = langCountMap.get(allLangNames[0]);

    for(let i = 0; i < Math.min(10, allLangNames.length); i++) {
        const langName = allLangNames[i];
        const visualRow = getVisualRow(langName, langCountMap.get(langName), maxLangCount);
        visualDisp.appendChild(visualRow);
    }
}

function getVisualRow(name, value, maxValue) {
    const visualRow = document.createElement('div');
    visualRow.setAttribute('class', 'country-visual-row');

    const namePara = document.createElement('p');
    namePara.appendChild(document.createTextNode(name));

    const visBarContainer = document.createElement('div');
    const visualBar = document.createElement('div');

    visualBar.setAttribute('class', 'country-visual-bar');
    visualBar.style.width = `${(value / maxValue * 100).toFixed(2)}%`;

    visBarContainer.appendChild(visualBar);

    const valPara = document.createElement('p');
    valPara.appendChild(document.createTextNode(value));
    valPara.style.marginLeft = '5px';

    visualRow.appendChild(namePara);
    visualRow.appendChild(visBarContainer);
    visualRow.appendChild(valPara);

    return visualRow;
}

function normalized(inp) {
    if(inp == null || typeof inp != 'string') return inp;
    return inp.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}