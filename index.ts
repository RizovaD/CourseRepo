// first console log
//console.log("Hello TypeScript");

//let VS const

let number: number = 5;
number = 10;
//console.log("number", number)

const message: string = "Welcome";

//String

let welcomeMessage: string = "Hello, Donika!";
let test: string = "Rizova";

let welcomeMessageLenght = welcomeMessage.length;
//console.log("welcomMessageLenght",welcomeMessageLenght);

// String interplolation
let welcommessageDetais: string = `My welcome message lenght is ${welcomeMessageLenght}`;
let userWelcomeMessage: string = `Welcome, ${test}`;
//console.log(userWelcomeMessage);

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operation
let substract = firstNumber - secondNumber;
let add = firstNumber + secondNumber;
let multypl = firstNumber * secondNumber;
let drvide = firstNumber / secondNumber;
//console.log("result", add)

// Boolen (true/false)

let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber >= secondNumber;
let areNumbersEqualTo: boolean = 11 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;

// Any

let stringValue: any = "Proba";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 10, 10];

//console.log("Is number or equal to", stringValue);

// Ternary Operator

const isPositiveNum =
  5 > 0 ? "The number is positive" : "The numer is negative";
//console.log(typeof isPositiveNum);

const age: number = 45;
const myName: string = "Donika";
const personalDescription =
  age < 40
    ? `${myName} is younger them 40. She is ${age} years old.`
    : `${myName} is older then 40. She is ${age}`;

const personalName = `Her name is "${myName}".`;

//console.log("personalName", personalName)

// If else Statement

if (age < 40) {
  console.log("Age are lower then 40");
} else {
  //console.log("Age are grater then 40")
}

const num1: number = 400;

if (num1 <= 10) {
  console.log("The number is lower then 10.");
} else if (num1 > 100) {
  console.log("The number is grater than 100.");
} else if (num1 > 80) {
  console.log("The numeber is lower then 100");
} else {
  console.log("The number is between 10 and 100");
}

//Type Alias
type personInfoType = string | number;

const personNameInfo: personInfoType = "Ivan";
const personAnggInf: personInfoType = 25;
