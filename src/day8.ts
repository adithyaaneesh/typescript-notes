// // 1. What are Utility Types?
// // TypeScript provides built-in utility types that allow us to
// //  transform existing types.
// // For example:
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// // Instead of creating another interface manually, we can use utility types:

// // Partial<User>
// // Pick<User, "name" | "email">
// // Omit<User, "id">

// // Simple definition
// // Utility Types are predefined TypeScript types used to create new types by 
// // transforming existing types.

// // 2. Partial<T>
// // Partial<T> makes all properties optional.

// // Original type
// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// const user: User = {
//     id: 1,
//     name: "Miya",
//     email: "miya@gmail.com"
// };

// // All properties are required.

// // Using Partial
// const updateUser: Partial<User> = {
//     name: "Rahul",
//     email:"example@gmail.com"
// };

// console.log(updateUser)

// // Partial<User> changes the type to approximately:
// // {
// //     id?: number;
// //     name?: string;
// //     email?: string;
// // }

// // So we can provide any combination of properties.
// const user1: Partial<User> = {
//     name: "Rahul"
// };

// const user2: Partial<User> = {
//     email: "rahul@gmail.com"
// };

// const user3: Partial<User> = {
//     name: "Rahul",
//     age: 25 
// };
// console.log(user3)


// // 3. Pick<T, K>
// // Pick allows us to select specific properties from an existing type.
// // Syntax:
// // Pick<Type, Keys>

// // Example:
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// // We can use:
// type UserContact = Pick<User, "name">;

// // Now UserContact becomes:
// type UserContact = {
//     name: string;
//     email: string;
// };

// // Usage:
// // const user: UserContact = {
// //     name: "Miya",
// // };

// // console.log(user)

// // This is invalid:
// const user: UserContact = {
//     name: "Miya",
//     email: "miya@gmail.com",
//     age: 25 
// };
// console.log(user)


// // Multiple properties with Pick
// // type UserBasicInfo = Pick<User, "id" | "name">;

// // Result:
// // type UserBasicInfo = {
// //     id: number;
// //     name: string;
// // };

// // Pick = Pick what you want

// // 4. Omit<T, K>
// // Omit does almost the opposite of Pick.
// // It creates a new type by removing specific properties.
// // Syntax:
// // Omit<Type, Keys>

// // Example:
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// // Suppose we don't want to expose the password.
// type PublicUser = Omit<User, "password">;

// // // Usage:
// const user: PublicUser = {
//     id: 1,
//     name: "Miya",
//     email: "miya@gmail.com",
// };
// console.log(user)

// // This would be an error:
// const user: PublicUser = {
//     id: 1,
//     name: "Miya",
//     email: "miya@gmail.com",
//     password: "12345" 
// };

// // 5. Pick vs Omit
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// // Pick - Keep only these properties.
// // type UserInfo = Pick<User, "name" | "email">;

// // Result:
// // {
// //     name: string;
// //     email: string;
// // }

// // Omit -Remove these properties.
// // type UserInfo = Omit<User, "password">;

// // Result:
// // {
// //     id: number;
// //     name: string;
// //     email: string;
// // }


// // Partial	= Make everything optional
// // Pick	= Keep selected properties
// // Omit = Remove selected properties


// // Combining Utility Types
// // Example:
// interface User {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }

// // Suppose we want only name and email, and both should be optional.
// type UpdateUser = Partial<Pick<User, "name" | "email">>;

// // Now:
// // const user1: UpdateUser = {};
// const user2: UpdateUser = {name: "Rahul"};
// const user3: UpdateUser = {email: "rahul@gmail.com"};
// const user4: UpdateUser = {
//     name: "Rahul",
//     email: "rahul@gmail.com"
// };
// console.log(user4)

// // 7. Example
// // Imagine an e-commerce application:
// // interface Product {
// //     id: number;
// //     name: string;
// //     price: number;
// //     category: string;
// //     description: string;
// // }

// // For displaying product card
// // We only need:
// // type ProductCard = Pick<Product, "name" | "price">;

// // For updating a product
// // type ProductUpdate = Partial<Product>;

// // For public product data without internal ID
// // type ProductData = Omit<Product, "id">;

// // 8. Task
// // Questions
// // interface Employee {
// //     id: number;
// //     name: string;
// //     email: string;
// //     salary: number;
// //     department: string;
// // }
// //1. Create a type where all properties are optional.
// //2. Create a type containing only name and department.
// //3. Create a type without salary.
// //4. Create a type containing only name and email, and make them optional.


// // Partial makes properties optional
// // Pick selects properties
// // Omit removes properties from an existing type.


// // type EmployeeUpdate = Partial<Employee>;
// // type EmployeeBasic = Pick<Employee, "name" | "department">;
// // type EmployeePublic = Omit<Employee, "salary">;
// // type EmployeeContact = Partial<Pick<Employee, "name" | "email">>;