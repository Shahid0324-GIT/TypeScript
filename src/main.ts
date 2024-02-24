let stringArray = ["Hey", "Hi", "Hello"];
let numstrArray = ["Amigo", "Friend", 1];
let mixedData = ["EVH", 1984, true];

//  Tuple:
let myTuple: [string, number, boolean] = ["John Doe", 42, true];
let myArr = ["Jane Doe", 24, false];

// Objects

type Person = {
  name: string;
  age?: number;
  employed: boolean;
  albums: (string | number)[];
};

let person1: Person = {
  name: "John Doe",
  age: 29,
  employed: true,
  albums: ["Gala", 1984, "Enigma", 2011],
};

let person2: Person = {
  name: "Jane Doe",
  employed: true,
  albums: ["Gala", 1984, "Enigma", 2011],
};

person2 = person1; // Possible

const greetPerson = (person: Person) => {
  return `Hello ${person.name}`;
};

console.log(greetPerson(person1));

interface Employee {
  name: string;
  id: string | number;
  salary: number;
  designation: string;
  role: string;
  hobbies?: string[];
  achievements?: (string | number)[];
}

let employee1: Employee = {
  name: "John Doe",
  id: 1,
  salary: 1200000,
  designation: "Software Engineer",
  role: "Frontend Developer",
};

const greetEmployee = (employee: Employee) => {
  return `Hello ${employee.name}`;
};

console.log(greetEmployee(employee1));

// Enums: Enums are not a type-level addition to JS but something added to the language and runtime

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);
