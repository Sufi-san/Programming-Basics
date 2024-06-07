let challenge = '30 Days Of JavaScript';

console.log(challenge);

console.log(challenge.length);

let upC = challenge.toUpperCase(), lowC = challenge.toLowerCase();

console.log(upC, lowC);

console.log(challenge.substring(3));

console.log(challenge.includes('Script'))

console.log(challenge.split(' '));

console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

console.log(challenge.replace('JavaScript', 'Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J')));

console.log(challenge.lastIndexOf('a'));

let becaSen = 'You cannot end a sentence with because because because is a conjunction';

console.log(becaSen.indexOf('because'));

console.log(becaSen.lastIndexOf('because'));

console.log(becaSen.search('because'));

console.log(' 30 Days Of JavaScript '.trim());

console.log(challenge.startsWith('30 Days Of JavaScript'));

console.log(challenge.endsWith('30 Days Of JavaScript'));

console.log(challenge.match(/A/gi));

console.log('30 Days Of'.concat(' JavaScript'));

console.log(challenge.repeat(2));

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

let strNum = '10';

if(!(typeof strNum == typeof 10)) {
    console.log(typeof(+strNum) == typeof 10)
}

const strG = '9.8';

if(!(parseFloat(strG) == 10)) {
    console.log(Math.ceil(strG) == 10);
    // If string is valid number, Math functions work.
}

console.log('python'.includes('on') && 'jargon'.includes('on'));

let sent = 'I hope this course is not full of jargon';

console.log(sent.includes('jargon'))

console.log(Math.floor(Math.random() * 101));

console.log(50 + Math.floor(Math.random() * 51));

console.log(Math.floor(Math.random() * 256));

let num = Math.floor(Math.random() * 'JavaScript'.length);
console.log('JavaScript'[num]);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

let s = becaSen.indexOf('because');
let e = 'because'.length * 3 + 2;
console.log(becaSen.substr(s, e)); // deprecated
console.log(becaSen.substring(s, s + e));

let sent2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sent2.match(/love/gi).length);

console.log(becaSen.match(/because/g).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const regex2 = /[^a-zA-Z0-9 ]/g;
const cleaned = sentence.replace(regex2, '');
console.log(cleaned);
const map = new Map();
cleaned.split(' ').forEach((word) => {
    let count = map.get(word);
    if(count) map.set(word, count + 1);
    else map.set(word, 1);
})
let maxWord = cleaned.substring(0, cleaned.indexOf(' '));
map.forEach((value, key) => {
    if(map.get(maxWord) < value) {
        maxWord = key;
    }
});
console.log(`Word with max count: ${maxWord}\n`);

const sent3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const regex3 = /\d+/g; // '\d' in regex, means digits. '+' means one or more digits.
figures = sent3.match(regex3);
console.log(figures);
console.log("Annual Income: ", (+figures[0] + +figures[2]) * 12 + +figures[1]);
