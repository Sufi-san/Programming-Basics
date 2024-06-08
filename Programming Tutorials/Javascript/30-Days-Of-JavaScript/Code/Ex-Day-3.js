const firstName = "Sufiyan", lastName = "Chougule", country = "India", city = "Thane", age = 22, isMarried = false, year = 2002;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' == typeof 10);

console.log(parseInt('9.8') == 10);

console.log('a' == 'a');
console.log(typeof Number('10') == typeof 10);
console.log(Math.round('9.8') == 10);

console.log('a' > 'a');
console.log(45 == 88);
console.log(88 < 45);

console.log(true, 4 > 3)
console.log(true, 4 >= 3);
console.log(false, 4 < 3);
console.log(false, 4 <= 3);
console.log(true, 4 == 4);
console.log(false, 4 != 4);
console.log(false, 4 !== 4);
console.log(false, 4 != '4');
console.log(true, 4 == '4');
console.log(false, 4 === '4');
console.log(true, 4 !== '4'); // Bonus

console.log('python'.length > 'jargon'.length);

console.log(true, 4 > 3 && 10 < 12);
console.log(false, 4 > 3 && 10 > 12);
console.log(true, 4 > 3 || 10 < 12);
console.log(true, 4 > 3 || 10 > 12);
console.log(false, !(4 > 3));
console.log(true, !(4 < 3));
console.log(true, !(false));
console.log(false, !(4 > 3 && 10 < 12));
console.log(true, !(4 > 3 && 10 > 12));
console.log(true, !(4 === '4'));
console.log(false, !('python'.includes('on') && 'dragon'.includes('on')));

const dateObj = new Date();
console.log(dateObj.getFullYear());
console.log(dateObj.getMonth() + 1);
console.log(dateObj.getDate());
console.log(dateObj.getDay() + 1);
console.log(dateObj.getHours());
console.log(dateObj.getMinutes());
console.log(parseInt(dateObj.getTime() / 1000));

let base = prompt("Enter base length: ");
let h = prompt("Enter height: ");
console.log("Area of triangle:",0.5 * base * h);

let perimeter = 0;
perimeter += Number(prompt("Enter side a:"));
perimeter += Number(prompt("Enter side b:"));
perimeter += Number(prompt("Enter side c:"));
console.log("Perimeter of triangle:", perimeter);

const PI = Math.PI;
let area = PI * Number(prompt("Enter radius:")) ** 2;
console.log("Area of Circle:", area);

// Eq: y = 2x - 2
let x_int = (0 + 2) / 2;
let y_int = 2 * 0 - 2;
console.log(`x-int: ${x_int}, y-int: ${y_int}, Slope: ${-2 / -1}`);

// x1, y1 = (2, 2), x2, y2 = (6, 10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log("Slope:",slope);

console.log((-2 / -1) == slope);

// Eg: y = pow(x, 2) + 6 * x + 9
// To find 'x' values given 'y' is zero:
let a = 1, b = 6, c = 9;
let xA = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
let xB = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
console.log(`x1 = ${xA}, x2 = ${xB}`);

let hours = prompt("Enter hours:");
let rate = prompt("Enter rate per hour");
console.log(`Earning ${hours * rate}`);

let out = '';
('Sufiyan'.length > 7)? out = "My Name is Long": out = "My name is Short";
console.log(out);

let result = firstName.length > lastName.length;
let largeName = (result)? 'first name': 'family name';
let theName = (result)? firstName: lastName;
let smallName = (result)? 'family name': 'first name';
let theName2 = (theName == lastName)? firstName: lastName;
console.log(`Your ${largeName}, ${theName} is longer than your ${smallName}, ${theName2}`);

let myAge = 23, yourAge = 30;
let state = (myAge < yourAge)? 'younger': 'older';
console.log(`I am ${Math.abs(myAge - yourAge)} years ${state} than you.`);

let userAge = prompt("Enter your age");
let ageGap = 18 - Number(userAge);
let instruct = (ageGap <= 0)? "You are old enough to drive": `You will be allowed to drive after ${ageGap} years.`;
console.log(`You are ${userAge}. ${instruct}`);

let currAge = prompt("Enter the number of years you have lived:");
console.log(`You have lived for about ${currAge * 365 * 24 * 60 * 60} seconds`);

let YY = dateObj.getFullYear();
let MM = dateObj.getMonth() + 1;
let DD = dateObj.getDate();
let HH = dateObj.getHours();
let mm = dateObj.getMinutes();
let format1 = `${YY}-${MM}-${DD} ${HH}:${mm}`;
let format2 = `${DD}-${MM}-${YY} ${HH}:${mm}`;
let format3 = `${DD}/${MM}/${YY} ${HH}:${mm}`;
console.log(format1,"\n",format2,"\n",format3);

function numLen(num) {
    return parseInt(Math.log(num)/Math.log(10)) + 1;
}
HH = '7', mm = '5';
HH = (numLen(HH) < 2)? '0'.concat(HH): HH;
mm = (numLen(mm) < 2)? '0'.concat(mm): mm;

let format4 = `${YY}-${MM}-${DD} ${HH}:${mm}`;
console.log(format4);


