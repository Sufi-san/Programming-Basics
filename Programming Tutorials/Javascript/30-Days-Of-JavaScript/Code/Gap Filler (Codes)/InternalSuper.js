// In the below code we understand the importance of execution contexts and how to use the constructor function of a different 'class' (method in this case) to set the property to current object.
// This is how it works behind the scenes without the use of syntactic sugar and the 'class' & 'extends' keywords

function SetUsername(username) {
    this.username = username;
}

// If we directly try to perform the task, the execution context of 'SetUsername' will be out of the call stack and no 'username' property will be set for the 'User' object.
// This is because, the 'this' keyword in 'SetUsername' will refer to the execution context of itself and NOT 'User' execution context.
// To avoid this and successfully add the property, we will thus use the '.call()' keyword and we will pass the optional 'this' (User's execution context) inside it as an argument
// This will make the 'this' keyword inside 'SetUsername' refer to the execution context of 'User'.

function User(username, email, age) {
    // SetUsername(username); will not add username to the 'CreateUser' object even when using 'new' keyword
    SetUsername.call(this, username); 
    this.email = email;
    this.age = age;
}

const user1 = new User("User 1", "user1@email.com", "99");
console.log(user1);

// The above process is as follows with the help of syntactic sugar: (using the 'super' keyword)

class UsernameSetter {
    constructor(username) {
        this.username = username;
    }
}

class NewUser extends UsernameSetter{
    constructor(username, email, age) {
        super(username);
        this.email = email;
        this.age = age;
    }
}

const user2 = new NewUser("User 2", "user2@email.com", "100");
console.log(user2);


// The instanceof keyword. Return a boolean value 'true' if object is instance of class and 'false' otherwise
// For the object of a class that inherits from another class, the instanceof keyword will return 'true' for both classes
// The same cannot be said in case of objects instantiated using functions

console.log(user1 instanceof SetUsername);
/* Above statement prints false because:
- instanceof checks for prototype inheritance, not function borrowing.
- Using call to borrow a function doesn't create an inheritance relationship.
- To achieve inheritance-like behavior, you would typically use prototype-based inheritance or class-based inheritance.*/

console.log(user1 instanceof User);
console.log(user2 instanceof UsernameSetter);
console.log(user2 instanceof NewUser);