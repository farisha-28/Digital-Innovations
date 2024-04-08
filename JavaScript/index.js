// This is my first JavaScript code
// use javascript to implement behavior
// open vs code integrated teminal ---- view menu, then terminal. it will point to the same folder you are in now.
// node index.js
console.log('Hello World');

// variable :
// we use variable to store data in computer memory temprarily. with the var name we can find the data in the given location in memory.
// variable name cannot be a reserved keyword like if. It should be meaningful.

// same variable x with let, cannot be redeclared but with "var", it can be redeclared.
// var is always global scope but let is always block scope

let name; // undefined
console.log(name);

let courseName ='Mosh Hemadani';
console.log(courseName);

<p id = "demo"></p>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;

let p = "John Doe", car = "Volvo", price = 200;
document.getElementById("demo").innerHTML = carName;


// Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate); // variable let will change the value to 1

const interest = 0.3;
//interest = 1; // but new val assignment to constant will throw error.
console.log(interest);

// primitive types string, number, boolear, undefined, null
let names='Mosh';
let age = 30;
let age2 = 30.5;
typeof age
typeof age2
let isApproved = false;
let firstName = undefined;
let select = null;

// reference type--- objects, array and function
let person = {

        name : 'Mosh',
        age: 30
};
// Dot Notation
person.name= 'John';
// Bracket Notation
person[name] = 'Mary';
//console.log(person.name);
console.log(person[name]);

//Array - size of array is dynamic
let colors = ['red', 'blue'];
colors[2] = 'green';
colors[3] = 30.5;
console.log(colors);
console.log(colors.length);

//Function
function greet(name, lastName){//parameter 
    console.log('Hello Universe, '+ 'Welcome '+ name + lastName);
}

greet('Farisha', ' Hussain');

function square(number){
    return number*number;
}
console.log(square(2));




