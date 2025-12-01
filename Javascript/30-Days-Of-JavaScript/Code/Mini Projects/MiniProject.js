const iconScript = document.createElement('script');
document.head.appendChild(iconScript);
iconScript.setAttribute('src', "https://kit.fontawesome.com/8bf040821d.js")
iconScript.setAttribute('crossorigin', 'anonymous')

const bodyStyle = document.body.style;
bodyStyle.display = 'flex';
bodyStyle.justifyContent = 'center';
bodyStyle.paddingBottom = '60px';

const container = document.querySelector('.wrapper');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.width = '900px';

const h1 = container.querySelector('h1');
const h2 = container.querySelector('h2');
const list = container.querySelector('ul');
const dateTimeDiv = getDateTimeDiv();
insertDateTimeDiv();

const colorPalette = [
    "#8578ff", "#9389db", "#d0c3c4", "#e0d0b6", "#f0dede", "#808080", "#696969", "#404040", "#800000", "#008000", "#404000", "#606000", "#298509", "#920f23", "#f20f29", "#f9a989", "#ad29f2", "#ffff08", "#a0fff9"];
  

import('../Additional Files/MiniProjData.js')
.then(response => response[Object.keys(response)[0]])
.then(data => {
    prepareMainHeading(data);
    prepareSubHeading(data.challengeSubtitle);
    prepareDateTime();
    prepareList(data.challenges);
    attachAuthInfo(data.author);
    attachKeywords(data.keywords);
    setInterval(() => pageUpdate(), 1000);
})
.catch(error => console.log(error));

function getDateTimeDiv() {
    const dateTimeWrapper = document.createElement('div');
    dateTimeWrapper.id = 'date-time-wrapper';

    const dateTime = document.createElement('div');
    dateTime.id = 'date-time';

    dateTime.appendChild(document.createTextNode(getDateTimeText()));
    dateTimeWrapper.appendChild(dateTime);
    return dateTimeWrapper;
}

function getDateTimeText() {
    const dateObj = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[dateObj.getMonth()];
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    let timeString = dateObj.toTimeString();
    const time = timeString.substring(0, timeString.indexOf(' '));

    return `${month} ${date}, ${year} ${time}`;
}

function insertDateTimeDiv() {
    list.remove();
    container.appendChild(dateTimeDiv);
    container.appendChild(list);
}

function prepareMainHeading(data) {
    h1.innerHTML = '';
    h1.style.fontFamily = 'Arial';
    h1.appendChild(document.createTextNode(`${data.description}`))

    const yearSpan = document.createElement('span');
    yearSpan.id = 'year-span';
    yearSpan.style.fontSize = '88px';
    yearSpan.style.fontFamily = 'sans-serif';
    yearSpan.style.color = '#8578ff';
    yearSpan.appendChild(document.createTextNode(`${data.challengeYear}`));

    h1.appendChild(yearSpan);
}

function prepareSubHeading(subtitle) {
    h2.innerHTML = '';
    h2.appendChild(document.createTextNode(`${subtitle}`));
    h2.style.fontFamily = 'Arial';
    h2.style.textDecoration = 'underline';
    h2.style.textAlign = 'center';
    h2.style.fontSize = '22px';
    h2.style.fontWeight = '500';
    h2.style.color = '#212121'
    h2.style.marginBottom = '0px';
}

function prepareDateTime() {
    const dateTime = container.querySelector('#date-time');
    dateTime.style.textAlign = 'center';
    dateTime.style.backgroundColor = 'green';
    dateTime.style.paddingTop = '10px';
    dateTime.style.paddingBottom = '10px';
    dateTime.style.paddingLeft = '20px';
    dateTime.style.paddingRight = '20px';
    dateTime.style.display = 'block';
    dateTime.style.marginTop = '18px';
    dateTime.style.display = 'inline';

    dateTimeDiv.style.display = 'flex';
    dateTimeDiv.style.flexDirection = 'column';
    dateTimeDiv.style.alignItems = 'center';
}

