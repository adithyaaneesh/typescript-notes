// //  Arrays, Tuples & Enums

// // 1. Arrays in TypeScript
// // An array stores multiple values in a single variable.

// // JS
// let num = [10, 20, 30, 40];

// // In TS:
// let numbers: number[] = [10, 20, 30, 40];

// // 2. String Array
// let students: string[] = [
//     "Rahul",
//     "Arun",
//     "Meera"
// ];

// // access values using index number:

// console.log(students[0]);
// console.log(students[1]);


// // 3. Another Way to Define Arrays
// // TypeScript provides another syntax:

// let numbers: Array<number> = [10, 20, 30];

// // Both are equal:


// // 4. Type Safety in Arrays
// let marks: number[] = [80, 75, 90];
// marks.push(95);

// // marks.push("100"); // raise error


// // 5. Array Methods
// // Normal JS array methods work in TS.

// // 1. push()
// // Adds an element.

// let numbers: number[] = [10, 20, 30];
// numbers.push(40);
// // console.log(numbers);

// // 2. pop()
// // Removes the last element.

// numbers.pop();

// // 3. shift()
// // Removes the first element.

// numbers.shift();

// // 4. unshift()
// // Adds an element to the beginning.

// numbers.unshift(5);

// // 6. for of With Arrays
// let stud: string[] = [
//     "Rahul",
//     "Arun",
//     "Meera"
// ];

// for (let s of stud) {
//     console.log(s);
// }

// // 7. map() In TS
// let numbers: number[] = [1, 2, 3, 4, 5];
// let modified: number[] = numbers.map(
//     (num: number): number => {
//         return num * 2;
//     }
// );
// console.log(modified);

// // 8. filter() In ts
// let numbers: number[] = [10, 15, 20, 25, 30];

// let result: number[] = numbers.filter(
//     (num: number): boolean => {
//         return num > 20;
//     }
// );

// console.log(result);

// // 9. Readonly Arrays

// const num: readonly number[] = [10, 20, 30];
// numbers.push(40); 

// // 10. Mixed-Type Arrays

// let data: (string | number)[] = [
//     "Rahul",
//     25,
//     "Python",
//     100
// ];

// data.push(true); 

// // 11. Tuples
// // A tuple is different from a normal array.
// // A tuple allows us to specify: the exact number and order of elements.

// // Example:
// let student: [string, number] = [
//     "Rahul",
//     22
// ];

// console.log(student[0]);  // return string.
// console.log(student[1]);  // return number.

// // 12. Tuple Example
// let employee: [string, number, string] = [
//     "Miya",
//     25,
//     "Developer"
// ];

// // 13. Array vs Tuple
// // Array
// let numbers: number[] = [10, 20, 30, 40];

// // Number of elements can vary.

// // Tuple
// let student: [string, number] = [
//     "Rahul",
//     22
// ];

// // Structure is fixed.

// // Array	                                 Tuple
// // Multiple values of a type	        Fixed structure
// // Number of elements can vary	        Fixed positions
// // number[]                         	[string, number]
// // Same general type	                Can have different types

// // 14. Optional Tuple Elements
// // A tuple can have an optional element.
// let s: [string, number, string?];

// s = ["Rahul", 22];
// s = ["Rahul", 22, "Python"];

// // 15. Named Tuples
// let student_details: [
//     name: string,
//     age: number,
//     course?: string
// ] = [
//     "Rahul",
//     22,
//     "Python"
// ];

// // 16. Enums
// // An enum is used to define a set of named choice.

// // For example:
// enum Direction {
//     North,
//     South,
//     East,
//     West
// }

// console.log(Direction.North);
// console.log(Direction.South);

// // 17. Numeric Enum  (takes default values)
// enum Status {
//     Pending,
//     Approved,
//     Rejected
// }

// let currentStatus: Status = Status.Pending;
// console.log(currentStatus);  

// // 18. Custom Enum Values

// enum Status {
//     Pending = 1,
//     Approved = 2,
//     Rejected = 3
// }

// console.log(Status.Approved);

// // 19. String Enum
// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Developer = "DEVELOPER"
// }

// let userRole: Role = Role.Developer;
// console.log(userRole);

// // 20. Practice Student Status
// // enum StudentStatus {
// //     Active = "ACTIVE",
// //     Inactive = "INACTIVE",
// //     Completed = "COMPLETED"
// // }

// // let status: StudentStatus = StudentStatus.Active;
// // console.log(status);

// // 21. Enum With Function
// // We can pass an enum to a function.

// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Tester = "TESTER"
// }

// function checkRole(role: Role): void {
//     console.log(`Current role: ${role}`);
// }

// checkRole(Role.Tester);

// // example 2: 
// // enum Role {
// //     Admin = "ADMIN",
// //     User = "USER",
// //     Tester = "TESTER"
// // }

// // function checkRole(role: Role): void {
// //     if (role == Role.Admin){
// //         console.log(`This control permission is allowed for: ${role}`);
// //     }else if(role == Role.Tester){
// //         console.log(`This test permission is allowed for: ${role}`);
// //     }else{
// //         console.log(`This user permission is allowed for: ${role}`);
// //     }
// // }

// // checkRole(Role.User);

// // 22. array + tuple + enum + function. Example

// // enum Status {
// //     Active = "ACTIVE",
// //     Inactive = "INACTIVE"
// // }

// // let students: [string, number, Status][] = [
// //     ["Rahul", 22, Status.Active],
// //     ["Meera", 21, Status.Inactive],
// //     ["Arun", 23, Status.Active]
// // ];

// // const displayStudents = (students: [string, number, Status][]) => {
// //     for (let student of students) {
// //         console.log( `Name: ${student[0]}`);
// //         console.log(`Age: ${student[1]}`);
// //         console.log(`Status: ${student[2]}`);
// //     }
// // }

// // displayStudents(students);






// //Practical Exercises
// // Exercise 1 – Number Array
// // Create an array containing 10 numbers and:
// // print all numbers
// // find the largest number
// // find the smallest number
// // calculate the total

// // Exercise 2 – String Array
// // Create:
// // let fruits: string[] = [];
// // Add:
// // Apple ,Mango, Orange, Banana, Grapes
// // Then display them using a loop.

// // Exercise 3 – Even Numbers
// // let numbers: number[] = [
// //     10, 15, 20, 25, 30, 35, 40
// // ];

// // Exercise 4 
// // Given:
// // let prices: number[] = [100,200,300,400];
// // increase every price by 10%.

// // Exercise 5
// // Create a tuple containing:
// // Student name
// // Age
// // Course

// // Exercise 6
// // Create a tuple:
// // Employee ID
// // Employee Name
// // Salary

// // Exercise 7
// // Create an enum:
// // Pending
// // Approved
// // Rejected
// // Then create a variable containing one status.

// // Exercise 8 - Challenge

// // Create a Employee management structure using:
// // enum
// // array
// // tuple
// // function

// // Expected output:

// // EmployeName: John Doe
// // Salary: 22
// // Designation: Python
// // Status: Active
