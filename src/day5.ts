// // TypeScript –Objects, Type Aliases & Interfaces

// // 1. Objects in TypeScript
// // In js

// // let student = {
// //     name: "Rahul",
// //     age: 22,
// //     course: "Python"
// // };

// // In ts.
// let student: {
//     name: string;
//     age: number;
//     course: string;
// } = {
//     name: "Rahul",
//     age: 22,
//     course: "Python"
// };


// // 2. Accessing Object Properties

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);



// //modify properties:

// student.age = 23;
// console.log(student.age);

// // 3. Type Safety in Objects

// // Consider:

// let student: {
//     name: string;
//     age: number;
// } = {
//     name: "Rahul",
//     age: 22
// };

// student.age = 23;
// student.age = "Twenty Three";

// // 4. Adding New Properties

// let student: {
//     name: string;
//     age: number;
// } = {
//     name: "Rahul",
//     age: 22
// };

// student.course = "Python";  //not allowed

// // object type doesn't contain a course property.

// // 5. Optional Properties

// // Sometimes an object property may or may not exist.

// // We use ?.

// let student: {
//     name: string;
//     age: number;
//     course?: string;
// } = {
//     name: "Rahul",
//     age: 22
// };

// // Here course is optional.

// // let student2: {
// //     name: string;
// //     age: number;
// //     course?: string;
// // } = {
// //     name: "Arun",
// //     age: 23,
// //     course: "Python"
// // };

// // 6. Readonly Properties
// // Suppose we don't want the student ID to be changed.

// let student: {
//     readonly id: number;
//     name: string;
// } = {
//     id: 101,
//     name: "Rahul"
// };

// // This is allowed:
// student.name = "Arun";
// // console.log(student)

// student.id = 102;  // error

// // 7. Nested Objects

// // Objects can contain other objects.

// let student: {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         pincode: number;
//     };
// } = {
//     name: "Rahul",
//     age: 22,
//     address: {
//         city: "Calicut",
//         pincode: 673001
//     }
// };

// // Access:
// console.log(student.name)
// console.log(student.address.city);
// console.log(student.address.pincode);

// // 8. Object With Array

// let student: {
//     name: string;
//     skills: string[];
// } = {
//     name: "Rahul",
//     skills: [
//         "Python",
//         "Django",
//         "React"
//     ]
// };

// // Access
// console.log(student.skills[0]);

// // 9. Object With Function

// // An object can also contain a function.

// let student: {
//     name: string;
//     greet: () => string;
// } = {
//     name: "Rahul",

//     greet: () => {
//         return "Hello Rahul";
//     }
// };

// // Calling:

// console.log(student.greet());

// // 10. Why Do We Need Type Aliases?
// // {
// //     name: string;
// //     age: number;
// //     course: string;
// // }

// // Suppose we need it in 10 places. Writing the same structure repeatedly is inconvenient.

// // Instead, we can create a type alias.

// // 11. Type Alias

// // Syntax:

// // type TypeName = {
// //     property: type;
// // };

// // Example:

// type Student = {
//     name: string;
//     age: number;
//     course: string;
// };

// // Now we can use it:

// let name : string ;
// let student1: Student = {
//     name: "Rahul",
//     age: 22,
//     course: "Python"
// };

// let student2: Student = {
//     name: "Meera",
//     age: 21,
//     course: "Data Analytics"
// };


// // 12. Type Alias With Function
// type Student = {
//     name: string;
//     age: number;
//     course: string;
// };

// let displayStudent = (student: Student): void => {
//     console.log(student.name);
//     console.log(student.age);
//     console.log(student.course);
// }

// // Call:

// displayStudent({
//     name: "Rahul",
//     age: 22,
//     course: "Python"
// });


// // 13. Type Alias With Optional Property
// type Student = {
//     name: string;
//     age: number;
//     course?: string;
// };


// let s1: Student = {
//     name: "Rahul",
//     age: 22
// };
// let s2: Student = {
//     name: "Meera",
//     age: 21,
//     course: "Python"
// };

// // console.log(s1)

// // 14. Type Alias With readonly
// type Student = {
//     readonly id: number;
//     name: string;
//     age: number;
// };

// // Example:

// let student: Student = {
//     id: 101,
//     name: "Rahul",
//     age: 22
// };


// // console.log(student.name)

// // 15. Type Alias With Arrays
// // type Student = {
// //     name: string;
// //     skills: string[];
// // };

// // Example:

// // let student: Student = {
// //     name: "Rahul",
// //     skills: [
// //         "Python",
// //         "Django",
// //         "React"
// //     ]
// // };

// // 16. Union Types
// // A union allows a value to have more than one possible type.

// let id: string | number;

// id = 101;
// id = "ST101";

// // 17. Union Type With Type Alias

// type ID = string | number;

