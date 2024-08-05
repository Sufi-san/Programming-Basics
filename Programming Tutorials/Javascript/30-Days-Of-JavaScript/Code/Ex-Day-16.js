const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const skillsJSON = JSON.stringify(skills, undefined, 4);
console.log(skillsJSON);

const ageJSON = JSON.stringify(age);
console.log(ageJSON);

const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

const studentJSON = JSON.stringify(student, undefined, 5);
console.log(studentJSON);

const filter = ['firstName', 'lastName', 'skills'];
const stdJSON = JSON.stringify(student, filter, 4);
console.log(stdJSON);

const txtObj = JSON.parse(txt, (key, value) => {
    return (key == 'skills')? value.map(skill => skill.toUpperCase()): value;
});
console.log(txtObj);

const txtObjKeys = Object.keys(txtObj);
let maxSkillUser = txtObjKeys.reduce((acc, curr) => {
    let accIsMax = txtObj[acc].skills.length > txtObj[curr].skills.length;
    return (accIsMax)? acc: curr;
});
console.log(maxSkillUser);

// Experimentation:
const jsonStr = `{
    "Sufi":{"name": "Sufiyan", "age": 17, "isMarried": false},
    "Raiho":{"name": "Raihan", "age": 10, "isMarried": false},
    "Tahhu":{"name": "Tahir", "age":22, "isMarried": true}
}`

const jsonObj = JSON.parse(jsonStr, (key, value) => {
    if(typeof value == 'object' && key.length > 0) { // *
        const newObj = {};
        for(objKey of Object.keys(value)) {newObj[objKey.toUpperCase()] = value[objKey];}
        return newObj;
    }
   else if(key == 'name') {return value.toUpperCase();}
   else return value;
});

console.log(jsonObj);
// *: If the condition 'key.length > 0' is not added, the top-level keys 'Sufi, Raiho, Tahhu' will also be capitalized. 
/* The parse function:
    1. Makes the changes using a bottom-up approach. (Nested key-value pairs are modified first);
    2. The last key-value pair will be the root JSON Object itself with: key = '', value = <root-object>
*/