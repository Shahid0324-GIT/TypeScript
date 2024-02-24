"use strict";
let stringArray = ["Hey", "Hi", "Hello"];
let numstrArray = ["Amigo", "Friend", 1];
let mixedData = ["EVH", 1984, true];
//  Tuple:
let myTuple = ["John Doe", 42, true];
let myArr = ["Jane Doe", 24, false];
let person1 = {
    name: "John Doe",
    age: 29,
    employed: true,
    albums: ["Gala", 1984, "Enigma", 2011],
};
let person2 = {
    name: "Jane Doe",
    employed: true,
    albums: ["Gala", 1984, "Enigma", 2011],
};
person2 = person1; // Possible
const greetPerson = (person) => {
    return `Hello ${person.name}`;
};
console.log(greetPerson(person1));
let employee1 = {
    name: "John Doe",
    id: 1,
    salary: 1200000,
    designation: "Software Engineer",
    role: "Frontend Developer",
};
const greetEmployee = (employee) => {
    return `Hello ${employee.name}`;
};
console.log(greetEmployee(employee1));
// Enums: Enums are not a type-level addition to JS but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
