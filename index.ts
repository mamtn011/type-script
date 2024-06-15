// add 2 number
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
// console.log(sum(12, 10));

const longText: string = "A quick brown fox jumps over the lazy dog";
const shortText: string = longText.substring(0, 17);
// console.log(shortText);

const isEqual: boolean = longText == shortText;
// console.log(isEqual);
// console.log(typeof isEqual);

const productCode: string = "SD-109";
const price: number = 2490;
const productDetails: string = `The price of "${productCode}" is: ${price}`;
// console.log(productDetails);

const bigNum1: bigint = 9007199254740999n;
const bigNum2: bigint = 9007199254740991n;
const difference: bigint = bigNum1 - bigNum2;
const bigNumMake: bigint = BigInt(2 ** 54);
// console.log(bigNumMake);

let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = "10"; // We can assign anything to unknown just like any
let s1: string = vAny; // Any is assignable to anything
// let s2: string = vUnknown; // it shows an error

//! Function ..........................................................
function isEven(num: number): boolean {
  return num % 2 === 0;
}
// console.log(isEven(11));
const isDivisible: (num: number) => boolean = (num: number): boolean =>
  num % 4 === 0 && num % 8 === 0;
// console.log(isDivisible(20));

//* optional parameter
function introduceMe(name: string, id?: number): string {
  return id
    ? `Hello, I am ${name} and my id is ${id}.`
    : `Hello, I am ${name}!`;
}

// console.log(introduceMe("Mobin"));
// console.log(introduceMe("Mobin", 1130947042));

//! Array ..............................................................
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2: number[] = new Array(1, 3, 5, 7, 9);
const arr3: string[] = Array.of("S", "M", "T", "W", "T", "F", "S");

const mapVal: boolean[] = arr1.map((el: number) => {
  return el % 2 === 0;
});
// console.log(mapVal);

//! Object .............................................................
const person: {
  name: string;
  age: number;
  isDeveloper: boolean;
  address: { city: string; country: string };
} = {
  name: "Mobin",
  age: 33,
  isDeveloper: true,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

//! type alias ..........................................................
//Type Aliases allow defining types with a custom name
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";

const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

type Person = {
  name: string;
  age: number;
  isDeveloper: boolean;
  stack?: string; //*optional property
  address: { city: string; country: string };
};
const person1: Person = {
  name: "Mobin",
  age: 33,
  isDeveloper: true,
  stack: "MERN",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const person2: Person = {
  name: "Abdullah",
  age: 35,
  isDeveloper: false,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

//! call signatures ..................................................
// call signature is simply define type of a function in an object type notation
type Student = {
  name: string;
  age: number;
  greet: (country: string) => string; // method call signature
};

const student1: Student = {
  name: "Arshia Tazri",
  age: 8,
  greet: (country): string => `Hello, I am ${student1.name} from ${country}`,
};
// console.log(student1.greet("Bangladesh"));

//! enum ..............................................................
// enum allow a property to contain a set of constant value
enum Roles {
  user = "user",
  admin = "admin",
}

type LoggedInUser = {
  name?: string;
  email: string;
  role: Roles;
};

const user1: LoggedInUser = {
  name: "Mobin",
  email: "abcd@gmail.com",
  role: Roles.user,
};
const user2: LoggedInUser = {
  name: "Mustakim",
  email: "admin@gmail.com",
  role: Roles.admin,
};

const isAdmin: (user: LoggedInUser) => string = (
  user: LoggedInUser
): string => {
  const { name, email, role } = user;
  return role === "admin"
    ? `${name} (${email}) is an admin`
    : `${name} (${email}) is not an admin`;
};
// console.log(isAdmin(user1));
// console.log(isAdmin(user2));

//! tuples ..............................................................
// tuples allow you to store a fixed-sized collection of element. they are similar to array. the types of tuples elements are fixed and declared at the time of creation.

type ProductInfo = [string, number, boolean];
const product1: ProductInfo = ["SD-102", 2490, true];
const product2: ProductInfo = ["SD-103", 2290, false];

const getProductDetails: (product: ProductInfo) => string = (
  product: ProductInfo
): string => {
  const [code, price, areSizesAvailable] = product;
  return `Code: ${code}, Price: ${price}, Size available: ${
    areSizesAvailable ? "Yes" : "No"
  }`;
};
// console.log(getProductDetails(product1));
// console.log(getProductDetails(product2));

//* here tuples are like array, you can push,pop the element. to prevent this you have to add readonly  before tuples.

product1.push("product details here");
// console.log(product1);
type ProductInfoReadonly = readonly [string, number, boolean];
const product3: ProductInfoReadonly = ["SD-105", 2290, false];
//product3.push("product details here"); // here throw an error

//! unions ..............................................................
// unions allow you to define multiple types in a single variable or type, where you can use only one type of data.
const modifyUserInput: (userInput: string | number) => string | number = (
  userInput: string | number
) => {
  if (typeof userInput === "number") {
    return userInput * 2;
  } else {
    return userInput.toLocaleUpperCase();
  }
};

// console.log(modifyUserInput(10));
// console.log(modifyUserInput("mustakim al mobin"));
//console.log(modifyUserInput(true)); // here throw an error

//! intersections ..............................................................
// intersections allow you to define multiple types in a single type, where you must to use all types of data.

type People = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  department: string;
};

type EmployeeDetails = People & Employee;

const employee1: EmployeeDetails = {
  name: "Abul Hossen",
  age: 30,
  id: 1101,
  department: "Marketing",
};

//! Generics ...................................................................
// generics allow you to create reusable components or functions that can work with multiple data types
function logAndReturn<T>(value: T): T {
  return value;
}
const val1 = logAndReturn(23);
const val2 = logAndReturn("Hello World");
//* we can define type for generic when  passing argument
const numVal = logAndReturn<number>(23);
const stringVal = logAndReturn<string>("Hello World");
//* we can use multiple type in generics
const add = <T, U>(val1: T, val2: U) => {
  return { val1, val2 };
};
const result = add<number, string>(12, "hello");
// console.log(result);
//* we can fixed a type for generic using extends keyword
const addId = <Type extends object>(obj: Type) => {
  const id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};
const user = {
  name: "Abul Mia",
  age: 30,
};
const user3 = addId(user);

//! Interfaces ...................................................................
// interfaces are very similar to alias, and in many cases you can choose between them freely. Almost all features of an interface are available in type.
interface Myself {
  name: string;
  age: number;
}

const Mobin: Myself = {
  name: "Mobin",
  age: 33,
};
//* interface can extend another interface
interface MyDetails extends Myself {
  isDeveloper: boolean;
  stack: string;
}
const myDetails: MyDetails = {
  name: "Mobin",
  age: 33,
  isDeveloper: true,
  stack: "MEARN",
};
