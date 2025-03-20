// Create a TypeScript interface named Person that represents a
// person with the following properties:
//  • name (string)
//  • lastName (string)
//  • age (number)
//  • email (string)
//  • phoneNumber (number)

interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

// 2. Create a TypeScript interface named PersonInfo that
// Extends Person type from the previous exercise and add the
// following properties:
// • country (optional string property)
// • greeting (optional method that return welcome message)

interface PersonalInfo extends Person {
  country?: string;
  greeting?: () => string;
}

// 3. Create an object of type Person using the interface from Exercise 1.
// Declare a variable person1 of type Person.

const person1: Person = {
  name: "Donika",
  lastName: "Rizova",
  age: 45,
  email: "donika.rizova@atscale.com",
  phoneNumber: 1234,
};

console.log(person1);

// 4. Create an object of type PersonInfo using the interface from
// Exercise 2. Declare a variable person2 of type PersonInfo.

const person2: PersonalInfo = {
  name: "Donika",
  lastName: "Rizova",
  age: 45,
  email: "donika.rizova@atscale.com",
  phoneNumber: 882226364,
  country: "Bulgaria",
  greeting: function () {
    return `Hello, I'm ${this.name} ${this.lastName} from ${this.country}.`;
  },
};



//I don't understand why the console log doesn't work :(


//console.log("Me:", person2.greeting());


