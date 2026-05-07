/* ESERCIZIO 1 */
function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 10));

/* ESERCIZIO 2 */
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  }

  return num1 + num2;
}

console.log(crazySum(10, 15));
console.log(crazySum(5, 5));

/* ESERCIZIO 3 */
function crazyDiff(num) {
  const diff = Math.abs(num - 19);

  if (num > 19) {
    return diff * 3;
  }

  return diff;
}

console.log(crazyDiff(10));
console.log(crazyDiff(22));

/* ESERCIZIO 4 */
function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary(25));
console.log(boundary(10));
console.log(boundary(400));

/* ESERCIZIO 5 */
function epify(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  }

  return "EPICODE " + str;
}

console.log(epify("ciao mondo"));
console.log(epify("EPICODE scuola di coding"));

/* ESERCIZIO 6 */
function check3and7(num) {
  if (num <= 0) {
    return false;
  }

  return num % 3 === 0 || num % 7 === 0;
}

console.log(check3and7(21));
console.log(check3and7(10));

/* ESERCIZIO 7 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8 */
function upperFirst(sentence) {
  const words = sentence.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

console.log(upperFirst("ciao mi chiamo simone"));

/* ESERCIZIO 9 */
function cutString(str) {
  return str.slice(1, -1);
}

console.log(cutString("JavaScript"));

/* ESERCIZIO 10 */
function giveMeRandom(n) {
  const numbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    numbers.push(randomNumber);
  }

  return numbers;
}

console.log(giveMeRandom(5));

/* EXTRA 1 */
function checkArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i] + " è maggiore di 5");
      sum += arr[i];
    } else {
      console.log(arr[i] + " non è maggiore di 5");
    }
  }

  return sum;
}

console.log(checkArray([2, 6, 8, 1, 10]));

/* ARRAY DI PARTENZA PER GLI EXTRA ECOMMERCE */
const shoppingCart = [
  {
    price: 20,
    name: "Mouse",
    id: 1,
    quantity: 2,
  },
  {
    price: 50,
    name: "Keyboard",
    id: 2,
    quantity: 1,
  },
  {
    price: 10,
    name: "USB Cable",
    id: 3,
    quantity: 3,
  },
];

/* EXTRA 2 */
function shoppingCartTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  return total;
}

console.log(shoppingCartTotal(shoppingCart));

/* EXTRA 3 */
function addToShoppingCart(product) {
  shoppingCart.push(product);
  return shoppingCart.length;
}

console.log(
  addToShoppingCart({
    price: 100,
    name: "Monitor",
    id: 4,
    quantity: 1,
  }),
);

/* EXTRA 4 */
function maxShoppingCart(cart) {
  let mostExpensive = cart[0];

  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > mostExpensive.price) {
      mostExpensive = cart[i];
    }
  }

  return mostExpensive;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5 */
function latestShoppingCart(cart) {
  return cart[cart.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6 */
function loopUntil(x) {
  let count = 0;

  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    if (randomNumber > x) {
      count++;
    } else {
      count = 0;
    }
  }

  console.log("Numero maggiore di " + x + " trovato per 3 volte di fila");
}

loopUntil(5);

/* EXTRA 7 */
function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
      count++;
    }
  }

  return sum / count;
}

console.log(average([10, 20, "ciao", 30]));

/* EXTRA 8 */
function longest(arr) {
  let longestWord = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }

  return longestWord;
}

console.log(longest(["ciao", "javascript", "html"]));

/* EXTRA 9 */
function antiSpam(emailContent) {
  const upperContent = emailContent.toUpperCase();

  if (upperContent.includes("SPAM") || upperContent.includes("SCAM")) {
    return false;
  }

  return true;
}

console.log(antiSpam("Ciao, questa è una mail normale"));
console.log(antiSpam("Hai vinto! Questa è una SPAM mail"));

/* EXTRA 10 */
function daysPassed(date) {
  const today = new Date();
  const pastDate = new Date(date);

  const difference = today - pastDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return days;
}

console.log(daysPassed("2024-01-01"));

/* EXTRA 11 */
function matrixGenerator(x, y) {
  const matrix = [];

  for (let i = 0; i < x; i++) {
    const row = [];

    for (let j = 0; j < y; j++) {
      row.push("" + i + j);
    }

    matrix.push(row);
  }

  return matrix;
}

console.log(matrixGenerator(3, 2));

/* NUOVO ESERCIZIO 12 */
function onlyEvenNumbers(arr) {
  const evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

console.log(onlyEvenNumbers([1, 2, 3, 4, 5, 6]));

/* NUOVO ESERCIZIO 13 */
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));

/* NUOVO ESERCIZIO 14 */
function smallestNumber(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(smallestNumber([10, 3, 7, 1, 20]));

/* NUOVO ESERCIZIO 15 */
function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");

  return word === reversed;
}

console.log(isPalindrome("anna"));
console.log(isPalindrome("ciao"));
