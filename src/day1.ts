// 1. What is TypeScript?
//     TypeScript is a superset of JavaScript that adds static typing to JavaScript.

// What is a superset?
//     JavaScript + TypeScript features = TypeScript

// The javascript program code works in TypeScript

// let fname = "Megha";
// console.log(fname);


// But TypeScript allows us to add types

// let firstname: string = "Megha";
// console.log(firstname);

// why typescript ?
// let age = 25;  // age => number
// age = "twenty five";  // age => string

// JavaScript is dynamically typed.
// This can cause problems in large applications.

// for eg:-
// function calculateAge(age) {
//     return age + 5;
// }
// console.log(calculateAge("25")); // (here "25" + 5 becomes string concatenation.)

// TypeScript helps catch this kind of mistake earlier.
// function calculateAge(age: number): number {
//     return age + 5;
// }
// console.log(calculateAge(25))



//          JavaScript	                          |             TypeScript
//     Dynamically typed                          | Statically typed
//     .js file	                                  | .ts file
//     Browser can execute directly               |	Usually compiled/transpiled to JavaScript
//     Type checking happens mainly at runtime    |	Type checking happens during development/compilation
//     Easier to start                            |	More structured for large applications
//     Fewer type annotations   	              | Supports type annotations


// Typescript does not replace javascript insted:
// "TypeScript is JavaScript with additional features, especially a type system, 
// which is then transformed into JavaScript that can run in environments such as browsers."


// Main advantages of TypeScript
// 1. Static type checking
    // let age: number = 25;
//     This tells TypeScript: age should contain a number.
    // age = "hello";   // This is incorrect:

// 2. Better code completion
//     Editors such as VS Code can understand the types.
//     For example:
        // let studentName: string = "Arun";

//     When you type:
//     studentName. (the editor knows that this is a string and can suggest string methods.)

// 3. Easier debugging
//      Many errors are caught while writing the code instead of discovering them after running the application.

// 4. Better for large projects
//      TypeScript becomes particularly useful when applications become large.
//      This is one reason it is commonly used with:
//      React + TypeScript

// 6. Is TypeScript a completely different language?
//     No.
//     TypeScript includes JavaScript.

// For example:  // normal JavaScript.
// let x = 10;
// if (x > 5) {
//     console.log("Greater");
// }

// TypeScript adds additional features such as:
//    let x: number = 10;
// So:
//     JavaScript+Types+Additional TypeScript features =TypeScript

// 7. How does TypeScript actually work?
// A browser understands JavaScript.
// A browser does not normally execute TypeScript directly.
// Suppose we create:
// app.ts
//     let age: number = 25;
//     console.log(age);
// We cannot simply expect the browser to execute the TypeScript syntax.
// Instead, TypeScript is transformed into JavaScript.
// app.ts > TypeScript Compiler > app.js > Browser => Output

// 8. What is transpilation?
//     Transpilation means converting source code from one language/version into another 
//     related language/version.
// For TypeScript:
//     TypeScript > JavaScript

// For example:
// TypeScript
    // let age: number = 25;
// After compilation, JavaScript can look like:
//     let age = 25;
// Remove the type annotation:


// 9. What is the TypeScript Compiler?
// The TypeScript compiler is called:
//     tsc
// It means:
// TypeScript Compiler = Its job is to take TypeScript code and produce JavaScript.
// .ts > tsc > .js

// 10. Installing TypeScript
// using Node.js + npm.
// First check whether Node.js is installed:
// node -v / npm -v
// If both return versions, Node.js and npm are available.

// Then install TypeScript globally:
//     npm install -g typescript
// Check:
// tsc -v

// 11. Create our first TypeScript project
// Create a folder:
//     typescript-day1
// Inside the folder create:
//     app.ts
// Write:
//     let name: string = "Megha";
//     let age: number = 25;

//     console.log(name);
//     console.log(age);

// 12. Compile the TypeScript file
// Open the terminal inside the project folder.
// Run:
//     tsc app.ts 
// TypeScript will generate:
//     app.js