// let studentId: ID;

// studentId = 101;
// studentId = "ST101";



// // 18. Interfaces
// // An interface is another way to define the structure of an object.

// interface Student {
//     name: string;
//     age: number;
//     course: string;
// }

// // Now:

// let student: Student = {
//     name: "Rahul",
//     age: 22,
//     course: "Python"
// };


// let std2 : Student= {
//     name:"Miya",
//     age:23,
//     course:"PFS"

// }

// // 20. Interface With Optional Property
// interface Student {
//     name: string;
//     age: number;
//     course?: string;
// }

// Now:

// let student: Student = {
//     name: "Rahul",
//     age: 22
// };

// // is valid.

// // 21. Interface With readonly
// interface Student {
//     readonly id: number;
//     name: string;
//     age: number;
// }

// // Example:

// let student: Student = {
//     id: 101,
//     name: "Rahul",
//     age: 22
// };

// // This is invalid:

// student.id = 102;

// // 22. Interface With Function

// interface Student {
//     name: string;
//     age: number;
//     greet(): string;
// }

// // Implementation:

// let student: Student = {
//     name: "Rahul",
//     age: 22,

//     greet(): string {
//         return `Hello ${this.name}`;
//     }
// };

// // Calling:

// console.log(student.greet());

// // 23. Interface Extension

// // One interface can extend another.

// interface Person {
//     name: string;
//     age: number;
// }

// // Now:

// interface Student extends Person {
//     course: string;
// }

// // Example:

// let student: Student = {
//     name: "Rahul",
//     age: 22,
//     course: "Python"
// };


// // 24. Multiple Interface Extension
// interface Person {
//     name: string;
// }

// interface Employee {
//     employeeId: number;
// }

// interface Trainer extends Person, Employee {
//     subject: string;
// }

// // Now:

// let trainer: Trainer = {
//     name: "Megha",
//     employeeId: 101,
//     subject: "Python"
// };

// // 25. type vs interface

// // Both can describe objects.

// // Type
// // type Student = {
// //     name: string;
// //     age: number;
// // };

// // Interface
// // interface Student {
// //     name: string;
// //     age: number;
// // }

// // Both work for basic object structures.

// // Important difference
// // interface can be extended:

// // interface Person {
// //     name: string;
// // }

// // interface Student extends Person {
// //     course: string;
// // }

// // Types can also be combined using intersections:

// type Person = {
//     name: string;
// };

// type Student = Person & {
//     course: string;
// };

// const student: Student = {
//     name: "Rahul",
//     course: "Python"
// };

// // 26. When to Use type?

// // type is very useful for:
// // Union types =  A union means OR.

// // type Status = "active" | "inactive";

// // Primitive aliases = giving a name to an existing primitive type

// // type UserName = string;
// // let name: UserName = "Meera";
// // UserName → string

// // Tuples
// // type StudentData = [string, number];

// // Complex combinations
// // type Admin = Person & {
// //     permissions: string[];
// // };

// // const data: Admin = {
// //     name: "Rahul",
// //     permissions: "Update datas"
// // };

// // 27. When to Use interface?

// // Interfaces are especially useful for defining the structure of objects and classes.

// // interface User {
// //     id: number;
// //     name: string;
// //     email: string;
// // }

// // They are also useful when you want to extend object structures.


// // 28. Array of Objects

// // This is extremely important.

// interface Student {
//     id: number;
//     name: string;
//     age: number;
// }

// // Create multiple students:

// const students: Student[] = [
//     {
//         id: 1,
//         name: "Rahul",
//         age: 22
//     },
//     {
//         id: 2,
//         name: "Meera",
//         age: 21
//     },
//     {
//         id: 3,
//         name: "Arun",
//         age: 23
//     }
// ];


// students.forEach((student: Student) => {
//     console.log(student.name);
// });


// // Now let's combine:

// // Function
// // Array
// // Enum
// // Interface
// // enum Status {
// //     Active = "ACTIVE",
// //     Inactive = "INACTIVE"
// // }

// // interface Student {
// //     id: number;
// //     name: string;
// //     age: number;
// //     status: Status;
// // }

// // const students: Student[] = [
// //     {
// //         id: 1,
// //         name: "Rahul",
// //         age: 22,
// //         status: Status.Active
// //     },
// //     {
// //         id: 2,
// //         name: "Meera",
// //         age: 21,
// //         status: Status.Inactive
// //     }
// // ];

// // function displayStudents(
// //     students: Student[]): void {
// //     students.forEach(
// //         (student: Student) => {
// //             console.log(`ID: ${student.id}`);
// //             console.log(`Name: ${student.name}`);
// //             console.log(`Age: ${student.age}`);
// //             console.log(`Status: ${student.status}`);
// //         }
// //     );
// // }

// // displayStudents(students);
