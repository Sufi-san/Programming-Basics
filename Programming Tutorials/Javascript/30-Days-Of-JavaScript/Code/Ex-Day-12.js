let str = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const nums = str.match(/\d+/g).map(num => Number(num));
let income = (nums[0] + nums[2]) * 12 + nums[1];
console.log(`Annual Income: ${income}`);

let str1 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. ";

const points = str1.match(/-?\d/g);
const sortedPoints = points.map(num => +num).sort((a, b) => {
    if(a < b) return -1;
    else if(a > b) return 1;
    else 0;
});
let distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(Math.abs(distance));

function is_valid_variable(str) {
    let validVar = /^[_$a-zA-Z][a-zA-Z0-9_$]{0,}$/;
    console.log(validVar.test(str));
}
is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('_') // True
is_valid_variable('$__a_');
is_valid_variable('_@name');

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(str, size = 10) {
    const freqWordArr = [];
    const wordSet = new Set(str.match(/\b\w{1,}\b/g));
    for(const word of wordSet) {
        regWord = '\\b' + word + '\\b';
        let regex = new RegExp(regWord, 'g');
        freqWordArr.push({word: word, count: (str.match(regex)).length});
    }
    freqWordArr.sort((a, b) => {
        if(a.count > b.count) return -1;
        if(b.count > a.count) return 1;
        return 0;
    });
    return freqWordArr.slice(0, size);
}

console.log(tenMostFrequentWords(paragraph));

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(str) {
    return str.replace(/[^a-zA-Z ]/g, '');
}

function mostFrequentWords(str) {
    return tenMostFrequentWords(str, 3);
}

const cleanedText = cleanText(sentence);
console.log(cleanedText);
console.log(mostFrequentWords(cleanedText));
