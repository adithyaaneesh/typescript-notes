// Functions, Parameters, Return Types & Arrow Functions

// 1. Syntax
// function functionName(parameter: datatype): returnType {
//     // code
// }

// In JS:
// function add(a, b) {
//     return a + b;
// }

// In TS:
function add(a: number, b: number): number {
    return a + b;
}

// Example:
function greet(name: string): string {
    return "Hello " + name;
}
console.log(greet("Miya"));

// 2. Function Without Parameters

function welcome(): string {
    return "Welcome to TypeScript";
}
console.log(welcome());

// 3. Function With Multiple Parameters

function product(a: number, b: number): number {
    return a * b;
}
console.log(product(10, 20));

// 4. Different Parameter Types

function studentInfo(name: string, age: number): string {
    return `${name} is ${age} years old`;
}

console.log(studentInfo("Rahul", 22));

// 5. Function Returning Boolean

function isAdult(age: number): boolean {
    return age >= 18;
}
console.log(isAdult(20));

// 6. void Return Type

// Sometimes a function doesn't return anything.

function printMessage(message: string): void {
    console.log(message);
}

printMessage("Hello TypeScript");

// 7. Optional Parameters

// Sometimes a parameter is optional. Use ?.

function greeting(name: string, age?: number): string {
    if (age) {
        return `${name} is ${age} years old`;
    }else{
        return `Hello ${name}`;
    }
}

console.log(greeting("Rahul"));
console.log(greeting("Rahul", 22));

// 8. Default Parameters

function greetUser(name: string = "Guest"): string {
    return `Hello ${name}`;
}

console.log(greetUser());
console.log(greetUser("Miya"));


// 9. Optional vs Default Parameter 
// Optional  // The value can be missing.

// function greet(name?: string): string {
//     return `Hello ${name}`;
// }

// Default  // If the value is missing, "default value" is automatically used.

// function greet(name: string = "Guest"): string {
//     return `Hello ${name}`;
// }


// 10. Function Expression
// A function can also be stored inside a variable.

// In JS:
// const add_num = function(a, b) {
//     return a + b;
// };

// In TS:

// const add = function(a: number, b: number): number {
//     return a + b;
// };

// console.log(add(10, 20));

// 11. Arrow Function
// syntax:
// const add = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(add(10, 20));

// 12. Arrow Function — Short Syntax 
// // If there is only one return statement:

// const add = (a: number, b: number): number => a + b;
// console.log(add(10, 20));

// This is called an implicit return.

// 13. Arrow Function With String
// const greet = (name: string): string => {
//     return `Hello ${name}`;
// };

// console.log(greet("Miya"));

// 14. Arrow Function With Boolean
// const checkAge = (age: number): boolean => {
//     return age >= 18;
// };

// console.log(checkAge(21));


// 15. Arrow Function With void
// const printName = (name: string): void => {
//     console.log(name);
// };

// printName("Rahul");

// 16. Function Type
// TypeScript also allows us to describe the type of a function.

// let operation: (a: number, b: number) => number;

// operation must be a function that accepts two numbers and returns a number.

// operation = (a: number, b: number): number => {
//     return a + b;
// };

// console.log(operation(10, 20));

// Example:-
// let calculate: (x: number, y: number) => number;

// calculate = (x, y) => {
//     return x * y;
// };

// console.log(calculate(5, 4));

// 17. practice with three important return types:

// const getStudentName = (name: string): string => {
//     return name;
// };

// const getStudentMark = (mark: number): number => {
//     return mark;
// };

// const isPassed = (mark: number): boolean => {
//     return mark >= 40;
// };

// console.log(getStudentName("Rahul"));
// console.log(getStudentMark(75));
// console.log(isPassed(75));


// 18. Important TypeScript Rule
// TypeScript can often infer the return type.

// For example:
// const add = (a: number, b: number) => {
//     return a + b;
// };

// console.log(add(2,3))

// const addition = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(addition(2,3))

// Both work.


// 22. Practice Examples

// 1. Create a function returns the difference of 2 numbers.
// 2. Create a function that pass a person's name and returns a greeting.
// 3. Check whether a number is even.



// 23.Workout

// Create a function that returns their sum of 2 numbers.
// Create a function that returns the square of a number.
// Create a function pass a name and returns "Hello <name>".
// Create a function that checks whether a number is positive.
// Create a function that checks whether a person is eligible to vote.
// Create a function that returns the largest of two numbers.
// Create a function that converts Celsius to Fahrenheit.
// Create a function that calculates the area of a rectangle.
// Create a function that calculates the perimeter of a rectangle.
// Create a function that pass a string and returns its length.

// Optional/default parameters
// Create a greet() function with an optional name.
// Create a function with a default country value of "India".
// Create a function that pass name and optional age.
// Create a function that pass a default discount of 10.
// Create a function that calculates price after discount.

// Arrow functions
// Create an arrow function to add two numbers.
// Create an arrow function to multiply two numbers.
// Create an arrow function to check whether a number is odd.
// Create an arrow function to convert a string to uppercase.
// Create an arrow function to check whether a student passed.