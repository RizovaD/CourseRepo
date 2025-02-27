//function

function greet(): void {
  console.log("Hello to functions!");
}
greet()

function multtiplyNums(numberOne: number, numberTwo: number): number {
 return numberOne * numberTwo;
}
multtiplyNums(2,5)

function displayGreeting(
  firstName: string, 
  lastName: string, 
  age: number) 
  : string{
  return `Hello, Mr ${lastName}, ${firstName}. You are ${age} years old.`
}
const greeting: string = displayGreeting("Ivan","Ivanov",30);
console.log(greeting);

//optional parameter -  First parameter cannot be optional !!!!

function displayPetInfo(name: string, animal: string, age?: number): string{
return `${name} is ${animal} ${age ? `and is ${age} years old`: ""}.}`
}
console.log(displayPetInfo("Arkadii", "dog", 4));


function substractNumbers(
  firstNum: number = 10, 
  secondNum: number = 5)
  : number{
  return firstNum - secondNum;
}

console.log(substractNumbers(20));






