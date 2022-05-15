// console.log("Hello World!");
// function sayHello() {
//   return function () {
//     return "Hello World";
//   };
// }

// function greet(fn) {
//   console.log(fn());
// }

// greet(sayHello());

// import { compose, pipe } from "lodash/fp";

// let input = "  JavaScript   ";
// let output = "<div>" + input.trim() + "</div>";
// // console.log(output);

// const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrap = (type, str) => `<${type}> ${str} </${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap);
// console.log(transform(input));

// ****************************************//

// const pipeTransform = pipe(trim, toLowerCase, wrapInDiv);
// console.log(pipeTransform(input));
// pipe ham ozi yozilgan funksiya faqat bundagi argumentlar ketma ketligi
// compose bilan farq qiladi.  bu eng ichkaridagi funksiydan boshlanib yoziladi.
// compose da esa eng birinchi eng katta funksiya turadi

// const transform = compose(wrapInDiv, toLowerCase, trim);
// console.log(transform(input));

// compose funksiyasi bu default yozilan boladi pastda yozgan kodimiz bilan
// bir xil vazifani bajaradi

// let results = wrapInDiv(toLowerCase(trim(input)));
// console.log(results);

// ****************************************//

// const person = { name: "John" };
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);
// console.log(person);

// const person = {
//   name: "John",
//   address: {
//     county: "USA",
//     city: "New York",
//   },
// };

// const updated = {
//   ...person,
//   address: {},
//   name: "Bob",
// };

// updated.address.city = "San Fransisco";
// console.log(updated);
// console.log(person);

// Updating Arrays

const numbers = [1, 2, 3];

//Adding
const index = numbers.indexOf(2);
const adding = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// Removing
const removing = numbers.filter((n) => n != 2);

// Updated
const updated = numbers.map((n) => (n === 2 ? 20 : n));

// Enforcing Immutability
