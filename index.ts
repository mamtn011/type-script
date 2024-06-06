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

const isDivisible = (num: number): boolean => num % 4 === 0 && num % 8 === 0;
// console.log(isDivisible(20));

const bigNum1: bigint = 9007199254740999n;
const bigNum2: bigint = 9007199254740991n;
const difference: bigint = bigNum1 - bigNum2;
const bigNumMake: bigint = BigInt(2 ** 54);
// console.log(bigNumMake);
