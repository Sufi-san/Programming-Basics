// Demo:
console.log(Math.PI);
Math.PI = 4 // reassignment will not occur internally
console.log(Math.PI);

// Viewing Property Characteristics
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


// Using the concept for a custom object:

const myObject = {
    name: "Unown",
    age: 99,
    gender: "Non-Binary",
    describe: function() {
        for(const [key, value] of Object.entries(this)) {
            console.log(`Key: ${key}, Value: ${value}`);
        }
    },
    showDescriptors: function() {
        console.log(Object.getOwnPropertyDescriptors(this));
    }
}
myObject.describe();
myObject.showDescriptors(); // Displaying descriptors for all properties

// Making 'functions' non-iterable:
for(const [key, value] of Object.entries(myObject)) {
    if(typeof value == 'function') Object.defineProperty(myObject, key, {enumerable: false});
}
myObject.describe(); // No information about functions will be displayed

// Making custom changes to required properties:
Object.defineProperties(myObject, {
    name: {
        value: "Sufi",
    },
    age: {
        value: 23
    },
    gender: {
        value: "Male",
        writable: false,
        configurable: false
    }
});

// Fetching descriptors for only iterable properties:
for(const key of Object.keys(myObject)) console.log(Object.getOwnPropertyDescriptor(myObject, key));

myObject.describe();

// Trying to change non-writable property:
myObject.gender = "Non-Binary"; // will have no effect
console.log(myObject.gender);

// Trying to change the configuration of a non-configurable property:
try {
    Object.defineProperty(myObject, 'gender', {configurable: true, writable: true});
} catch(error) {
    console.log("Cannot redefine non-configurable property");
}

