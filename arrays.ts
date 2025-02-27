let numbersArray: number[] = [1, 2, 3, 4, 5];
let stringsArray: string[] = ["apple", "Bannana", "Pear", "Peach", "Grape"];
let stringAndNumber: (number | string)[] = ["Pesh", "Gosho", 2, "3"];

let fruits: string[] = ["apple", "Bannana", "Pear", "Peach", "Grape"];
let frutiesE1: string = fruits[1];
let secondE2: string = fruits[3];

//add to array
fruits.push("mango");

//delete last element from array
numbersArray.pop();
console.log("fruits", fruits);

// delete from first position
fruits.shift();

//added in first positon
numbersArray.unshift(5);

//method MAP

let multiplNumbers = numbersArray.map((element) => element * 2);

console.log("multyplayNumbers", multiplNumbers);

let multyplayNumbers = numbersArray.map((element: number) => {
  {
    if (element > 2) {
      return element * 2;
    } else {
      return element;
    }
  }
});

let filterNumsArray = numbersArray.filter((element) => element > 2);
