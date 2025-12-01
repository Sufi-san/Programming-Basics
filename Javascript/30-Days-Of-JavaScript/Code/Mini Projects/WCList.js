const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas','Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 
    'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 
    'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 
    'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 
    'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 
    'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 
    'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 
    'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 
    'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 
    'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 
    'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 
    'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 
    'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 
    'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 
    'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];

let [startWith, reverseOrder] = [true, false];

const countryCount = document.querySelector('#country-count');
const selectionStatus = document.querySelector('#selection-status');
const startWordBtn = document.querySelector('#start-wrd-btn');
const anyWordBtn = document.querySelector('#any-wrd-btn');
const sortBtn = document.querySelector('#sort-button');
const searchInput = document.querySelector('#country-searchbar');
const mainDisplay = document.querySelector('main');

const updateSearch = function(e) {
    const button = e.target;
    console.log(button.id);

    if(button.id == 'start-wrd-btn') {
        startWith = true;
        anyWordBtn.style.backgroundColor = 'rgb(150, 102, 199)';
    }
    else {
        startWith = false;
        startWordBtn.style.backgroundColor = 'rgb(150, 102, 199)';
    }

    button.style.fontWeight = 'bold';
    button.style.padding = '14px';
    button.style.backgroundColor = 'rgb(86, 22, 146)';

    displayCountryBoxes(countries, searchInput.value);
    setTimeout(() => buttonReset(button), 1000);
}

countryCount.appendChild(document.createTextNode(`Total Number of countries: ${countries.length}`));

startWordBtn.addEventListener('click', updateSearch)
anyWordBtn.addEventListener('click', updateSearch);
sortBtn.addEventListener('click', () => {
    reverseOrder = !reverseOrder;
    const dir = (reverseOrder)? 'up': 'down';
    sortBtn.innerHTML = '';
    sortBtn.setAttribute('class', `fa-solid fa-arrow-${dir}-a-z`);
    displayCountryBoxes(countries, searchInput.value);
})

searchInput.addEventListener('keyup', (e) => {
    displayCountryBoxes(countries, e.target.value);
})

searchInput.addEventListener('focusin', (e) => {
    e.target.setAttribute('placeholder', '');
})

searchInput.addEventListener('focusout', (e) => {
    e.target.setAttribute('placeholder', 'Search Country...');
})

displayCountryBoxes(countries);


function buttonReset(button) {
    button.style.fontWeight = 'normal';
    button.style.padding = '12px';
}

function displayCountryBoxes(countries, searchWord='') {
    const regExp = new RegExp(searchWord, 'gi');
    const matchedCountries = countries.filter(country => {
        if(startWith) return country.toLowerCase().startsWith(searchWord.toLowerCase());
        return country.search(regExp) >= 0;
    });

    if(reverseOrder) matchedCountries.reverse();
    mainDisplay.innerHTML = '';
    matchedCountries.forEach(country => {
        const countryBox = document.createElement('div');
        countryBox.setAttribute('class', 'country-box-div');
        countryBox.appendChild(document.createTextNode(country.toUpperCase()))
        mainDisplay.appendChild(countryBox);
    })

    updateSelectionStatus(searchWord, matchedCountries.length);
}

function updateSelectionStatus(searchWord, count) {
    selectionStatus.innerHTML = '';
    if(!searchWord) return;

    const searchType = (startWith)? 'starting with': 'containing';
    
    const searchWordSpan = document.createElement('span');
    searchWordSpan.appendChild(document.createTextNode(searchWord));
    searchWordSpan.style.color = '#c52a2a';
    searchWordSpan.style.fontStyle = 'italic';
    searchWordSpan.style.fontWeight = 'bold';

    const countSpan = document.createElement('span');
    countSpan.appendChild(document.createTextNode(count));
    countSpan.style.color = 'lightgreen';
    countSpan.style.fontWeight = 'bold';

    selectionStatus.appendChild(document.createTextNode(`Countries ${searchType} `));
    selectionStatus.appendChild(searchWordSpan);
    selectionStatus.appendChild(document.createTextNode(' are '));
    selectionStatus.appendChild(countSpan);
}