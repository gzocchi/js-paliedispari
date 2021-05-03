// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
do {
  var sceltaUtente = prompt("Pari o Dispari?").toLowerCase().trim();
  console.log("scelta utente:", sceltaUtente); // debug
} while (!rispostaCorretta(sceltaUtente))

function rispostaCorretta (str) {
  return (str == "pari" || str == "dispari")
}

do {
  var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5!"));
  console.log("numero utente:", numeroUtente); // debug
} while (!numeroCorretto(numeroUtente))
  
function numeroCorretto (num) {
  return (num >= 1 && num <= 5)
}

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
// Dichiariamo chi ha vinto.

/*
 function isEven(num) {
  return num % 2 == 0;
}
if ((sceltaUtente == "pari" && isEven(sum)) || (sceltaUtente == "dispari" && !isEven(sum))) {
  console.log("Hai vinto!!!");
} else {
  console.log("Ha vinto il PC!");
   }
*/

function evenOrOdd(num) {
  return num % 2 == 0;
}
var even = evenOrOdd(sum);

function vincita(sceltaUtente, even) {
  if (sceltaUtente == "pari" && even || sceltaUtente == "dispari" && !even) {
    return "Hai vinto!!! Il totale è " + sceltaUtente;
  } else {
    return "Ha vinto il PC! Il totale è " + sceltaUtente;;
  }
};
console.log(vincita(sceltaUtente, even));
