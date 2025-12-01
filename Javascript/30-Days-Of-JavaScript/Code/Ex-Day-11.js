const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

let {width: w, height: h, area: a, perimeter: p} = rectangle;
console.log(w, h, a, p);

const keySet = new Set();
Object.keys(users[0]).forEach(key => keySet.add(key));
let [...keys] = keySet;
console.log("All keys are:", keys.join(', '));

const userWithLessSkills = users.filter(obj => {
    const {skills} = obj;
    return skills.length < 2;
}).map(obj => obj.name);
console.log(`User(s) with less than 2 skills: ${userWithLessSkills}`);

const countries_data = require('./Additional Files/countries_data');
for(const {name, capital, population, languages} of countries_data) {
    console.log(`Name: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages}\n`);
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] = student;
console.log(name, skills, jsScore, reactScore);

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(students) {
    return students.map(arr => {
        let [name, skills, scores] = arr;
        return {name: name, skills: skills, scores: scores};
    })
}

console.log(convertArrayToObject(students))

function newStudentObj(student) {
    let {name, age, skills} = student;
    let {frontEnd, backEnd, dataBase, dataScience} = skills;
    frontEnd = [...frontEnd];
    frontEnd.push({skill: 'Bootstrap', level: 8});
    backEnd = [...backEnd];
    backEnd.push({skill: "Express", level: 9});
    dataBase = [...dataBase];
    dataBase.push({skill:"SQL", level: 8});
    dataScience = [...dataScience];
    dataScience.push("SQL");
    return {
        name: name,
        age: age,
        skills: {
            frontEnd: frontEnd,
            backEnd: backEnd,
            dataBase: dataBase,
            dataScience: dataScience
        }, 
    }
}

const studentObj = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10},
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js'],
    }
  }

function customPrint(studentObj) {
    let {name, age, skills} = studentObj;
    console.log("name:", name);
    console.log("age:", age);
    console.log("skills:",skills);
}

console.log("New Student Object: ");
customPrint(newStudentObj(studentObj));
console.log("Old Student Object: ")
customPrint(studentObj);