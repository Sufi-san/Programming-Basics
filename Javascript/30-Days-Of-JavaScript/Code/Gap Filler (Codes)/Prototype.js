// The 'class' keyword is syntactical sugar for developers coming from various other Object-oriented programming languages.
// Due to prototypes, object initialization, modification, inheritance and creation of a template can be done even without making use of the 'class' keyword.

// Below is the 'constructor' method, by default it will return the object instance or 'this'.
function createUser(username, score) {
    this.username = username;
    this.score = score;
    // return this
}

// Defining custom properties for the objects. (No arrow functions here!)
createUser.prototype.displayUser = function() {
    console.log(`Hello, ${this.username}`);
    console.log(`Your Score: ${this.score}`);
}
createUser.prototype.scoreIncrement = function(val) {
    this.score += val;
}

// The 'new' keyword initializes the object and updates the object prototype to reflect the changes/additions made.
const sufiUser = new createUser("Sufi", 400);
const localUser = new createUser("Locu", 500);

sufiUser.displayUser();
localUser.displayUser();
sufiUser.scoreIncrement(100);
console.log(`\nAfter Increment:`);
sufiUser.displayUser();


// Adding properties/methods to built-in classes using prototype:

String.prototype.trueLength = function(){
    console.log(`String: '${this.toString()}'`);
    console.log(`True Length:`, this.trim().length);
};
myName = "    Sufi   ", name1 = "  Console  ", name2 = "Ben    ";
myName.trueLength();
name1.trueLength();
name2.trueLength();

// Inheritance using prototype:

Object.prototype.isObject = true;
Object.prototype.toString2 = function() {
    console.log('\nUsing Custom "toString2()" method:');
    console.log(`isObject = ${this.isObject}`);
    console.log(this.toString());
}

const myArr = [1, true, null, 5.2, "Hey"];
const myFunc = function() {
    console.log("This is a function.");
};
// As all non-primitives are objects, the properties get inherited
myArr.toString2();
myFunc.toString2();
"A String".toString2();


// Using the '__proto__' keyword:

const Animal = {
    isAnimal: true
}

const Dog = {
    canBark: true,
    speech: "Woof!"
}

const Dalmatian = {
    description: "White Body, Black Round Spots.",
    __proto__: Dog
}

const Cat = {
    canMeow: true,
    speech: 'Meow!'
}

Dog.__proto__ = Animal; // Can be accessed inside or outside objects
Object.setPrototypeOf(Cat, Animal); // Cleaner way to set prototype

console.log("\nDalmatian is Animal?:", Dalmatian.isAnimal);
console.log("Dalmatian can bark?:", Dalmatian.canBark);
console.log("Dalmatian speech:", Dalmatian.speech);
console.log("Dalmatian Description:", Dalmatian.description);

console.log("\nCat is Animal?:", Cat.isAnimal);
console.log("Cat can meow?:", Cat.canMeow);
console.log("Dalmatian speech:", Cat.speech);

