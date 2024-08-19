// Using .call(), .apply(), .bind() and observing their differences. (Function Borrowing)
const sentence = {
    firstWord: "I",
    secondWord: "am"
}

function printWithParams(...args) {
    const text = [this.firstWord +" "+ this.secondWord];
    args.forEach(arg => text.push(arg));
    console.log(text.join(" "));
}

printWithParams.call(sentence, "very", "honest."); // Call
printWithParams.apply(sentence, ["working", "hard", "to", "survive."]); // Apply
printWithSetContext = printWithParams.bind(sentence, "really"); // Bind

const continuations = [["tired", "now."], ["ashamed", "of", "myself."], ["worthy", "of", "the", "hammer."]];

continuations.forEach(continuation => {
    printWithSetContext(...continuation); 
});

// Creating a custom '.mybind()' method for all 'Functions' that provides functionality identical to the pre-existing '.bind()' method.

Function.prototype.mybind = function(...args) { // all functions will now have a 'mybind' in their prototype
    const obj = this; // storing reference to 'Function' object for later use
    return function(...args2) {
        obj.apply(args[0], [...args.slice(1), ...args2]);
    }
}
printWithSetContext2 = printWithParams.mybind(sentence, "truly");

continuations.forEach(continuation => {
    printWithSetContext2(...continuation); 
});
