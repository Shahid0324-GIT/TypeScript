# TypeScript Inference

TypeScript excels at automatic type inference, allowing it to determine the data type of a variable upon assignment.

**Example:**

```typescript
let myName = "John Doe"; // TypeScript infers: let myName: string
```

---

# Explicit Typing

When you want to explicitly define the type of a variable, TypeScript provides clear syntax:

```typescript
let myName: string = "John Doe";
let myNumber: number = 42;
let con: boolean = false;
let re: RegExp = /\w+/g; // Selects all the words

let strArr: string[] = [];
let arr = []; // Any data type

let stringArray = ["Hey", "Hi", "Hello"]; // TypeScript infers: let stringArray: string[]
let numstrArray = ["Amigo", "Friend", 1]; // TypeScript infers: let numstrArray: (string | number)[]
let mixedData = ["EVH", 1984, true]; // TypeScript infers: let mixedData: (string | number | boolean)[]
let arr = [1, 2, "doe", false, { name: "Jane", age: 42 }]; // TypeScript infers: let arr: (number | string | boolean, {name: string, age: number})[]
```

The `|` operator indicates a union, allowing a variable to hold multiple data types.

**Once a data type is assigned, the variable can only hold values of that type and cannot be reassigned to a different type.**

---

# Functions in TypeScript

## Arrow Function

```typescript
const sum = (a: number, b: number): number => {
  return a + b;
};
```

## Function Declaration

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

## Function Expression

```typescript
const sum = function (a: number, b: number): number {
  return a + b;
};
```

# Union Types in TypeScript

TypeScript supports assigning multiple data types to a variable using the `|` operator.

```typescript
let a: string | number;
let b: string | boolean;
let arrWithStrings = ["hey", "hi", "hello"];
let arrWithNumsAndStrings = ["hey", "hi", "hello", 1, 2, 3];
let mixedDataTypes = ["hey", "hi", "hello", 1, 2, 3, true, false];
```

Reassignment is possible, given the compatible types.

```typescript
mixedDataTypes = arrWithNumsAndStrings;
arrWithNumsAndStrings = arrWithStrings;
```

# Tuple in TypeScript

A tuple in TypeScript is similar to an array but maintains a strict order specified during initialization.

```typescript
let myTuple: [string, number, boolean] = ["John Doe", 42, true];
let myArr = ["Jane Doe", 24, false];
```

Tuples have a fixed length and enforce the specified order. Reassignment from an array to a tuple is possible, but the reverse is not.

```typescript
myArr = myTuple; // Reassignment is possible
// myTuple = myArr; // This is not possible
```

# Objects in TypeScript:

Since Arrays, Objects, Map are all considered as objects in JavaScript, to assign an Object which holds the key: value pairs in TypeScript the syntax is a little different.

```typescript
type Person = {
  name: string;
  age?: number; // Providing "?" can make the property optional
  employed: boolean;
  albums: (string | number)[];
};

let person1: Person = {
  name: "John Doe",
  age: 32,
  employed: true,
  albums: ["Gala", 1984, "Enigma", 2011],
};

let person2: Person = {
  name: "Jane Doe",
  employed: true,
  albums: ["Gala", 1984, "Enigma", 2011],
};

// Adding a new property to the objects person1 and person2 is not possible

// person1.gender = "Male"; this is not possible since we did not create a property named "gender" in the type Person object

// Re-assignment is possible between two objects created from the same type
```

- Passing the objects in the function. The syntax is

```typescript
type Person = {
  name: string;
  age?: number; // Providing "?" can make the property optional
  employed: boolean;
  albums: (string | number)[];
};

let person1: Person = {
  name: "John Doe",
  age: 32,
  employed: true,
  albums: ["Gala", 1984, "Enigma", 2011],
};

const greetPerson = (person: Person) => {
  return `Hello ${person.name}`;
};

console.log(greetPerson(person1));
```

# Interface declaration:

- To create a new object it can be done using `type` and `interface`.

- `interface` is kinda similar to creating a `class`

- The syntax for the interface is as follows.

```typescript
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
```

# Type Aliases and Functions:

- It is used to assign a type to a variable which can be used anywhere in the code and which makes the code more modular.

```typescript
type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

type Employee = {
  id: stringOrNumber;
  name: string;
  age?: number;
  isCEO: boolean;
  hobbies: stringOrNumberArr;
};

type UserId = stringOrNumber;
```

- Literal Types: Is used to define a constant value that cannot be changed => `const name = 'Constant';`

```typescript
let myName: "John Doe";
let userName: "John Doe" | "Jane Doe" | "Sam Doe";
```

- **Void functions**: A function without a "return statement"

```typescript
// A normal function

// type mathFunction = (a: number, b: number) => number;
interface mathFunction {
  (a: number, b: number): number;
}

const add: mathFunction = (a, b) => {
  return a + b;
};

let sub: mathFunction = function (a, b) {
  return Math.abs(a - b);
};

function multiply(a: number, b: number): number {
  return Math.abs(a * b);
}

const divide: mathFunction = (a, b) => {
  return Math.ceil(a / b);
};

// Void Function

const v = (message: any): void => {
  console.log(message);
};

console.log(add(24, 18));
console.log(sub(24, -18));
console.log(multiply(-24, 18));
console.log(divide(24, 18));
console.log(sub(-24, 18));

v("Hello World!");
v(123);
v(true);
v({
  name: "Jane Doe",
});
```

- **Never Type**: Functions that throw an error are of "never" type or have an infinite loop

```typescript
// Error function
const createError = (msg: string) => {
  throw new Error(msg);
};

// Infinite loop

const infinite = () => {
  let i = 0;
  while (true) {
    i++;
  }
};
```
