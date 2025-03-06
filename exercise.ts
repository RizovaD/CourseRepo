// Exercise One

// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string;
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface
const country: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 70000000,
  language: "bulgarian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it
function displayCountryDetails(country: Country): string {
  return `The capital of ${country.name} is ${country.capital}.
  The official language is ${country.language} and the population of ${country.population} people`;
}

const countryDetails = displayCountryDetails(country);
console.log(countryDetails);

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}
// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = { id: 13, name: "Donika", age: 45, grade: 5 };
const studentTwo: Student = { id: 10, name: "Tosho", age: 15, grade: 4 };
const studentThree: Student = { id: 11, name: "ivo", age: 20, grade: 6 };

// Step Three: Declare array "students" with objects of type "Student"

let studentsArr: Student[] = [studentOne, studentTwo, studentThree];

// students.map((student) => {
//   if (student.name === "Pupi") {
//     student.grade = 3;
//   }

// console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentsNames = getStudents(studentsArr);
console.log("studentsNames", studentsNames);

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
