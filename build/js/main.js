"use strict";
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
    constructor(name, music, age, lang = ["JavaScript", "TypeScript"]) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getDetails() {
        return `Hello! My name is ${this.name} and I'm ${this.age} years old. I like ${this.music} music and I am profecient in ${this.lang.reduce((curr, acc) => {
            return `${curr}, ${acc}`;
        })}`;
    }
}
const coder1 = new Coder("John Doe", "Anime Openings / Endings", 28);
// console.log(coder1.getDetails());
// Inheritence
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `${this.lang.reduce((curr, acc) => {
            return `${curr}, ${acc}`;
        })}`;
    }
}
const webdev1 = new WebDev("Windows", "Jane Doe", "Opera", 29);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const musician1 = new Guitarist("Jimmy Page", "Guitar");
// console.log(musician1.play("strums"));
// **************************************************************************************  //
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = `Peep: ${++Peeps.count}`;
    }
}
Peeps.count = 0;
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Led Zepp", "Greenday", "Coldplay"];
MyBands.data = [...MyBands.data, "Linked Horizon"];
// Will only be readonly and no changes can be made after initialising
// interface TransactionObj {
//   readonly [index: string]: number;
// }
const transactionObj1 = {
    Pizza: 5,
    Books: 10,
    Job: 100,
};
// console.log(transactionObj1.Pizza);
// console.log(transactionObj1.Books);
// console.log(transactionObj1.Job);
console.log("********* Dynamic Props *********");
const prop = "Pizza";
// console.log(transactionObj1[prop]);
function totalNet(transactions) {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
}
const student = {
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
const logStudentkey = (student, key) => {
    // console.log(`Student ${key}: ${student[key]}`);
};
const monthlyIncomes = {
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
const echo = (arg) => arg;
const isObj = (arg) => {
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
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length) {
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
const checkBool = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && Object.keys(arg).length) {
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
const processUser = (user) => {
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
const getUsersProperty = (users, key) => {
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
