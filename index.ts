// first console log
console.log("Hello TypeScript");

//let VS const 

let number: number = 5;
number = 10;
console.log("number", number)

const message: string = 'Welcome'


//String

let welcomeMessage: string = "Hello, Donika!"
let test: string = 'Rizova';

let welcomeMessageLenght = welcomeMessage.length;
console.log("welcomMessageLenght",welcomeMessageLenght);


// String interplolation
let welcommessageDetais: string = `My welcome message lenght is ${welcomeMessageLenght}`;
let userWelcomeMessage: string = `Welcome, ${test}`
console.log(userWelcomeMessage);

// Number 
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operation
let substract = firstNumber - secondNumber;
let add = firstNumber + secondNumber;
let multypl = firstNumber * secondNumber;
let drvide = firstNumber / secondNumber;
console.log("result", add)

// Boolen (true/false)

let isGreater: boolean = firstNumber > secondNumber
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

console.log("Is number or equal to", stringValue);


