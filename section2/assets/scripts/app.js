// import apiKey2 from "./uitl.js";
// import { apiKey, abc as content } from "./uitl.js";
// // import * as util from "./uitl.js";
//
// console.log(apiKey);
// console.log(apiKey2);
// console.log(content);

// console.log("Hello World!");

// const userMessage = "Hello World!";
// console.log(userMessage);

// console.log(10 + 5);
// console.log("hello" + " world");

// function createGreeting(userName, message = "Hello") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }
//
// const greeting1 = createGreeting("Max");
// console.log(greeting1);
//
// const greeting2 = createGreeting("Manuel", "Hello, What's up?");
// console.log(greeting2);

// export default (userName, message) => {
//   console.log("hello");
//   return userName + message;
// };

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hi");
//     console.log(this.age);
//   },
// };
//
// console.log(user.name);
// user.greet();
//
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//
//   greeting() {
//     console.log("Hi");
//   }
// }
//
// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greeting();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);
//
// hobbies.push("Working");
// console.log(hobbies);
//
// const index = hobbies.findIndex((item) => item === "Sports");
// console.log(index);
//
// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);
//
// function transformToObjects(numberArray) {
//   return numberArray.map((item) => ({ val: item }));
// }

// const [firstName, lastName] = ["Max", "Schwarzmuller"];
// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34,
// };
//
// console.log(userName);
// console.log(age);
//
// const hobbies = ["Sports", "Cooking"];
// const newHobbies = ["Reading"];
//
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);
//
// const user = {
//   name: "Max",
//   age: 34,
// };
//
// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };
//
// console.log(extendedUser);

// const password = prompt("Your Password");
//
// if (password === "Hello") {
//   console.log("it works");
// } else if (password === "hello") {
//   console.log("NO");
// } else {
//   console.log("Access not granted");
// }

// const hobbies = ["Sports", "Cooking"];
//
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// function handleTimeout() {
//   console.log("TimeOut");
// }
//
// const handleTimeout2 = () => {
//   console.log("TimeOut");
// };
//
// setTimeout(handleTimeout, 1000);

// function greeter(greetFn) {
//   greetFn();
// }
//
// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("Hi");
//   }
//
//   greet();
// }
//
// init();