// 13. Running the JavaScript
//      node app.js

// The complete flow is:
// app.ts > tsc > app.js > node = OUTPUT

// 14. Compile-time vs Runtime
// Compile time  = The time when TypeScript checks/transforms your code.

// For example:
//     let age: number = "hello";
//     TypeScript can identify the type mismatch.

// Runtime = The time when the JavaScript program is actually executing.

// Write code > TypeScript checks code > Compile/transpile > JavaScript > Run application

// "TypeScript helps us find many problems before the program runs."
// But it doesn't TypeScript catches all errors.

// 15. What is tsconfig.json?
//     When a TypeScript project becomes bigger, we don't want to repeatedly write:

// tsc app.ts
// tsc student.ts
// tsc product.ts

// Instead, we create:
//     tsconfig.json
// This file tells TypeScript:
//     How should you compile my project?

// 16. Creating tsconfig.json
// Inside the project:
// typescript-day1/
// src/
//    app.ts
// tsconfig.json

// We can generate a configuration file using:
// tsc --init
// This creates:
//     tsconfig.json

// 17. Basic tsconfig.json

// {
//   "compilerOptions": {
//     "rootDir": "./src",
//     "outDir": "./dist",
//     "module": "commonjs",
//     "target": "es2025",
//     "strict": true
//   }
// }

// target = "target": "es2025"
// This tells TypeScript approximately: "What JavaScript version should I generate?"

// 18. module
// "module": "commonjs" = This controls the module system used in generated JavaScript.

// 19. rootDir
// "rootDir": "./src" = "My TypeScript source files are inside the src folder."

// 20. outDir
// "outDir": "./dist" = "Put the generated JavaScript files inside dist."

// 21. strict
// "strict": true = This enables strict type checking.

// 22. Compile the complete project
// Once we have tsconfig.json, instead of:
// tsc app.ts
// we can use:
// tsc


// 23. TypeScript doesn't run in the browser


// 24.  exercise
// create: student.ts
// student name , student age, course , isactive



// Write:
//     let studentName: string = "Rahul";
//     let studentAge: number = 21;
//     let course: string = "Python Full Stack";
//     let isActive: boolean = true;

//     console.log(studentName);
//     console.log(studentAge);
//     console.log(course);
//     console.log(isActive);

// Then compile:
//     tsc student.ts
// Run:
// node student.js

// 25. Error exercise
// Ask students:
//     let age: number = 25;

//     age = "twenty five";

// Ask:
//     What do you think will happen?
// Then compile:
// tsc app.ts

// 31. Day 1 mini assignment
// Create a file:
//     employee.ts
// Declare:
//     employeeName
//     employeeAge
//     employeeSalary
//     employeeDepartment
//     isPermanent
//     Give appropriate types.
// Print all values.








// For example:
//     let employeeName: string = "Arun";
//     let employeeAge: number = 28;
//     let employeeSalary: number = 35000;
//     let employeeDepartment: string = "Development";
//     let isPermanent: boolean = true;








// 32. Questions
// Q1. What is TypeScript?
// TypeScript is a superset of JavaScript that adds static typing and other features to JavaScript.

// Q2. Can browsers directly execute TypeScript?
// Generally, no. TypeScript is transformed/compiled into JavaScript, which the browser executes.

// Q3. What is tsc?
// tsc is the TypeScript compiler.

// Q4. What is transpilation?
// It is the process of transforming TypeScript code into JavaScript code.

// Q5. What is tsconfig.json?
// It is the configuration file that specifies how TypeScript should compile a project.

// Q6. What is the difference between .ts and .tsx?
// .ts is used for TypeScript code, while .tsx is used for TypeScript code that contains JSX.


// 1. TypeScript is a superset of JavaScript.
// 2. TypeScript adds a type system.
// 3. TypeScript helps catch many errors before runtime.
// 4. TypeScript code is transformed into JavaScript.
// 5. tsc = TypeScript Compiler.
// 6. tsconfig.json = configuration for a TypeScript project.