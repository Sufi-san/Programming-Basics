const dog = {};

console.log(dog);

dog.name = "Brownie";
dog.legs = 4;
dog.color = "Brown";
dog.age = 7;
dog.bark = () => {
    // This is not a good approach when we need to use the 'this' keyword to refer to the object itself inside a method.   
    console.log("woof woof")
};

const keys = Object.keys(dog);
for(property of keys) {
    let value = dog[property];
    if(typeof value === 'function') {
        value();
        continue;
    }
    console.log(value);
}

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

const userNames = Object.keys(users);
let maxSkillPerson = users[userNames[0]];
let loggedInCount = 0;
let points50OrMore = 0;
const mernDevs = [];
for(person of userNames) {
    let value = users[person];
    if(value.skills > maxSkillPerson.skills) maxSkillPerson = person;
    if(value.isLoggedIn) loggedInCount++;
    if(value.points >= 50) points50OrMore++;
    const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];
    let isMernDev = true;
    for(skill of mernSkills) {
        if(!value.skills.includes(skill)) {
            isMernDev = false;
            break;
        }
    }
    if(isMernDev) mernDevs.push(person);
}

console.log(`Person with maximum skills: ${maxSkillPerson}`);

console.log(`Logged in users: ${loggedInCount}`);
console.log(`Count of users with points >= 50: ${points50OrMore}`);

console.log(`MERN stack developers: ${mernDevs}`);

const copyOfUsers = Object.assign({}, users);
copyOfUsers['Sufiyan'] = {
    email: 'sufy_456@hotmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'DSA'],
    age: 22,
    isLoggedIn: false,
    points: 30,
}
console.log(copyOfUsers);

console.log('Keys in users object:',userNames);
console.log('Values of users object:',Object.values(users));
  
// Cannot find countries Object !!

