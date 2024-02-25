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
