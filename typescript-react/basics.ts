// Primitives: number, string, boolean, null, undefined, symbol
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 30;

let userName: string;

userName = 'Eric';

let isHired;

isHired = true;

// More complex types

let hobbies: string[];

hobbies = ['Yoga', '3D Printing', 'Cinema'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

let people: Person[];

person = {
  name: 'Eric',
  age: 30,
};

people = [person];

let course: string | number = 'Ract - The Complete Guide';

course = 201;

// Functions & types

function add(a: number, b: number): number | string {
  return a + b;
}

function printOutput(value) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
