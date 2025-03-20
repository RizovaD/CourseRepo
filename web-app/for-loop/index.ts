//for ... of Loop

let fruits3: string[] = ["Apple", "Banana", "Peach", "Watermelon"];

//for ... loop acsses only the value not the index
for (let fruit of fruits3) {
  console.log(`The fruits is ${fruit}`);
}

// for ... of over array of numbers
const numbers2: number[] = [10, 20, 30, 40];

for (let number of numbers2) {
  console.log(`${number} + 5 = ${number + 5}`);
}

// for ... of with if else
for (let number of numbers2) {
  if (number > 2) {
    console.log(`Number is ${number}`);
  } else {
    console.log(`${number} + 5 = ${number + 5}`);
  }
}

// for ... of over string
// 1.
let message5: string = "Hello world!";
for (let letter of message5) {
  console.log("letter", letter);
}
// 2.
for (let letter of message5) {
  if (letter === "o") {
    console.log(letter.replace("o", "@"));
  } else {
    console.log(letter);
  }
}

// for ... in over object
interface Student {
  name: string;
  lastName: string;
  age: number;
}

const student: Student = { name: "Donika", lastName: "Rizova", age: 20 };
// accssesing objet value by passing object key as keyof Student

for (let key in student) {
  console.log(`${key} = ${student[key as keyof Student]}`);
}

//for ... in over array
let numsArray: number[] = [35, 25, 45, 50];

//acssesing array value by passing array index

for (let index in numsArray) {
  console.log(`${index} = ${numsArray[index]}`);
}

// for loop
for (let i = 0; i <= 5; i++) {
  console.log(`Interation ${i}`);
}

// for loop over array
let numbersArray: number[] = [35, 25, 45, 50, 35, 25, 45, 50, 45, 50];

for (let i = 0; i <= numbersArray.length; i++){
  console.log(numbersArray[i])

}

//for loop incrementation
for (let i = 0; i < 10; i++) {
 // console.log(i);
}

//for loop decremental
for (let i = 30; i >= 0; i--) {
  //console.log(i);
}





























export {};
