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

# Type Asserions or Type Casting:

- There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

- Casting is the process of overriding a type.

- ### Casting with **_as_**:

  - A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

  ```typescript
  let x: unknown = "hello";
  console.log((x as string).length);
  ```

  - Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.

  ```typescript
  let x: unknown = 4;
  console.log((x as string).length); // prints undefined since numbers don't have a length
  ```

  - TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:

  ```typescript
  console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  ```

- ### Casting with **<>**:

  - Using <> works the same as casting with as.

  ```typescript
  let x: unknown = "hello";
  console.log((<string>x).length);
  ```

## Working with functions and DOM Objects:

```typescript
const addOrConcat = (a: number, b: number, c: "add" | "concat") => {
  if (c === "add") return a + b;
  return "" + a + b;
};

const myVal: number = addOrConcat(2, 2, "add") as number;
const myStr: string = addOrConcat(2, 2, "concat") as string;

const problemWithTypeCasting: number = addOrConcat(2, 2, "concat") as number;

// Double casting or forced casting | Avoid it as much as possible
// (10 as unknown) as string // Here we are converting the number to unknown type and asserting that number as a string which is like calling a white rice "Biryani"

// Use of assertion is mostly done in manupulating DOM objects

// const img = document.querySelector("img"); // Here TS can infer that this is an img element and also null.

// const img1 = document.getElementById("#myID"); // Here TS can infer that this is an HTML element but it is not inferring it as an img element and also null.

// const img2 = document.getElementById("#img"); // Here also TS can infer that this is an HTML element but it is not inferring it as an img element and also null.

// Now to overwrite the TS infernece, TS assertion or casting is used.

const img = document.querySelector("img") as HTMLImageElement; // Here the type assertion is used to convert the DOM object explicitly to img element => const img: HTMLImageElements

const img1 = document.getElementById("#img") as HTMLImageElement;

// "!" is used to explicitly tell TS that this element is not a null type
const img2 = document.querySelector("img")!;

const img3 = <HTMLImageElement>document.querySelector("img"); // Other way to write assertion
```

# Classes in TypeScript:

- Inside the class the properties and methods are called as members.

- The members of a class (properties & methods) are typed using type annotations, similar to variables.

- Syntax for writing the class without Visibility/ Data/ Access modifiers

```typescript
class Person {
  name: string;
}

const person = new Person();
person.name = "Jane";

class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

const coder1 = new Coder("John Doe", "Anime Openings / Endings", 28, [
  "JavaScript",
  "Python",
  "Java",
  "Go",
]);

console.log(coder1);
```

- Syntax for writing class with Visibility/ Data/ Access modifiers.

- There are three main visibility modifiers in TypeScript.

  - **public** - (default) allows access to the class member from anywhere
  - **private** - only allows access to the class member from within the class
  - **protected** - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
  - **readonly** - variable with _readonly_ cannot be changed after initial definition, which has to be either at it's declaration or in the constructor.

```typescript
class Coder {
  // Writing a property which is not used in the class instantiation

  job!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string[] = ["JavaScript", "TypeScript"]
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getDetails() {
    return `Hello! My name is ${this.name} and I'm ${
      this.age
    } years old. I like ${
      this.music
    } music and I am profecient in ${this.lang.reduce((curr, acc) => {
      return `${curr}, ${acc}`;
    })}`;
  }
}

const coder1 = new Coder("John Doe", "Anime Openings / Endings", 28);
console.log(coder1.getDetails());
```

# Inheritance: Implements in class:

- Interfaces can be used to define the type a class must follow through the implements keyword.

```typescript
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string; // It is a function or a method which takes a single parameter action which is a string and return a string
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const musician1 = new Guitarist("Jimmy Page", "Guitar");
console.log(musician1.play("strums"));
```

- **Static method**:

  - A static method in JavaScript is a method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name. This is because static methods belong to the class directly. Inheritance even applies to static methods.

```typescript
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: string;

  constructor(public name: string) {
    this.name = name;
    this.id = `Peep: ${++Peeps.count}`;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Jane = new Peeps("Jane");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(John);
console.log(Steve);
console.log(Jane);
console.log(Amy);
```

# JavaScript Accessors (Getters and Setters):

- Getters and setters allow you to define Object Accessors (Computed Properties).

- ### JavaScript Getter (The get Keyword):

  - This example uses a lang property to get the value of the language property.

  ```javascript
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    },
  };

  console.log(person.lang);
  ```

- ### JavaScript Setter (The set Keyword):

  - This example uses a lang property to set the value of the language property.

  ```javascript
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    },
  };

  // Set an object property using a setter:
  person.lang = "en";
  console.log(person.language);
  ```

# TypeScript Accessors (Getters and Setters):

```typescript
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Led Zepp", "Greenday", "Coldplay"];

MyBands.data = [...MyBands.data, "Linked Horizon"];

console.log(MyBands.data);
```

# Index Signatures in TypeScript :

- Index signature is used to represent the type of object/dictionary when the values of the object are of consistent types.

- **Syntax**: { [key: KeyType] : ValueType }

```
let colorsTheme = {
  palette: {
    success: {
      main: "green",
    },
    error: {
      main: "red",
    },
    warning: {
      main: "orange",
    },
  },
}

```

- Let’s see how we can add type definition for the above object:

```typescript
interface ColorsTheme {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
```

- What if we try to add a value of a different type other than the type defined in the index signature? If we try to add a value of type number then typescript starts shouting.

- _Note: However, properties of different types are acceptable if the index signature is a union of the property types_

