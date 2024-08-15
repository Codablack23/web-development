// STRING MANIPULATION

let age = 10;
let firstName = "John";
let lastName = "Bellion";

// concatenation
let fullName = firstName + lastName;
console.log(fullName);

// string methods/functions and properties
const index = firstName.indexOf("o")
const lower = firstName.toLowerCase();
const upper = firstName.toUpperCase();
const replaced = firstName.replace("J","B")

console.log("lower:",lower)
console.log("upper:",upper)
console.log("replaced:",replaced)

// string interpolation
const nameSentence = `My name is ${firstName} ${lastName} and I ${age} years old`
console.log(nameSentence)