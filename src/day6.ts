//Interfaces vs Type Aliases for Complex Objects & API Data

// Interface Declaration Merging
// This is a special feature of interfaces.
// You can declare the same interface multiple times.

// interface User {
//     id: number;
// }

// interface User {
//     name: string;
// }

// combines them.

// The final interface becomes:

// interface User {
//     id: number;
//     name: string;
// }

// const user: User = {
//     id: 1,
//     name: "Miya"
// };

// This is called: Declaration Merging

// A normal type alias cannot be declared twice with the same name.

// type User = {
//     id: number;
// };

// type User = {
//     name: string;
// };

// This produces an error because User has already been declared.

// Complex Nested Objects
// This is where both interfaces and types become very useful.

// Suppose an API returns:
// {
//     "id": 101,
//     "name": "Rahul",
//     "email": "rahul@gmail.com",
//     "address": {
//         "city": "Calicut",
//         "state": "Kerala"
//     }
// }

// We can define:

// interface Address {
//     city: string;
//     state: string;
// }

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     address: Address;
// }

// Then:

// const user: User = {
//     id: 101,
//     name: "Rahul",
//     email: "rahul@gmail.com",
//     address: {
//         city: "Calicut",
//         state: "Kerala"
//     }
// };

// API Data Example

// Imagine an API returns:
// [
//     {
//         "id": 1,
//         "name": "John",
//         "email": "john@gmail.com"
//     },
//     {
//         "id": 2,
//         "name": "Sara",
//         "email": "sara@gmail.com"
//     }
// ]

// Create an interface:
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }


// const users: User[] = [
//     {
//         id: 1,
//         name: "John",
//         email: "john@gmail.com"
//     },
//     {
//         id: 2,
//         name: "Sara",
//         email: "sara@gmail.com"
//     }
// ];

// Now TypeScript understands the API data structure.

// API Response with Nested Data
// Suppose the API returns:
// {
//     "success": true,
//     "message": "Users fetched successfully",
//     "data": [
//         {
//             "id": 1,
//             "name": "John",
//             "email": "john@gmail.com"
//         }
//     ]
// }

// We can model it like this:

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// interface UserResponse {
//     success: boolean;
//     message: string;
//     data: User[];
// }

// Now:

// const response: UserResponse = {
//     success: true,
//     message: "Users fetched successfully",
//     data: [
//         {
//             id: 1,
//             name: "John",
//             email: "john@gmail.com"
//         }
//     ]
// };


// 14. Optional Properties
// Sometimes an API property may not always exist.

// For example:
// {
//     "id": 1,
//     "name": "John"
// }

// Another response might contain:
// {
//     "id": 1,
//     "name": "John",
//     "phone": "9876543210"
// }

// We can make phone optional:

// interface User {
//     id: number;
//     name: string;
//     phone?: string;
// }

// const user1: User = {
//     id: 1,
//     name: "John"
// };
// const user2: User = {
//     id: 2,
//     name: "Sara",
//     phone: "9876543210"
// };

// Readonly Properties
// Sometimes we don't want a property to be changed.

// interface User {
//     readonly id: number;
//     name: string;
// }

// const user: User = {
//     id: 1,
//     name: "John"
// };

// user.name = "David";
// user.id = 10;

// Functions Inside Interfaces
// Interfaces can describe methods.

// interface User {
//     id: number;
//     name: string;

//     greet(): void;
// }

// Implementation:

// const user: User = {
//     id: 1,
//     name: "John",

//     greet() {
//         console.log("Hello");
//     }
// };

// Another syntax:

// interface User {
//     id: number;
//     name: string;
//     greet: () => void;
// }

// Type Aliases for Function Types
// Types are particularly convenient for function types.

// type Add = (a: number, b: number) => number;

// const add: Add = (a, b) => {
//     return a + b;
// };

// console.log(add(10, 20));


// Intersection Types
// Intersection combines multiple types.

// type Person = {
//     name: string;
// };

// type Employee = {
//     employeeId: number;
// };

// type EmployeeDetails = Person & Employee;

// const employee: EmployeeDetails = {
//     name: "Rahul",
//     employeeId: 101
// };

// console.log(employee)



// Suppose you're building a React application that displays students from an API.

// Step 1 — Define the API model
// interface Student {
//     id: number;
//     name: string;
//     email: string;
//     course: string;
// }
// Step 2 — Create state
// const [students, setStudents] = useState<Student[]>([]);

// Now TypeScript knows:

// students
//    ↓
// Student[]
//    ↓
// Student
//    ├── id
//    ├── name
//    ├── email
//    └── course
// Step 3 — Fetch API data
// const fetchStudents = async () => {
//     const response = await fetch(
//         "https://example.com/api/students"
//     );

//     const data: Student[] = await response.json();

//     setStudents(data);
// };

// This gives us type safety when working with API data.

// 24. API Response + React

// Suppose the API response is:

// {
//     "success": true,
//     "data": [
//         {
//             "id": 1,
//             "name": "John",
//             "email": "john@gmail.com"
//         }
//     ]
// }

// Define:

// interface Student {
//     id: number;
//     name: string;
//     email: string;
// }

// interface StudentResponse {
//     success: boolean;
//     data: Student[];
// }

// Then:

// const response = await fetch(
//     "https://example.com/api/students"
// );

// const result: StudentResponse = await response.json();

// console.log(result.data);

// Now TypeScript understands that:

// result.success

// is a boolean and:

// result.data

// is:

// Student[]


// 25. Real-World Complex API Example
// Consider an e-commerce API:

// {
//     "id": 101,
//     "name": "Laptop",
//     "price": 75000,
//     "category": {
//         "id": 1,
//         "name": "Electronics"
//     },
//     "reviews": [
//         {
//             "id": 1,
//             "rating": 5,
//             "comment": "Excellent"
//         }
//     ]
// }

// We can model this cleanly:

// interface Category {
//     id: number;
//     name: string;
// }

// interface Review {
//     id: number;
//     rating: number;
//     comment: string;
// }

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     category: Category;
//     reviews: Review[];
// }

// const data: Product = await response.json();

// 29. Recommended Practice Exercise
// Create a Student Management API model.
// Requirement
// Create:
    // Address
    // Student
    // Course
    // StudentResponse

// Example structure:

// interface Address {
//     city: string;
//     state: string;
// }

// interface Course {
//     id: number;
//     name: string;
// }

// interface Student {
//     id: number;
//     name: string;
//     email: string;
//     address: Address;
//     courses: Course[];
// }

// interface StudentResponse {
//     success: boolean;
//     message: string;
//     data: Student[];
// }

// Then create:

// const response: StudentResponse = {
//     success: true,
//     message: "Students fetched successfully",
//     data: [
//         {
//             id: 1,
//             name: "Rahul",
//             email: "rahul@gmail.com",

//             address: {
//                 city: "Calicut",
//                 state: "Kerala"
//             },

//             courses: [
//                 {
//                     id: 101,
//                     name: "Python Full Stack"
//                 },
//                 {
//                     id: 102,
//                     name: "React"
//                 }
//             ]
//         }
//     ]
// };

// This single example teaches nested interfaces, arrays, API response typing, and complex objects together.