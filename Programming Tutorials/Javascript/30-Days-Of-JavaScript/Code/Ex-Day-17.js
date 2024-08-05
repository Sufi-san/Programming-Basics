localStorage.clear();
let firstName = "Sufiyan", lastName = "Chougule", age = 22, country = "India", city = "Thane";

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);
console.log(localStorage);

const student = {
    firstName: 'student_fn',
    lastName: 'student_ln',
    skills: [
        {name: 'HTML', level: 8},
        {name: 'CSS', level: 6},
        {name: 'JavaScript', level: 8},
        {name: 'ReactJS', level: 5}
    ],
    country: 'std_country',
    enrolled: true,
}
localStorage.setItem('studentObj', JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem('studentObj')));

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
console.log("Object before stringify:");
console.log(personAccount);
localStorage.setItem('pa', JSON.stringify(personAccount));
console.log("Object parsed from localStorage string:");
console.log(JSON.parse(localStorage.getItem('pa')));