function prepareList(challenges) {
    list.innerHTML = '';
    list.style.width = '100%';
    list.style.paddingLeft = '0px';
    challenges.forEach(challenge => {
        list.appendChild(prepareListItem(challenge));
    })
}

function prepareListItem(challenge) {
    const type = challenge.status;
    const challengeItem = document.createElement('li');

    const textDiv = document.createElement('div');
    textDiv.appendChild(document.createTextNode(challenge.name));

    const details = document.createElement('details');

    const summary = document.createElement('summary');
    const ind = challenge.name.indexOf('Of');
    const listName = challenge.name.substring(ind + 3);
    summary.appendChild(document.createTextNode(listName));
    summary.style.paddingBottom = '10px';

    const topicsList = document.createElement('ul');
    challenge.topics.forEach(topic => {
        topicItem = document.createElement('li');
        topicItem.appendChild(document.createTextNode(topic));
        topicItem.style.paddingBottom = '3px';
        topicsList.appendChild(topicItem);
    })
    topicsList.style.listStyleType = 'none'; 
    topicsList.style.paddingLeft = '0px';

    details.appendChild(summary);
    details.appendChild(topicsList);
    details.style.display = 'inline';

    const statusDiv = document.createElement('div');
    statusDiv.appendChild(document.createTextNode(type));

    challengeItem.appendChild(textDiv);
    challengeItem.appendChild(details);
    challengeItem.appendChild(statusDiv);

    let bgColor = 'tomato';
    let textDecor = 'none';
    let color = 'black';
    if(type == 'Done' || type == 'Ongoing') {
        color = 'darkblue';
        textDecor = 'underline';
        bgColor = (type == 'Done')? '#07da63': 'yellow';
    }

    textDiv.style.color = color;
    textDiv.style.textDecoration = textDecor;

    challengeItem.style.backgroundColor = bgColor;
    challengeItem.style.padding = '24px';
    challengeItem.style.fontSize = '18px';
    challengeItem.style.fontFamily = 'Arial';
    challengeItem.style.listStyle = 'none';
    challengeItem.style.marginBottom = '4px';
    challengeItem.style.display = 'grid';
    challengeItem.style.gridTemplateColumns = '1fr 1fr .1fr';
    challengeItem.style.alignItems = 'center';
    
    return challengeItem;
}

function attachAuthInfo(author) {
    const nameHeading = document.createElement('h1');
    nameHeading.appendChild(document.createTextNode(`${author.firstName} ${author.lastName}`));

    nameHeading.style.fontFamily = 'Arial';
    nameHeading.style.marginTop = '0px';
    nameHeading.style.marginBottom = '7px';

    const iconsDiv = document.createElement('div');
    iconsDiv.style.display = 'flex';
    iconsDiv.style.justifyContent = 'center';
    iconsDiv.style.marginBottom = '20px';
    author.socialLinks.forEach(socialLink => {
        if(socialLink.fontawesomeIcon == '') return;

        const link = document.createElement('a');
        link.innerHTML = socialLink.fontawesomeIcon;

        link.setAttribute('href', `${socialLink.url}`);
        link.setAttribute('target', '_blank');

        link.style.color = '#111111';
        link.style.fontSize = '35px';
        link.style.marginRight = '10px';

        iconsDiv.appendChild(link);
    })

    const authBio = document.createElement('p');
    authBio.appendChild(document.createTextNode(author.bio));

    authBio.style.textAlign = 'center';
    authBio.style.fontSize = '18px';
    authBio.style.fontFamily = 'Sans-serif';
    authBio.style.marginBottom = '60px';
    authBio.style.paddingLeft = '10px';
    authBio.style.paddingRight = '20px';

    const moreInfoDiv = document.createElement('div');
    moreInfoDiv.style.display = 'flex';
    moreInfoDiv.style.width = '100%';
    moreInfoDiv.style.justifyContent = 'space-between';

    const titlesDiv = document.createElement('div');
    prepareListDiv(author, 'titles', titlesDiv, 'Titles');
    
    const skillsDiv = document.createElement('div');
    const skillIcons = [];
    for(let i = 0; i < 6; i++) skillIcons.push('✅');
    prepareListDiv(author, 'skills', skillsDiv, 'Skills', skillIcons);

    const qualDiv = document.createElement('div');
    const qualIcons = ['📖'];
    for(let i = 0; i < 3; i++) qualIcons.push('👨🏼‍🎓');
    prepareListDiv(author, 'qualifications', qualDiv, 'Qualifications', qualIcons);

    moreInfoDiv.appendChild(titlesDiv);
    moreInfoDiv.appendChild(skillsDiv);
    moreInfoDiv.appendChild(qualDiv);

    container.appendChild(nameHeading);
    container.appendChild(iconsDiv);
    container.appendChild(authBio);
    container.appendChild(moreInfoDiv);
}

