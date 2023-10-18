// Primitives

let age: number = 10;

let userName: string;

userName = "John";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Week",
  age: 100,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React - The Complete Guide";

// Union

let union: string | number = "UNION";

union = 123;

// Type Aliases

type Person = {
  name: string;
  age: number;
};

let man: Person;
let men: Person[];

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
