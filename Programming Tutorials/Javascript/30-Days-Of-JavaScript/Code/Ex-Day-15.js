class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    makeSound(call='Default Call') {
        console.log(`${call}, ${call}!!`);
    }
    run() {
        if(this.legs < 1) {
            console.log(`${this.name} started crawling at high speed.`);
            return;
        }
        if(this.legs < 2) {
            console.log(`${this.name} is hopping around.`);
            return;
        }
        console.log(`${this.name} started running.`);
    }
    jump() {
        if(this.legs < 1) {
            console.log(`${this.name} has no legs, tried its best to bounce around using the rest of the body.`);
            return;
        }
        console.log(`${this.name} started jumping!!`);
    }
}

class Dog extends Animal {
    constructor(name, age, color,gender, breed) {
        super(name, age, color, 4);
        this.gender = gender;
        this.breed = breed;
        this.eats = [];
    }
    makeSound() {
        console.log("Woof Woof!!");
    }
    get eatsList() {
        let formattedEats = this.eats.slice(0, this.eats.length - 1).join(', ').concat(` and ${this.eats[this.eats.length - 1]}.`);
        return `${this.name} likes to eat ${formattedEats}`
    }
    set addToEatsList(item) {
        this.eats.push(item);
    }
    set removeFromEatsList(item) {
        this.eats = this.eats.filter(food => food != item);
    }
}

class Cat extends Animal {
    constructor(name, age, color, gender, breed) {
        super(name, age, color, 4);
        this.gender = gender;
        this.breed = breed;
        this.eats = [];
    }
    makeSound() {
        console.log("Meow Meow!!");
    }
    get eatsList() {
        let formattedEats = this.eats.slice(0, this.eats.length - 1).join(', ').concat(` and ${this.eats[this.eats.length - 1]}.`);
        return `${this.name} likes to eat ${formattedEats}`
    }
    set addToEatsList(item) {
        this.eats.push(item);
    }
    set removeFromEatsList(item) {
        this.eats = this.eats.filter(food => food != item);
    }
}

const animal1 = new Animal('First Animal', 28, 'Golden', 0);
const animal2 = new Animal('Second Animal', 25, 'Silver', 1);
console.log(`Animal1: `);
console.log(animal1);
console.log(`Animal2: `);
console.log(animal2);
animal1.run();
animal1.jump();
animal1.makeSound();
animal2.run();
animal2.jump();
animal2.makeSound('Pew');

const doggo = new Dog("Johnny", 18, "Black & White", 'Male', 'Dalmatian');
console.log(doggo);
const kitty = new Cat("Snowy", 12, "White", 'Female', 'Ragdoll');
// Overridden methods
doggo.run();
doggo.jump();
doggo.makeSound(); 
kitty.run();
kitty.jump();
kitty.makeSound();
// Getters and Setters
doggo.addToEatsList = 'Bone';
doggo.addToEatsList = 'Dog Food';
doggo.addToEatsList = 'Meat';
kitty.addToEatsList = 'Fish Bones';
kitty.addToEatsList = 'Fish Meat';
kitty.addToEatsList = 'Cat Food';
console.log(doggo.eatsList);
console.log(kitty.eatsList);
doggo.removeFromEatsList = 'Bone';
kitty.removeFromEatsList = 'Fish Meat';
console.log(doggo.eatsList);
console.log(kitty.eatsList);

class Statistics {
    constructor(data) {
        this.data = data;
    }
    count() {return this.data.length; }

    sum() {return this.data.reduce((sum, num) => sum + num)}

    min() {return this.data.reduce((min, num) => Math.min(min, num))}

    max() {return this.data.reduce((max, num) => Math.max(max, num))}

    range() {return this.max() - this.min()}

    mean() {return Math.round(this.sum() / this.count() * 100) / 100}

    median() {  
        const data = this.data.slice().sort();
        let median, mid = data.length / 2;
        if(data.length & 1) median = data[Math.floor(mid)];
        else median = (data[Math.floor(mid)] + data[Math.ceil(mid)]) / 2;
        return median;
    }
    mode() { 
        const numCounts = {};
        this.data.forEach(num => {
            (numCounts[num])? numCounts[num]++: numCounts[num] = 1;
        });
        let mode = this.data[0], count = 1;
        for(const num of Object.keys(numCounts)) {
            if(numCounts[mode] < numCounts[num]) {
                mode = num;
                count = numCounts[num];
            }
        }
        return `(${mode}, ${count})`;
    }
    var() {
        const mean = this.mean();
        let varSum = this.data.reduce((sum, num) => {
            let curr = num - mean;
            return Math.pow(curr, 2) + sum;
        }, 0);
        return Math.round(varSum / this.count() * 100) / 100;
    }
    std() {return Math.round(Math.sqrt(this.var()) * 100) / 100}

    freqDist() {
        const freqObj = {};
        this.data.forEach(num => {
            (freqObj[num])? freqObj[num]++: freqObj[num] = 1;
        })
        const freqArr = [], multi = 100 / this.count();
        for(const num of Object.keys(freqObj)) {
            freqArr.push(`(${freqObj[num] * multi}, ${num})`);
        }
        return freqArr;
    }

    describe() {
        console.log('Count:', this.count());
        console.log('Sum: ', this.sum());
        console.log('Min: ', this.min());
        console.log('Max: ', this.max());
        console.log('Range: ', this.range());
        console.log('Mean: ', this.mean());
        console.log('Median: ',this.median());
        console.log('Mode: ', this.mode());
        console.log('Variance: ',this.var());
        console.log('Standard Deviation: ', this.std());
        console.log('Frequency Distribution: ',this.freqDist());
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
statistics.describe();

class PersonalAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    totalIncome() {
        let total = 0;
        for(const income of this.incomes) total += income[0];
        return total;
    }
    totalExpense() {
        let total = 0;
        for(const expense of this.expenses) total += expense[0];
        return total;
    }
    accountInfo() {
        console.log(`First Name: ${this.firstName}`);
        console.log(`Last Name: ${this.lastName}`);
        console.log(`Total Income: ${this.totalIncome()}`);
        console.log(`Total Expenses: ${this.totalExpense()}`);
        console.log(`Account Balance: ${this.accountBalance}`);
    }
    set addIncome(newIncome) {
        if(!PersonalAccount.validate(newIncome)) {
            console.log("Invalid Input!");
            return;
        }
        console.log("Added Successfully");
        this.incomes.push(newIncome);
    }
    set addExpense(newExpense) {
        if(!PersonalAccount.validate(newExpense)) {
            console.log("Invalid Input!");
            return;
        }
        console.log("Added Successfully");
        this.expenses.push(newExpense);
    }
    get accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
    static validate(income) {
        if(!Array.isArray(income) && income.length == 2) return false;
        return (typeof income[0] == 'number' && typeof income[1] == 'string');
    }
}

const incomes = [[50000, "Earned monthly via Freelancing"], [80000, "Earned monthly via job"], [25000, "Earned from YouTube"]];
const expenses = [[7000, "Electricity Bill"], [8000, "Water Bill"], [23000, "Food Expenses"], [25000, "House Expenses"], [14000, "Car Expenses"]];
const personAccount = new PersonalAccount("Sufi", "Chogs", incomes, expenses)
personAccount.accountInfo();
personAccount.addExpense = "asf";
personAccount.addIncome = 321810;
personAccount.addIncome = [500000, 'Lottery'];
personAccount.addExpense = [300000, "Medical Expenses"];
personAccount.accountInfo();