const personAccount = {
    firstName: "Sufi",
    lastName: "Chogs",
    incomes: [[50000, "Earned monthly via Freelancing"], [80000, "Earned monthly via job"], [25000, "Earned from YouTube"]],
    expenses: [[7000, "Electricity Bill"], [8000, "Water Bill"], [23000, "Food Expenses"], [25000, "House Expenses"], [14000, "Car Expenses"]],
    totalIncome: function() {
        let total = 0;
        for(income of this.incomes) total += income[0];
        return total;
    },
    totalExpense: function() {
        let total = 0;
        for(expense of this.expenses) total += expense[0];
        return total;
    },
    accountInfo: function() {
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Total Income: ${this.totalIncome()}`);
        console.log(`Total Expenses: ${this.totalExpense()}`);
        console.log(`Account Balance: ${this.accountBalance()}`);
    },
    addIncome: function(newIncome) {
        if(!this.validate(newIncome)) {
            console.log("Invalid Input!");
            return;
        }
        console.log("Added Successfully");
        this.incomes.push(newIncome);
    },
    addExpense: function(newExpense) {
        if(!this.validate(newExpense)) {
            console.log("Invalid Input!");
            return;
        }
        console.log("Added Successfully");
        this.expenses.push(newExpense);
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    },
    validate: function(arr) {
        if(!Array.isArray(arr) && arr.length == 2) return false;
        return (typeof arr[0] == 'number' && typeof arr[1] == 'string');
    }
}
personAccount.accountInfo();
personAccount.addExpense("asf");
personAccount.addIncome(3218104);
personAccount.addIncome([500000, 'Lottery']);
personAccount.addExpense([300000, "Medical Expenses"]);
personAccount.accountInfo();

const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(userName, email, password) {
    let exists = userExists(email);
    if(exists) {
        console.log("Your account already exists, try signing in.");
        return;
    }
    const newUser = {
        _id: getUserID(),
        username: userName,
        email: email,
        password: password,
        createdAt: getDateTime(),
        isLoggedIn: false,
    }
    users2.push(newUser);
    console.log("Account created successfully");
}

function userExists(email) {
    for(object of users2) {
        if(object.email == email) return true;
    }
    return false;
}

function getUserID() {
    let ID = [];
    for(let i = 0; i < 6; i++) {
        let code = Math.floor(30 + Math.random() * 93);
        let ch = String.fromCharCode(code);
        if(ch.match(/[^a-z0-9]/)) {
            i--;
            continue;
        }
        ID.push(ch);
    }
    const newID = ID.join('');
    let isUniqueID = true;
    for(object of users2) {
        if(object._id == newID) {
            isUniqueID = false;
            break;
        }
    }
    return (isUniqueID)? newID: getUserID();
}

function getDateTime() {
    const dateTime = [], dateObj = new Date();
    dateTime[0] = dateObj.getDate();
    dateTime[1] = dateObj.getMonth() + 1;
    dateTime[2] = dateObj.getFullYear();
    dateTime[3] = dateObj.getHours();
    dateTime[4] = dateObj.getMinutes();
    for(let i = 0; i < dateTime.length; i++) {
        dateTime[i] = ''.concat(dateTime[i]);
        if(dateTime < 10) dateTime[i] = '0'.concat[dateTime[i]];
    }
    let status = (dateTime[3] > 11)? 'PM': 'AM';
    dateTime[3] %= 12;
    let format = `${dateTime[0]}/${dateTime[1]}/${dateTime[2]} ${dateTime[3]}:${dateTime[4]} ${status}`;
    return format;
}

function signIn(email, password) {
    for(object of users2) {
        if(email == object.email && password == object.password) {
            console.log("Sign-In successful.");
            object.isLoggedIn = true;
            return true;
        }
    }
    console.log("Email and Password do not match. Try again.");
    return false;
}

signUp("sufi_San", "sufi@sufi.com", "1234123");
signUp("yohhoho", "sufi@sufi.com", "1241344");
signIn("sufi@sufi.com", "1525453");
signIn("suf@suf.com", "1234123");
signIn("sufi@sufi.com", "1234123");
console.log(users2);

function rateProduct(productName, rating, email, password) {
    if(!signIn(email, password)) {
        console.log("Please sign-in successfully to continue.");
        return;
    }
    let productExists = false;
    for(product of products) {
        if(product.name == productName) {
            productExists = true;
            let userID;
            for(object of users2) {
                if(object.email == email) {
                    userID = object._id;
                    break;
                }
            }
            product.ratings.push({userId: userID, rate: Math.min(5, rating)});
            console.log(`${product.name} has been rated successfully by ${object.username}`);
            console.log(`Current Ratings:`);
            for(rateObj of product.ratings) console.log(`${rateObj.rate}`);
            console.log(`Overall Rating: ${Math.round(averageRating(product) * 100) / 100}`);
        }
    }
    if(!productExists) console.log("Product does not exist, please check the name and try again");
}

function averageRating(product) {
    for(prod of products) {
        if(prod.name == product.name) {
            let avg = 0;
            for(obj of product.ratings) avg += obj.rate;
            return avg / product.ratings.length;
        }
    }
    console.log(`${product.name} not found.`);
}

rateProduct('mobile phone', 5.6, 'thomas@thomas.com', '123333');
rateProduct('mobile phone', 5, 'sufi@sufi.com', '123333');
rateProduct('microwave', 4, 'sufi@sufi.com', '1234123');

function likeProduct(productName, email, password) {
    if(!signIn(email, password)) {
        console.log("Please sign-in successfully to continue.");
        return;
    }
    let productExists = false;
    for(product of products) {
        if(product.name == productName) {
            productExists = true;
            let userID;
            for(object of users2) {
                if(object.email == email) {
                    userID = object._id;
                    break;
                }
            }
            let ind = product.likes.indexOf(userID);
            if(ind >= 0) {
                product.likes.splice(ind, 1);
                console.log(`Like removed successfully by ${object.username} for product ${product.name}`);
            }
            else {
                product.likes.push(userID);
                console.log(`${product.name} has been liked successfully by ${object.username}`);
            }
        }
    }
    if(!productExists) console.log("Product does not exist, please check the name and try again");
}

likeProduct('mobile phone', 'thomas@thomas.com', '123333');
likeProduct('mobile phone', 'sufi@sufi.com', '123333');
likeProduct('microwave', 'sufi@sufi.com', '1234123');
likeProduct('mobile phone', 'sufi@sufi.com', '1234123');
likeProduct('mobile phone', 'thomas@thomas.com', '123333');
console.log(products);