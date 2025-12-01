let age = prompt("Enter your age");
let diff = age - 18;
if(diff >= 0) {
    console.log("You are old enough to drive");
}
else {
    console.log(`${-diff} years left before you can start driving.`);
}

let myAge = 22, yourAge = prompt("Enter your age: ");
let diff2 = Math.abs(myAge - yourAge);
let pers1, pers2;
if(myAge < yourAge) {
    pers1 = 'You are';
    pers2 = 'me'; 
}
else {
    pers1 = 'I am';
    pers2 = 'you';
}
console.log(`${pers1} ${diff2} years older than ${pers2}.`);

let a = 4, b = 3;
if(a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}
let out = (a > b)? `${a} is greater than ${b}`: `${a} is less than ${b}`;
console.log(out);

let num = parseInt(prompt("Enter a number:"));
let out2 = (num & 1)? 'odd': 'even';
console.log(`${num} is an ${out2} number`);

let score = Number(prompt("Enter your score:"));
let grade;
if(score <= 49) grade = 'F';
else if(score <= 59) grade = 'D';
else if(score <= 69) grade = 'C';
else if(score <= 89) grade = 'B';
else grade = 'A';
console.log(`Your grade: ${grade}.`);

let month = prompt("Enter month name:").toLowerCase();
let season;
if(month.startsWith('sep') || month.startsWith('oct') || month.startsWith('nov')) season = 'Autumn';
else if(month.startsWith('dec') || month.startsWith('jan') || month.startsWith('feb')) season = 'Winter';
else if(month.startsWith('mar') || month.startsWith('apr') || month.startsWith('may')) season = 'Spring';
else if(month.startsWith('jun') || month.startsWith('jul') || month.startsWith('aug')) season = 'Summer';
else season = 'Not Found';

console.log(`${season} Season`);

let inpDay = prompt("Enter day name:");
let day = inpDay.toLowerCase();
let dayType;
if(day.startsWith('sat') || day.startsWith('sun')) dayType = 'weekend';
else dayType = 'working day';
console.log(`${inpDay} is a ${dayType}.`);

let month2 = prompt("Enter a month");
let days;
switch(month2.toLowerCase()) {
    case 'january':
        days = 31;
        break;
    case 'february':
        days = 28;
        break;
    case 'march':
        days = 31;
        break;
    case 'april':
        days = 30;
        break;
    case 'may':
        days = 31;
        break;
    case 'june':
        days = 30;
        break;
    case 'july':
        days = 31;
        break;
    case 'august':
        days = 31;
        break;
    case 'september':
        days = 30;
        break;
    case 'october':
        days = 31;
        break;
    case 'november':
        days = 30;
        break;
    case 'december':
        days = 31;
        break;
    default:
        days = NaN;
} 
console.log(`${month2} has ${days} days`);

if(month2.toLowerCase() == 'february') days++;
console.log(`${month2} has ${days} days in a leap year.`);
