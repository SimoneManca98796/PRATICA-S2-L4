/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const areaRettangolo = function (l1, l2) {
  const result = l1 * l2;
  return result;
};

console.log("l'area è ", areaRettangolo(5, 10)); // l'area è 50

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1 = 10, num2 = 15) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
};

console.log(crazySum(10, 15)); // Output: 25
console.log(crazySum(5, 5)); // Output: 30

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num1) {
  const diff = Math.abs(num1 - 19);
  if (diff < 19) {
    return diff * 3;
  } else {
    return diff;
  }
};

console.log(crazyDiff(10)); // Output: 9 (differenza assoluta: 19 - 10 = 9)
console.log(crazyDiff(19)); // Output: 0 (19 - 19 = 0)
console.log(crazyDiff(22)); // Output: 9 (22 - 19 = 3, 3 * 3 = 9)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log("boundary", boundary(25)); // Output: true
console.log("boundary", boundary(10)); // Output: false
console.log("boundary", boundary(100)); // Output: true
console.log("boundary", boundary(400)); // Output: true
console.log("boundary", boundary(200)); // Output: false

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (string) {
  if (!string.startsWith("EPICODE")) {
    // Il metodo .startsWith() è un metodo disponibile sulle stringhe in JavaScript.
    //  Viene utilizzato per determinare se una stringa inizia
    //con i caratteri di un'altra stringa, restituendo true o false in base al risultato
    return "EPICODE " + string; // Aggiungi uno spazio tra "EPICODE" e la stringa
  } else {
    return string; // Ritorna la stringa originale se già inizia con "EPICODE"
  }
};

// Esempi di utilizzo
const epifyy = epify("ciao, mi chiamo Simone");
console.log("epify", epifyy); // Output: "EPICODE ciao, mi chiamo Simone"

const epifyy2 = epify("EPICODE è una scuola di coding");
console.log("epify", epifyy2); // Output: "EPICODE è una scuola di coding"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (positive) {
  if (positive > 0) {
    return positive % 3 === 0 || positive % 7 === 0;
  } else {
    return false;
  }
};

// Esempi di utilizzo
console.log("check3and7", check3and7(35)); // Output: true
console.log("check3and7", check3and7(21)); // Output: true
console.log("check3and7", check3and7(10)); // Output: false
console.log("check3and7", check3and7(-7)); // Output: false

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str) {
  const arrayOfChars = str.split(""); // split: metodo che trasforma una stringa in un array di caratteri singoli
  // esempio "ciao" --> ["c", "i", "a", "o"]
  arrayOfChars.reverse(); // inverte l'array quindi [c i a o] ---> [o i a c]
  const reversedString = arrayOfChars.join(""); // riunisce i singoli elementi dell'array in un unico array
  return reversedString;
};

console.log(reverseString("epicode")); // OUTPUT: edocipe

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (sentence) {
  const arrayOfWords = sentence.split(" "); // con lo spazio non rende caratteri singoli di parole
  // ['ciao', 'mi', 'chiamo', 'stefano']
  const arrayUpperCaseWords = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    let UpperCaseWord =
      arrayOfWords[i].slice(0, 1).toUpperCase() + arrayOfWords[i].slice(1); // "C" + "iao"
    arrayUpperCaseWords.push(UpperCaseWord);
  }
  return arrayUpperCaseWords.join(" ");
};

console.log(upperFirst("ciao mi chiamo Simone")); // OUTPUT: Ciao Mi Chiamo Simone

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/*function cutString(string) {
  return string.slice(1, -1);
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const arrays = [];
  for (i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    arrays.push(randomNumber);
  }
  return arrays;
};

/* SCRIVI QUI LA TUA RISPOSTA */

// ESERCIZI EXTRA:
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(arr) {
  let sommaMaggioreDi5 = 0;

  arr.forEach(function (item) {
    if (item > 5) {
      console.log(item + " è maggiore di 5");
      sommaMaggioreDi5 += item;
    } else {
      console.log(item + " non è maggiore di 5");
    }
  });

  return sommaMaggioreDi5;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
