"use strict";
// add 2 number
const sum = (num1, num2) => {
    return num1 + num2;
};
// console.log(sum(12, 10));
const longText = "A quick brown fox jumps over the lazy dog";
const shortText = longText.substring(0, 17);
// console.log(shortText);
const isEqual = longText == shortText;
// console.log(isEqual);
// console.log(typeof isEqual);
const productCode = "SD-109";
const price = 2490;
const productDetails = `The price of "${productCode}" is: ${price}`;
// console.log(productDetails);
const bigNum1 = 9007199254740999n;
const bigNum2 = 9007199254740991n;
const difference = bigNum1 - bigNum2;
const bigNumMake = BigInt(2 ** 54);
// console.log(bigNumMake);
let vAny = 10; // We can assign anything to any
let vUnknown = "10"; // We can assign anything to unknown just like any
let s1 = vAny; // Any is assignable to anything
// let s2: string = vUnknown; // it shows an error
//! Function ..........................................................
function isEven(num) {
    return num % 2 === 0;
}
// console.log(isEven(11));
const isDivisible = (num) => num % 4 === 0 && num % 8 === 0;
// console.log(isDivisible(20));
//* optional parameter
function introduceMe(name, id) {
    return id
        ? `Hello, I am ${name} and my id is ${id}.`
        : `Hello, I am ${name}!`;
}
// console.log(introduceMe("Mobin"));
// console.log(introduceMe("Mobin", 1130947042));
//! Array ..............................................................
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = new Array(1, 3, 5, 7, 9);
const arr3 = Array.of("S", "M", "T", "W", "T", "F", "S");
const mapVal = arr1.map((el) => {
    return el % 2 === 0;
});
// console.log(mapVal);
//! Object .............................................................
const person = {
    name: "Mobin",
    age: 33,
    isDeveloper: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel,
};
const person1 = {
    name: "Mobin",
    age: 33,
    isDeveloper: true,
    stack: "MERN",
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const person2 = {
    name: "Abdullah",
    age: 35,
    isDeveloper: false,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
const student1 = {
    name: "Arshia Tazri",
    age: 8,
    greet: (country) => `Hello, I am ${student1.name} from ${country}`,
};
// console.log(student1.greet("Bangladesh"));
//! enum ..............................................................
// enum allow a property to contain a set of constant value
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "Mobin",
    email: "abcd@gmail.com",
    role: Roles.user,
};
const user2 = {
    name: "Mustakim",
    email: "admin@gmail.com",
    role: Roles.admin,
};
const isAdmin = (user) => {
    const { name, email, role } = user;
    return role === "admin"
        ? `${name} (${email}) is an admin`
        : `${name} (${email}) is not an admin`;
};
const product1 = ["SD-102", 2490, true];
const product2 = ["SD-103", 2290, false];
const getProductDetails = (product) => {
    const [code, price, areSizesAvailable] = product;
    return `Code: ${code}, Price: ${price}, Size available: ${areSizesAvailable ? "Yes" : "No"}`;
};
// console.log(getProductDetails(product1));
// console.log(getProductDetails(product2));
//* here tuples are like array, you can push,pop the element. to prevent this you have to add readonly  before tuples.
product1.push("product details here");
const product3 = ["SD-105", 2290, false];
//product3.push("product details here"); // here throw an error
//! unions ..............................................................
// unions allow you to define multiple types in a single variable or type, where you can use only one type of data.
const modifyUserInput = (userInput) => {
    if (typeof userInput === "number") {
        return userInput * 2;
    }
    else {
        return userInput.toLocaleUpperCase();
    }
};
const employee1 = {
    name: "Abul Hossen",
    age: 30,
    id: 1101,
    department: "Marketing",
};
//! Generics ...................................................................
// generics allow you to create reusable components or function
