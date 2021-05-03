// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt("Pari o Dispari?").toLocaleLowerCase();
console.log("scelta utente:", sceltaUtente); // debug
var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5!"));
console.log("numero utente:", numeroUtente); // debug
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function casualNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var numeroPC = casualNumber(1, 5);
console.log("numero casuale PC:", numeroPC); // debug
// Sommiamo i due numeri
var sum = numeroUtente + numeroPC;
console.log("somma numeri:", sum); // debug
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(num) {
  return num % 2 == 0;
}
// Dichiariamo chi ha vinto.
if ((sceltaUtente == "pari" && isEven(sum)) || (sceltaUtente != "pari" && !isEven(sum))) {
  console.log("Hai vinto!!!");
} else {
  console.log("Ha vinto il PC!");
}
