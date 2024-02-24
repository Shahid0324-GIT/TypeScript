# TypeScript Inference

> TypeScript excels at automatic type inference, allowing it to determine the data type of a variable upon assignment.

Example:

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
