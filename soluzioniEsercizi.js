/* SOLUZIONI */

/* ESERCIZIO 1 */
let numb1 = 50;
let numb2 = 25;

if (numb1 > numb2) {
  console.log(numb1 + " è il numero maggiore");
} else if (numb2 > numb1) {
  console.log(numb2 + " è il numero maggiore");
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2 */
let num = 7;

if (num !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3 */
let modulo = 20;

if (modulo % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4 */
let firstNumber = 3;
let secondNumber = 5;

if (
  firstNumber === 8 ||
  secondNumber === 8 ||
  firstNumber + secondNumber === 8 ||
  Math.abs(firstNumber - secondNumber) === 8
) {
  console.log("Condizione verificata");
}

/* ESERCIZIO 5 */
let totalShoppingCart = 30;
const shippingCost = 10;
let totalToPay;

if (totalShoppingCart > 50) {
  totalToPay = totalShoppingCart;
} else {
  totalToPay = totalShoppingCart + shippingCost;
}

console.log(totalToPay);

/* ESERCIZIO 6 */
let cart = 60;
let discounted = cart * 0.8;

if (discounted > 50) {
  console.log(discounted);
} else {
  console.log(discounted + 10);
}

/* ESERCIZIO 7 */
let a = 10;
let b = 30;
let c = 20;

let numbers = [a, b, c];
numbers.sort((x, y) => y - x);

console.log(numbers);

/* ESERCIZIO 8 */
let value = 88;

if (typeof value === "number" && !isNaN(value)) {
  console.log("È un numero");
} else {
  console.log("Non è un numero");
}

/* ESERCIZIO 9 */
let evenOdd = 7;

if (evenOdd % 2 === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
}

/* ESERCIZIO 10 */
let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11 */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12 */
delete me.lastName;

console.log(me);

/* ESERCIZIO 13 */
me.skills.pop();

console.log(me);

/* ESERCIZIO 14 */
let array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}

console.log(array);

/* ESERCIZIO 15 */
array[array.length - 1] = 100;

console.log(array);

/* ========================= */
/* NUOVE SOLUZIONI */
/* ========================= */

/* ESERCIZIO 16 */
let number = -5;

if (number > 0) {
  console.log("Positivo");
} else if (number < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

/* ESERCIZIO 17 */
let names = ["Luca", "Marco", "Anna", "Sara", "Giulia"];

console.log(names[0]);

/* ESERCIZIO 18 */
let x = 10;
let y = 20;

console.log(x + y);

/* ESERCIZIO 19 */
let multiple = 9;

if (multiple % 3 === 0) {
  console.log("Multiplo di 3");
}

/* ESERCIZIO 20 */
const car = {
  brand: "Fiat",
  model: "Panda",
  year: 2020,
};

console.log(car);

/* ESERCIZIO 21 */
car.color = "red";

console.log(car);

/* ESERCIZIO 22 */
let text = "JavaScript";

if (text.length > 5) {
  console.log("La stringa ha più di 5 caratteri");
}

/* ESERCIZIO 23 */
let randomNumbers = [4, 8, 2, 15, 1];

console.log(Math.max(...randomNumbers));

/* ESERCIZIO 24 */
let word = "ciao";

console.log(word.toUpperCase());

/* ESERCIZIO 25 */
let fruits = ["apple", "banana", "orange"];

console.log(fruits.length);
