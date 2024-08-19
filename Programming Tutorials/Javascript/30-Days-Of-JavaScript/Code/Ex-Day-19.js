function outerFunc(sent) {
    function innerFunc() {
        console.log(sent);
    }
    return innerFunc;
}

const showReceived = outerFunc("This message exists inside the lexical scope and is accessible by the inner function.");
showReceived();

// Creating different objects using the concept of closure without using the 'new' keyword as well as incorporating 'Encapsulation' and 'Data Integrity' like other Object-Oriented Programming languages

function User(username, score) {
    const getUserName = function() {
        return username;
    }
    const setUserName = function(newName) {
        username = newName;
    }
    const getScore = function() {
        return score;
    }
    const addToScore = function(value) {
        score += value;
    }
    // below object will be different for every call
    return {
        getUserName,
        setUserName,
        getScore,
        addToScore
    }
}

const user1 = User("User 1", 1000);
console.log(user1);
user1.setUserName("User 1 (Updated)".toUpperCase());
console.log(user1.getUserName());
user1.addToScore(-250);
console.log(user1.getScore());

const user2 = User("User 2", 500); // creating another user object and leveraging different lexical scopes
console.log(user2);
user2.setUserName("User 2 (Updated)".toUpperCase());
console.log(user2.getUserName());
user2.addToScore(250);
console.log(user2.getScore());

console.log("Are 'user1' and 'user2' the same objects?:", user1 === user2,"\n");


function PersonalAccount(firstName, lastName, incomes, expenses) {
    return {
        totalIncome: function() {
            let total = 0;
            for(income of incomes) total += income[0];
            return total;
        },
        totalExpense: function() {
            let total = 0;
            for(expense of expenses) total += expense[0];
            return total;
        },
        accountInfo: function() {
            console.log(`First Name: ${firstName}`);
            console.log(`Last Name: ${lastName}`);
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
            incomes.push(newIncome);
        },
        addExpense: function(newExpense) {
            if(!this.validate(newExpense)) {
                console.log("Invalid Input!");
                return;
            }
            console.log("Added Successfully");
            expenses.push(newExpense);
        },
        accountBalance: function() {
            return this.totalIncome() - this.totalExpense();
        },
        validate: function(arr) {
            if(!Array.isArray(arr) && arr.length == 2) return false;
            return (typeof arr[0] == 'number' && typeof arr[1] == 'string');
        }
    }
}

const incomes = [[50000, "Earned monthly via Freelancing"], [80000, "Earned monthly via job"], [25000, "Earned from YouTube"]];
const expenses = [[7000, "Electricity Bill"], [8000, "Water Bill"], [23000, "Food Expenses"], [25000, "House Expenses"], [14000, "Car Expenses"]];
const personAccount = PersonalAccount("Sufi", "Chogs", incomes, expenses)
personAccount.accountInfo();
personAccount.addExpense("asf");
personAccount.addIncome(3218104);
personAccount.addIncome([500000, 'Lottery']);
personAccount.addExpense([300000, "Medical Expenses"]);
personAccount.accountInfo();