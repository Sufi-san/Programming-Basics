class Player {
    static id = 0;
    
    constructor(firstName, lastName, countryName, score) {
        this._id = ++Player.id;
        this._firstName = firstName.trim();
        this._lastName = lastName.trim();
        this._countryName = countryName.trim();
        this._score = score;
        this._dateTime = Player.getDateTimeString();
    }

    get id() {
        return this._id;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    get countryName() {
        return this._countryName;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score += value;
    }

    get dateTime() {
        return this._dateTime;
    }

    updateDateTime() {
        this._dateTime = Player.getDateTimeString();
    }

    static getDateTimeString() {
        const dateObj = new Date();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        const month = months[dateObj.getMonth()].toUpperCase();
        const date = dateObj.getDate();
        const year = dateObj.getFullYear();
        let timeString = dateObj.toTimeString();
        const time = timeString.substring(0, timeString.indexOf(' '));

        return `${month} ${date}, ${year} ${time}`;
    }
}

const leaderBoard = document.querySelector('main');
const addPlayerBtn = document.querySelector('#add-btn');
const allInputs = document.querySelectorAll('input');
const instruction = document.querySelector('#instruction');

const playerList = [];
const playerInfoMap = new Map();

playerList.push(new Player('Martha', 'Yohanes', 'Finland', 85));
playerList.push(new Player('David', 'Smith', 'United Kingdom', 80));

addPlayerBtn.addEventListener('click', () => {
    const lastInputInd = allInputs.length - 1;
    if(!allInputsFilled()) {
        instruction.innerText = 'All fields are required';
        instruction.style.marginTop = '24px';
        return;
    }
    if(isNaN(parseInt(allInputs[lastInputInd].value))) {
        instruction.innerText = 'Score must be a valid number';
        instruction.style.marginTop = '24px';
        return;
    }
    instruction.innerText = '';
    instruction.style.marginTop = '0px';

    const playerDetails = [];
    for(let i = 0; i < lastInputInd; i++) playerDetails.push(allInputs[i].value);
    playerDetails.push(parseInt(allInputs[lastInputInd].value));
    const newPlayer = new Player(...playerDetails);

    const newPlayerInfoObj = createPlayerInfo(newPlayer);
    playerInfoMap.set(newPlayer.id, newPlayerInfoObj);
    
    playerList.push(newPlayer);
    placePlayerByScore(newPlayer, playerList.length - 1, 0, -1);
    renderLeaderboard();
})

renderLeaderboard();

function allInputsFilled() {
    let allFilled = true;
    allInputs.forEach(input => {
        if(input.value.trim() == '') {
            allFilled = false;
            return;
        }
    })
    return allFilled;
}

function createPlayerInfo(playerObj) {
    const playerInfo = document.createElement('div');
    playerInfo.setAttribute('class', 'player-info');

    const nameDateDiv = document.createElement('div');

    const nameDiv = document.createElement('div');
    nameDiv.appendChild(document.createTextNode(`${playerObj.fullName.toUpperCase()}`));
    nameDiv.setAttribute('class', 'player-detail-txt');

    const dateTimePara = document.createElement('p');
    dateTimePara.appendChild(document.createTextNode(`${playerObj.dateTime}`));
    dateTimePara.setAttribute('class', 'date-time');

    nameDateDiv.appendChild(nameDiv);
    nameDateDiv.appendChild(dateTimePara);

    const countryDiv = document.createElement('div');
    countryDiv.appendChild(document.createTextNode(`${playerObj.countryName.toUpperCase()}`));
    countryDiv.setAttribute('class', 'player-detail-txt');

    const scoreDiv = document.createElement('div');
    scoreDiv.appendChild(document.createTextNode(`${playerObj.score}`));
    scoreDiv.setAttribute('class', 'player-detail-txt');

    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttons-div');

    const removeBtn = document.createElement('div');
    removeBtn.setAttribute('class', 'del-button');
    const trashIcon = document.createElement('i');
    trashIcon.className = 'far fa-trash-can';
    removeBtn.appendChild(trashIcon);
    removeBtn.addEventListener('click', () => {
        let i = 0;
        while(playerObj.id != playerList[i].id) i++;
        while(i < playerList.length - 1) {
            playerList[i] = playerList[i + 1];
            i++;
        }
        playerList.pop();
        playerInfoMap.delete(playerObj.id);
        playerInfo.remove();
    })

    const scoreUpBtn = document.createElement('div');
    scoreUpBtn.setAttribute('class', 'score-up-button');
    scoreUpBtn.appendChild(document.createTextNode('+5'))
    scoreUpBtn.addEventListener('click', () => {
        changeScoreAndDateInfo(playerObj, scoreDiv, dateTimePara, 5);
        placePlayerByScore(playerObj, playerList.length - 1, 0, -1);
    });

    const scoreDownBtn = document.createElement('div');
    scoreDownBtn.setAttribute('class', 'score-down-button');
    scoreDownBtn.appendChild(document.createTextNode('-5'))
    scoreDownBtn.addEventListener('click', () => {
        changeScoreAndDateInfo(playerObj, scoreDiv, dateTimePara, -5);
        placePlayerByScore(playerObj, 0, playerList.length - 1, 1);
    })

    buttonsDiv.appendChild(removeBtn);
    buttonsDiv.appendChild(scoreUpBtn);
    buttonsDiv.appendChild(scoreDownBtn);

    playerInfo.appendChild(nameDateDiv);
    playerInfo.appendChild(countryDiv);
    playerInfo.appendChild(scoreDiv);
    playerInfo.appendChild(buttonsDiv);
    
    return playerInfo;
}

function changeScoreAndDateInfo(playerObj, scoreDiv, dateTimePara, scoreInc) {
    playerObj.score = scoreInc;
    playerObj.updateDateTime();
    scoreDiv.innerText = playerObj.score;
    dateTimePara.innerText = playerObj.dateTime;
}

function placePlayerByScore(playerObj, start, end, inc) {
    let i = start;
    const checkFunc = (inc > 0)? lessThan: greaterThan;
    while(playerObj.id != playerList[i].id) i += inc;
    while(i != end && checkFunc(playerObj, i, inc)) {
        playerList[i] = playerList[i + inc];
        i += inc;
    }
    playerList[i] = playerObj;
    renderLeaderboard();
}

function lessThan(playerObj, i, inc) {
    return playerObj.score < playerList[i + inc].score;
}

function greaterThan(playerObj, i, inc) {
    return playerObj.score > playerList[i + inc].score;
}

function renderLeaderboard() {
    leaderBoard.innerHTML = '';
    playerList.forEach(playerObj => {
        const playerInfoObj = playerInfoMap.get(playerObj.id);
        if(playerInfoObj) leaderBoard.appendChild(playerInfoObj);
        else {
            const newPlayerInfoObj = createPlayerInfo(playerObj);
            playerInfoMap.set(playerObj.id, newPlayerInfoObj);
            leaderBoard.appendChild(newPlayerInfoObj);
        }
    })
}