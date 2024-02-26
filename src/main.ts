// Classes in TypeScript
// Inside the class the properties and methods are called as members

// First variation of writing a class in TypeScript

// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: string[];

//   constructor(name: string, music: string, age: number, lang: string[]) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// const coder1 = new Coder("John Doe", "Anime Openings / Endings", 28, [
//   "JavaScript",
//   "Python",
//   "Java",
//   "Go",
// ]);

// console.log(coder1);

// Second Variation using Visibility/ Data/ Access modifiers
// Visibility/ Data/ Access modifiers are public, private and protected

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it.

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
// console.log(coder1.getDetails());

// Inheritence

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `${this.lang.reduce((curr, acc) => {
      return `${curr}, ${acc}`;
    })}`;
  }
}

const webdev1 = new WebDev("Windows", "Jane Doe", "Opera", 29);
// console.log(webdev1.getLang());
// console.log(webdev1.getDetails());

// **************************************************************************************  //

// Implementing class using interface

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
// console.log(musician1.play("strums"));

// **************************************************************************************  //

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

// console.log(Peeps.count);
// console.log(John);
// console.log(Steve);
// console.log(Jane);
// console.log(Amy);

// ************************************************************************************** //

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

// console.log(MyBands.data);

// ************************************************************************************** //

// Index Signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

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

// console.log(transactionObj1.Pizza);
// console.log(transactionObj1.Books);
// console.log(transactionObj1.Job);

console.log("********* Dynamic Props *********");

const prop: string = "Pizza";

// console.log(transactionObj1[prop]);

function totalNet(transactions: TransactionObj): number {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
}

// console.log(totalNet(transactionObj1));

// Union in indexing

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
  // console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  // console.log(student[key as keyof typeof student]);
});

const logStudentkey = (student: Student, key: keyof Student): void => {
  // console.log(`Student ${key}: ${student[key]}`);
};

// logStudentkey(student, "name");

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
  // console.log(monthlyIncomes[revenue as keyof typeof monthlyIncomes]);
}

// console.log("*********** keyof only *************");

for (const revenue in monthlyIncomes) {
  // console.log(monthlyIncomes[revenue as keyof Incomes]);
}

// ************************************************************************************** //

////////////////////// GENERICS ///////////////////////////////////////////////////////////

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