```typescript
interface TransactionObj {
  readonly [index: string]: number;
}

// Will only be readonly and no changes can be made after initialising
// interface TransactionObj {
//   readonly [index: string]: number;
// }

const transactionObj1: TransactionObj = {
  Pizza: 5,
  Books: 10,
  Job: 100,
};

console.log(transactionObj1.Pizza);
console.log(transactionObj1.Books);
console.log(transactionObj1.Job);

console.log("********* Dynamic Props *********");

const prop: string = "Pizza";

console.log(transactionObj1[prop]);

function totalNet(transactions: TransactionObj): number {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
}

console.log(totalNet(transactionObj1));
```

- Indexing can also be made **readonly**.

```typescript
// Will only be readonly and no changes can be made after initialising
interface TransactionObj {
  readonly [index: string]: number;
}
```

- While indexing provide a nice way of handling the objects, it does comes with some drawbacks. Like when accessing a key which is not present in the object it returns undefined

```typescript
console.log(transactionObj1["prop"]); //undefined
```

- **_Union in Indexing_**:

  - **keyof with explicit keys**:

    - **keyof** is a keyword in TypeScript which is used to extract the key type from an object type.

    ```typescript
    interface Person {
      name: string;
      age: number;
    }
    // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
    function printPersonProperty(person: Person, property: keyof Person) {
      console.log(
        `Printing person property ${property}: "${person[property]}"`
      );
    }
    let person = {
      name: "Max",
      age: 27,
    };
    printPersonProperty(person, "name"); // Printing person property name: "Max"
    ```

  ```typescript
  interface Student {
    // [index: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes: [100, 200];
  }

  const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
  };

  for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
  }

  // Other way of accesing the values

  Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
  });

  // Using function

  const logStudentkey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
  };

  logStudentkey(student, "name");

  // ******************************************************************************** //

  // interface Incomes {
  //   [key: string]: number;
  // }

  // The above interface can be written in type as follows

  type Streams = "salary" | "bonus" | "freelancing";

  type Incomes = Record<Streams, number>;

  const monthlyIncomes: Incomes = {
    salary: 150000,
    bonus: 40000,
    freelancing: 100000,
  };

  for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof typeof monthlyIncomes]);
  }

  console.log("*********** keyof only *************");

  for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
  }
  ```

# TypeScript Basic Generics:

- Generics allow creating **'type variables'** which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

- Generics makes it easier to write reusable code.

- Generics are a placeholder for the types.

- ## Extends

  - Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

  ```typescript
  function createLoggedPair<
    S extends string | number,
    T extends string | number
  >(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
  }
  ```

- ###### What is the Double bang (!!) operator in JavaScript?:

  - Every value has truth or false values in JavaScript. For example, a `null` value has an associated boolean value of false. Similarly `34` has an associated value of true. We can use this to cast a variable to true or false using the double bang operator.

  - The `!` in JavaScript, also called “bang”, is the logical “not” operator. If you place this operator in front of a boolean value, it will reverse the value, returning the opposite.

  ```sh
  !true; // returns false
  !false; // returns true

  isTrue = true; // variable which is boolean
  !isTrue; // returns false

  !!true // returns true
  !!false // returns false

  isTrue = true // variable which is boolean
  !!isTrue // returns true
  ```

  - ### Truthy values:

    - In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.

      - The following values are few examples that are considered by JavaScript to be truthys:
        ```
          Object: {}
          Array: []
          Not empty string: "anything"
          Number other than zero: 3.14
          Date: new Date();
        ```

  - ### Falsy values:

    - A falsy value is a value that is considered false when encountered in a Boolean context.

      - The following values are few of the examples that are considered by JavaScript to be falsey:
        ```
          Empty string: ""
          0
          null
          undefined
          NaN and the list of falsy values below.
        ```

```typescript
// A fucntion only for type string.
// const stringEcho = (arg: string): string => {
//   return arg;
// };

// How to make a generic function which can echo(prints) any type?
// To achieve that Generics are used which are used as placeholder for the types.
// A type parameter or variable is provided to achiece that. the syntax is:
// Syntax: <T> **Note**: Anything can replaced with "T"

// A Generic function

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(echo("John Doe"));
// console.log(echo(42));
// console.log(echo(false));
// console.log(echo(["John Doe", { name: "array" }]));

// console.log(isObj("John Doe"));
// console.log(isObj(42));
// console.log(isObj(false));
// console.log(isObj(["John Doe", { name: "array" }]));
// console.log(isObj({ name: "array" }));
// console.log(isObj(null));

// The below function returns an object
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  if (isObj(arg) && Object.keys(arg as keyof T).length) {
    return {
      arg,
      is: false,
    };
  }

  return {
    arg,
    is: !!arg,
  };
};

// console.log(isTrue("John Doe"));
// console.log(isTrue(42));
// console.log(isTrue(false));
// console.log(isTrue(["John Doe", { name: "array" }]));
// console.log(isTrue({ name: "array" }));
// console.log(isTrue(null));
// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(1));
// console.log(isTrue(true));
// console.log(isTrue(NaN));

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBool = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  if (isObj(arg) && Object.keys(arg as keyof T).length) {
    return {
      value: arg,
      is: false,
    };
  }

  return {
    value: arg,
    is: !!arg,
  };
};

// console.log(checkBool("John Doe"));
// console.log(checkBool(42));
// console.log(checkBool(false));
// console.log(checkBool(["John Doe", { name: "array" }]));
// console.log(checkBool({ name: "array" }));
// console.log(checkBool(null));
// console.log(checkBool(false));
// console.log(checkBool(0));
// console.log(checkBool(1));
// console.log(checkBool(true));
// console.log(checkBool(NaN));

interface HasID {
  id: number;
}
const processUser = <T extends HasID>(user: T): T => {
  return user;
};

// console.log(
//   processUser({
//     id: 1,
//     name: "John Doe",
//   })
// );
// console.log(
//   processUser({
//     name: "John Doe",
//   })
// );

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "address"));
```
