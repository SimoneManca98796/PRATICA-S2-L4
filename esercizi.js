// tipi di valori:
// stringa, number, boolean, undefined e null

// esempi metodi array

const names = ["Simone", "Stefano", "Sara", "MONTESSKKKKKKK"];

names.every((name) => {
  return name.charAt[0] === "S";
}); // true
// ovvero OGNI nome dell'array inizia per "S"

const names2 = ["Simone", "Stefano", "Michela"];

names.some((name) => {
  return name.charAt[0] === "S";
}); // true
// ovvero almeno un nome inizia con "S"

const newArray = names.map((name) => {
  return name.charAt[0] === "S";
});
// newArray= [true,false, false]
// mappa ogni nome
// il metodo MAP torna SEMPRE un array

// forEach è come map, ma non torna un array
// forEach assomiglia a un for "sugar-coated"
const arrayOfPets = ["cat", "dog", "shark", "snake"];

const arrayOfInitial = [];

arrayOfPets.forEach((pet) => {
  pet.slice(0, 1); // "c" "d" "s" "s"
  arrayOfInitial.push(pet.slice(0, 1));
});

// arrayOfInitial -> ["c", "d", "s", "s"]

//////////////////////////////+

/* ESERCIZIO 1
Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* ESERCIZIO 2
Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5.
*/

/* ESERCIZIO 4
Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* ESERCIZIO 5
Stai lavorando su un sito di e-commerce.
Se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita.
Altrimenti la spedizione costa 10.
Calcola il totale finale.
*/

/* ESERCIZIO 6
Applica uno sconto del 20% al totale del carrello e verifica se la spedizione è gratuita oppure no.
*/

/* ESERCIZIO 7
Crea tre variabili numeriche e ordinale dal valore più alto al più basso.
*/

/* ESERCIZIO 8
Verifica se un valore fornito è un numero oppure no.
*/

/* ESERCIZIO 9
Controlla se un numero fornito sia pari o dispari.
*/

/* ESERCIZIO 10
Correggi la logica dell'algoritmo affinché mostri il messaggio corretto:
- "Meno di 5"
- "Meno di 10"
- "Uguale a 10 o maggiore"
*/

/* ESERCIZIO 11
Dato un oggetto "me", aggiungi la proprietà city con valore "Toronto".
*/

/* ESERCIZIO 12
Rimuovi la proprietà "lastName" dall'oggetto "me".
*/

/* ESERCIZIO 13
Rimuovi l'ultimo elemento dell'array "skills".
*/

/* ESERCIZIO 14
Crea un array vuoto e riempilo con i numeri da 1 a 10.
*/

/* ESERCIZIO 15
Sostituisci l'ultimo elemento dell'array con il valore 100.
*/

/* ========================= */
/* NUOVI 10 ESERCIZI */
/* ========================= */

/* ESERCIZIO 16
Scrivi un algoritmo che controlli se un numero è positivo, negativo oppure uguale a zero.
*/

/* ESERCIZIO 17
Crea un array con 5 nomi e mostra in console il primo elemento.
*/

/* ESERCIZIO 18
Calcola la somma di due numeri e mostra il risultato in console.
*/

/* ESERCIZIO 19
Scrivi un algoritmo che controlli se un numero è multiplo di 3.
*/

/* ESERCIZIO 20
Crea un oggetto "car" con proprietà:
brand, model e year.
*/

/* ESERCIZIO 21
Aggiungi una nuova proprietà "color" all'oggetto "car".
*/

/* ESERCIZIO 22
Scrivi un algoritmo che controlli se una stringa contiene più di 5 caratteri.
*/

/* ESERCIZIO 23
Crea un array con numeri casuali e mostra in console il numero più grande.
*/

/* ESERCIZIO 24
Scrivi un algoritmo che trasformi una stringa in maiuscolo.
*/

/* ESERCIZIO 25
Crea un algoritmo che conti quanti elementi ci sono in un array.
*/
