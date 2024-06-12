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

function isEven(num: number): boolean {
  return num % 2 === 0;
}
// console.log(isEven(11));
const isDivisible = (num: number): boolean => num % 4 === 0 && num % 8 === 0;
// console.log(isDivisible(20));

const bigNum1: bigint = 9007199254740999n;
const bigNum2: bigint = 9007199254740991n;
const difference: bigint = bigNum1 - bigNum2;
const bigNumMake: bigint = BigInt(2 ** 54);
// console.log(bigNumMake);

let vAny: any = 10; // We can assign anything to any
let vUnknown: unknown = "10"; // We can assign anything to unknown just like any
let s1: string = vAny; // Any is assignable to anything
// let s2: string = vUnknown; // it shows an error

// optional parameter
function introduceMe(name: string, id?: number): string {
  return id
    ? `Hello, I am ${name} and my id is ${id}.`
    : `Hello, I am ${name}!`;
}

// console.log(introduceMe("Mobin"));
// console.log(introduceMe("Mobin", 1130947042));

// Array
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2: number[] = new Array(1, 3, 5, 7, 9);
const arr3: string[] = Array.of("S", "M", "T", "W", "T", "F", "S");

const mapVal: boolean[] = arr1.map((el: number) => {
  return el % 2 === 0;
});
// console.log(mapVal);
