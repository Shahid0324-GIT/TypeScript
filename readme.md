# TypeScript Inference:

- TypeScript can infer the data-type means it knows the data-type of a variable when assigned.

  - Ex: `let myName = "John Doe";` when hovering on the variable name you can see that the type of the variable is a string and is represented as `let myName: string`

---

# Explicit Typing:

- To explicilty type a variable then the syntax is as follows:

- `let myName: string = 'John Doe'`
- `let myNumber: number = 42`
- `let con: boolean = false`
- `let re: RegExp = /\w+/g` ( _Selects all the words_ )

- `let stringArray = ["Hey", "Hi", "Hello"];` => `let stringArray: string[]`
- `let numstrArray = ["Amigo", "Friend", 1];` => `let numstrArray: (string | number)[]`
- `let mixedData = ["EVH", 1984, true];` => `let mixedData: (string | number | boolean)[]`

- `let arr = [1,2,'doe', false, {name: "Jane", age: 42}]` => `let arr: (number | string | boolean, {name: string, age: number})[]` _...etc._

- `|` -> Indicates a union operator which means that particular variable can hold multiple types

  - Ex: `let album: string | number`

**_Once the data-type is assigned the value of that variable will only hold that data-type and it cannot be re-assigned to a different data-type._**

---

# Functions in TypeScript:

- ### Arrow Function:

- ```
    const sum = (a: number, b: number) => {
        return a + b
    }
  ```

  - Since both of the args are numbers the return type of the function will also be a number and it is representd as follows in TypeScript:

    ```
    const sum: (a: number, b: number) => number
    ```

- ### Function Declaration:

- ```
    function sum(a: number, b: number) {
        return a + b;
    }
  ```

  - Since both of the args are numbers the return type of the function will also be a number and it is representd as follows in TypeScript:

    ```
    function sum(a: number, b: number): number
    ```

- ### Function Expression:

- ```
    const sum = function (a: number,    b: number) {
        return a + b;
    };
  ```

  - Since both of the args are numbers the return type of the function will also be a number and it is representd as follows in TypeScript:

    ```
    const sum: (a: number, b: number) => number
    ```