function prepareListDiv(author, key, listDiv, headingText, icons) {
    const heading = document.createElement('h2');
    const list = document.createElement('ul');

    heading.appendChild(document.createTextNode(headingText));
    heading.style.fontFamily = 'Helvetica';
    heading.style.marginBottom = '8px';

    let ind = 0;
    author[key].forEach(prop => {
        if(!Array.isArray(prop)) {
            prop = [icons[ind], prop];
            ind++;
        }

        const listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(prop.join(' ')));

        listItem.style.listStyleType = 'none';
        listItem.style.fontSize = '18px';
        listItem.style.marginBottom = '5px';

        list.appendChild(listItem);
    })
    list.style.paddingLeft = '0px';
    list.style.marginTop = '0px';

    listDiv.appendChild(heading);
    listDiv.appendChild(list);
}

function attachKeywords(keywords) {
    const title = document.createElement('p');
    title.appendChild(document.createTextNode('Keywords'));

    title.style.textAlign = 'left';
    title.style.paddingLeft = '50px';
    title.style.fontFamily = 'Helvetica';
    title.style.fontSize = '25px';
    title.style.fontWeight = 'bold';
    title.style.width = '100%';
    title.style.marginBottom = '10px';

    const keywordsDiv = document.createElement('div');
    keywordsDiv.style.display = 'flex';
    keywordsDiv.style.flexDirection = 'column';
    keywordsDiv.style.width = '100%';
    keywordsDiv.style.paddingLeft = '100px';
    
    const rowCaps = [8, 5, 7, 6, 6];
    let keywordsInd = 0;
    rowCaps.forEach(count => {
        const divRow = document.createElement('div');
        divRow.style.display = 'flex';
        divRow.style.justifyContent = 'space-between';
        divRow.style.marginBottom = '5px';
        divRow.style.maxWidth = '90%';
        divRow.style.minWidth = '86%';
        while(count > 0) {
            const text = `${keywords[keywordsInd]}`;
            if(text.endsWith('Storage')) {
                keywordsInd++;
                continue;
            }
            const keywordDiv = document.createElement('div');
            keywordDiv.appendChild(document.createTextNode(`# ${text}`));

            keywordDiv.style.backgroundColor = getRandomColor();
            keywordDiv.style.borderRadius = '1em';
            keywordDiv.style.fontFamily = 'sans-serif';
            keywordDiv.style.fontSize = '14px';
            keywordDiv.style.fontWeight = 'bold';
            keywordDiv.style.fontStyle = 'italic';
            keywordDiv.style.padding = '5px';
            keywordDiv.style.paddingRight = '20px';

            keywordsInd++;
            count--;
            divRow.appendChild(keywordDiv);
        }
        keywordsDiv.appendChild(divRow);
    });
    
    container.appendChild(title);
    container.appendChild(keywordsDiv);
}

function pageUpdate() {
    updateYearColor();
    updateDateTime();
}

function updateYearColor() {
    const year = container.querySelector('#year-span');
    year.style.color = getRandomColor();
}

function updateDateTime() {
    const dateTime = dateTimeDiv.firstElementChild;
    dateTime.style.backgroundColor = getRandomColor();
    dateTime.textContent = getDateTimeText();
}

function getRandomColor() {
    const num = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[num];
}
    