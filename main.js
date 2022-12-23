// --- scope example
// function sumOfOdds() {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 === 1) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(sumOfOdds());

// --- var hoisting
// let firstname = "hassan";
// if (true) {
//     var firstname = "ali";
// }
// console.log(firstname);

// =========================================================

// const number1 = 6;
// const number2 = 3;

// --- hoisting in functions (sum1)
// console.log(sum1(number1, number2));
// function sum1(number1, number2) {
//     return number1 + number2;
// }

// --- hoisting with type error
// var sum2_var = function(number1, number2) {
//     return number1 + number2;
// }
// let sum2 = function(number1, number2) {
//     return number1 + number2;
// }

// let sum3 = (number1, number2) => {
//     return number1 + number2;
// }
// let sum3_format2 = (number1, number2) => number1 + number2;
// let greeting = firtName => `Hello ${firtName}.`; // lambda

// console.log(sum3_format2(number1, number2));
// console.log(greeting("Hassan"));

// --- Function constructor
// const sum4 = new Function("number1", "number2", "return number1 + number2;"); 
// console.log(sum4(2, 3));

// --- Self invoking function
// (function() {
//     console.log(4 + 5);
// })();
// let result = (function() {
//     return 4 + 5;
// })();
// let result = (function(num1, num2) {
//     return num1 + num2;
// })(4, 5);
// console.log(result);

// --- closure
// function outerGreetingFunction(fname, lname) {
//     // Enclosed by outer function scope
//     // Bringing the scopes closer together
//     function innterGreetingFunction() {
//         // console.log(this);
//         return `Hello ${fname} ${lname}`;
//     }
//     return innterGreetingFunction;
// }

// let greetingToHasan = outerGreetingFunction("Hasan", "Karami");
// console.log(greetingToHasan());

// let greetingToSorour = outerGreetingFunction("Sorour", "Najmi");
// console.log(greetingToSorour());

// let greetingToNima = outerGreetingFunction("Nima", "Beheshtaein");
// console.log(greetingToNima());

// --- closure example
// let foo = function () {
//     let drink = "milk";

//     return {
//         getDrink: function () { return drink },
//         setDrink: function (drnk) { drink = drnk; return drink; }
//     };
// };

// let bar = foo();

// console.log(bar.getDrink()); // milk
// console.log(bar.setDrink("ab madani")); // ab madani
// console.log(bar.getDrink()); // ab madani

// --- callback

// let person1 = {
//     fname: "Hassan",
//     lname: "Karami",
//     age: 27
// }

// function personInfoHTMLGenerator(person, cb) {
//     let html = "";
//     html += `<p><span>fname: </span><span>${person.fname}</span></p>`;
//     html += `<p><span>lname: </span><span>${person.lname}</span></p>`;
//     html += `<p><span>age: </span><span>${person.age}</span></p>`;
//     cb(`<div>${html}</div>`);
// }

// function rootRenderer(htmlResult) {
//     let rootElement = document.getElementById("root");
//     rootElement.innerHTML = htmlResult;
// }

// personInfoHTMLGenerator(person1, rootRenderer);

// // or
// personInfoHTMLGenerator(person1, function(result) {
//     let rootElement = document.getElementById("root");
//     rootElement.innerHTML = result;
// });

// -

// let salamKon = (fname, cb) => {
//     setTimeout(() => {
//         cb(`Salam ${fname}`);
//     }, 3000);
// }

// salamKon("Nima", function (message) {
//     console.log(message);
// });

// callback hell
// let printMessage = (message, cb) => {
//     setTimeout(() => {
//         console.log(message);
//         cb();
//     }, Math.floor((Math.random() * 1000) + 1));
// }

// printMessage("1st message", () => {
//     printMessage("2nd message", () => {
//         printMessage("3rd message", () => {
//             console.log("Done!");
//         });
//     });
// });

// --- arrow function

// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     display: function () {
//         // (() => {
//         //     console.log(this);
//         // })();
//         // (function() {
//         //     console.log(this);
//         // })();

//         // let obj = this;
//         // setTimeout(function () {
//         //     console.log(obj);
//         //     obj.firstName = "Ali";
//         // }, 1000);

//         setTimeout((function () {
//             console.log(this);
//         }).bind(this), 1000);

//         // setTimeout(() => {
//         //     console.log(this);
//         // }, 2000);
//     },
//     display2: () => {
//         // console.log(this);
//         // (() => {
//         //     console.log(this);
//         // })();
//     },
// }

// person2.display();
// person2.display2();

// --- bind, call, apply

// const person = {
//     fullName: function (msg, age) {
//         return (
//             msg + " " + this.firstName + " " + this.lastName + ` and with age: ${age}`
//         );
//     },
// };
// const person2 = {
//     firstName: "John",
//     lastName: "Doe",
// };
// const person3 = {
//     firstName: "Mary",
//     lastName: "Doe",
// };

// console.log(person.fullName.bind(person2, "hello", 20)());
// console.log(person.fullName.call(person3, "hi", 19));
// console.log(person.fullName.apply(person2, ["hello", 20]));

// - way 2

// function fullName(firstName, lastName) {
//     console.log(this);
//     return firstName + " " + lastName;
// }


// let newFullName1 = fullName.bind({ age: 24 }, "Ali", "Darvish");
// console.log(newFullName1());
// console.log(newFullName1("Nima", "Beheshtaein"));

// console.log(fullName(...["Ali", "Rajabi"]));

// --- rest operator

// function sum() {
//     let result = 0;
//     for (const number of arguments) {
//         result += number;
//     }
//     console.log(arguments instanceof Array);
//     console.log("arguments".constructor === String);
//     console.log(new String("arguments") instanceof String);
//     return result
// }

// function sum2(...args) {
//     let result = 0;
//     for (const number of args) {
//         result += number;
//     }
//     // console.log(args instanceof Array);
//     return result
// }

// function sum3(x, y, ...args) {
//     let result = x + y;
//     for (const number of args) {
//         result += number;
//     }
//     // console.log(args instanceof Array);
//     return result
// }

// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum2(1, 2, 3, 4, 5, 6, 7));
// console.log(sum2(...[1, 2, 3, 4, 5, 6, 7]));
// console.log(sum3(...[1, 2, 3, 4, 5, 6, 7]));
// console.log(Math.max(...[1, 2, 3, 4, 5, 6, 7]));

// --- custom map2 method

// solution1
// class Array2 extends Array { }

// Array2.prototype.map2 = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         const element = this[index];
//         cb(index, element, this)
//     }
// }

// new Array2(1, 2, 3, 4).map2((...el) => {
//     console.log(el);
// });

// solution2
// Object.defineProperty(Array.prototype, 'map2', {
//     value: function (cb) {
//         for (let index = 0; index < this.length; index++) {
//             const element = this[index];
//             cb(index, element, this);
//         }
//     }
// });

// [1, 2, 3, 4, 5].map2((...el) => {
//     console.log(el);
// });
