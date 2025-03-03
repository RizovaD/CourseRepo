// 1.Create an array of strings and add a new element at the end of the array. Log the result.

let namesArray: string[] = ["Eli", "Denica", "Gergana"];
namesArray.push("Maria");
console.log("Names", namesArray);

// 2.Create an array of numbers and remove the first element from the array. Log the result.

let digitArray: number[] = [0, 1, 2, 3, 4, 5];
digitArray.shift();
console.log("Digits without the first digit:", digitArray);

// 3. Use the map method to create a new array and divide each number by 2  “num / 2” from [1, 2, 3, 4, 5].  Log the result.

let devideNumbers: number[] = [10, 20, 30, 40, 50];
let devideNumbers2 = devideNumbers.map((element) => element * 2);
console.log("The result of devide is:", devideNumbers2);

// 4. Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.

const numbers: number[] = [3, 7, 1, 9, 12, 4];
const filteredNumbers = numbers.filter((num) => num > 5);
console.log("Numbers greater than 5 are:", filteredNumbers);

// 5. Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.

const numbers3: number[] = [9, 3, 7, 2, 8, 5];
const sortedNumbers = numbers3.sort((a, b) => a - b);
console.log("The sorting array is: ", sortedNumbers);

// 6. Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.

const fruitsArray: string[] = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
];
console.log("The fiirst three fruits are: ", fruitsArray.slice(0, 3));

// 7. Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.

const vehiclesArray: string[] = ["car", "bike", "bus", "train", "boat"];
const removedElements = vehiclesArray.splice(1, 2);
console.log(
  "The new vehicles array without second and third is:",
  vehiclesArray
);

// 8. Write a function named “findLargest” that takes three numbers as //parameters and returns the largest of them.
// Use if/else statement to find the largest number. Log the result.

function findLargest(
  number1: number,
  number2: number,
  number3: number
): number {
  if (number1 >= number2 && number1 >= number3) {
    return number1;
  } else if (number2 >= number1 && number2 >= number3) {
    return number2;
  } else {
    return number3;
  }
}
const largest = findLargest(10, 25, 15);
console.log("The largest number is:", largest);

// 9. Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters.
//Log the result with default parameter and with passed parameter.

function convertToCentimeters(inches: number = 1) {
  const centimeters = inches * 2.54;
  return centimeters;
}

const resultDefault = convertToCentimeters();
console.log(
  `Result with default parameter - One inch is: ${resultDefault} centimeters`
);

const resultCustom = convertToCentimeters(5);
console.log(
  `The result when converting to an incher other than the default: ${resultCustom} centimeters`
);

// 10. Write a function named “calculateArea” that takes a required width parameter and an optional height parameter.
//If height is not provided, assume the shape is a square.

function calculateArea(width: number, height?: number): string {
  if (height === undefined) {
    height = width;
  }

  const area = width * height;
  return `The area is: ${area} square units`;
}

// When missing height - shape is a square
console.log(calculateArea(5));

console.log(calculateArea(5, 10));
