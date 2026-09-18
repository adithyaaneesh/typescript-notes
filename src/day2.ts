// let username: string = "Diya";

// The syntax is:
// let variableName: type = value;

// 2. Type Annotation
// What is Type Annotation?
// Type annotation means explicitly telling TypeScript what 
// type of value a variable should contain.

let name: string = "Rahul";
let age: number = 22;
let isStudent: boolean = true;

console.log(name)
console.log(age)
console.log(isStudent)

// 3. Type Inference
// TypeScript doesn't always require us to write the type.

// let username = "Nethra";
// let age = 25;
// let isStudent = true;


// console.log(username)
// TypeScript automatically understands:

// username → string
// age → number
// isStudent → boolean
// This is called Type Inference.

// Example
// let city = "Kozhikode";

// TypeScript sees: "Kozhikode" and automatically infers:
// city → string

// So:
// city = 100; 

// 4. Type Annotation vs Type Inference
// Explicit
// let age: number = 25;
// We explicitly tell TypeScript: age is a number.

// Inference
// let age = 25;
// TypeScript automatically understands: age is a number.


// Annotation = We tell TypeScript the type.
// Inference = TypeScript tells itself the type.

// 5. let, const, and var
// let
// let age: number = 25;
// age = 26;
// Reassign Allowed.

// const
// const country: string = "India";
// Cannot reassign:
// country = "USA"; //  Error.
// Use const when the variable should not be reassigned.

// var
// var score: number = 100;
// It works, but in modern TypeScript/JavaScript, prefer: let & const instead of var.

// 6. String
let firstName: string = "Rahul";
let lastName: string = 'Kumar';

// or template literals: `Hello`

// Template Literal Eg:

// let name: string = "Rahul";
// let age: number = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);

// 7. Number
// TypeScript has one main numeric type:
// number
// Example:
// let age: number = 25;
// let price: number = 99.99;
// let temperature: number = -5;
// All are: number

// 8. Boolean
// Boolean contains only:
// true  /  false

// Example:
// let isLoggedIn: boolean = true;
// let isAdmin: boolean = false;

// 9. Arrays
// Arrays can contain multiple values of the same type.
// String Array
// let students: string[] = ["Rahul", "Anu","Arun" ];

// // Number Array
// let marks: number[] = [
//     80,
//     75,
//     90
// ];
// // Boolean Array
// let results: boolean[] = [
//     true,
//     false,
//     true
// ];

// Alternative Array Syntax
// Instead of:
// let student: string[] = ["Rahul", "Anu"];

// let students: Array<string> = ["Rahul", "Anu"];

// 10. Array of Objects
// let students: {
//     name: string;
//     age: number;
// }[] = [
//     {
//         name: "Rahul",
//         age: 22
//     },
//     {
//         name: "Anu",
//         age: 23
//     }
// ];

// Each object must follow the specified structure.
// example:

// students.push({
//     name: "Arun",
//     age: 24
// });  

// students.push({
//     name: "Arun"
// }); 


// 11. Tuple
// A tuple is an array where:
// The number, order, and types of elements are fixed.

// Example:
// let student: [string, number] = ["Rahul", 22];
// index 0 → string
// index 1 → number

// But:
// let student: [string, number] = [22, "Rahul"];  //Error.
// Because the order is wrong.

// Example 2
// let product: [number, string, number] = [
//     101,
//     "Laptop",
//     50000
// ];

// 12. any
// any basically tells TypeScript: Don't perform type checking for this value.

// Example:
// let data: any = "Hello";

// data = 100;
// data = true;
// data = ["a", "b"];   // All are allowed.

// Why should we avoid any?
// Because it removes TypeScript's main advantage: type safety.

// 13. unknown
// unknown is safer than any.

// let data: unknown = "Hello";
// We cannot directly do:
// data.toUpperCase();  // TypeScript doesn't know whether data is a string.

//first check the type:

// if (typeof data === "string") {
//     console.log(data.toUpperCase());
// }

// Now TypeScript knows:
// data → string So the operation is safe.

// Difference
// any     → TypeScript trusts us
// unknown → We must prove the type

// 14. void
// void is commonly used with functions that don't return a value.

// function greet(): void {
//     console.log("Hello");
// }

// // The function performs an action but doesn't return anything.

// function add(a: number, b: number): number {
//     return a + b; 6
// }


// add() → number

// function greet(): void {
//     console.log("Hello");
// }

// greet() → void




// 15. null and undefined (sem)

// undefined
// undefined generally means: A value has not been assigned.

// let username: undefined = undefined;

// null
// null generally means: Intentionally no value.

// let selectedUser: null = null;






// 16. Important Practical Example
// Create a file: day2.ts

// Write:
// let studentName: string = "Rahul";
// let studentAge: number = 22;
// let isPresent: boolean = true;

// let subjects: string[] = [
//     "Python",
//     "SQL",
//     "React"
// ];

// let marks: number[] = [
//     80,
//     75,
//     90
// ];

// console.log(studentName);
// console.log(studentAge);
// console.log(isPresent);
// console.log(subjects);
// console.log(marks);

// Compile:
// tsc day2.ts

// Then:
// node day2.js


// Day 2 Practical Exercises

// Exercise 1
// Create variables for:
// employee name
// employee ID
// salary
// department
// isActive
// Use appropriate TypeScript types.

// Exercise 2
// Create an array containing 5 programming languages.

// let languages: string[] = [];

// Exercise 3
// Create an array containing 5 marks.
// Calculate the total using a loop.

// Exercise 4
// Create a tuple containing:
// product ID
// product name
// product price

// Example:

// [101, "Laptop", 55000]

// Exercise 5
// Create an array of student objects.
// Each student should contain:
// name
// age
// course

// Example:
// [
//     {
//         name: "Rahul",
//         age: 22,
//         course: "Python"
//     }
// ]

// Exercise 6
// Create a function:
// calculateSalary()

// It should accept:
// basic salary
// bonus
// and return the total salary.

// Exercise 7
// Create a function:
// checkAge()
// Accept age as a number and print:
// Eligible
// if age is 18 or above.



// TypeScript allows us to describe what type of data 
// our variables, arrays, tuples, and functions are expected to contain,
//  giving us errors during development before the code runs.