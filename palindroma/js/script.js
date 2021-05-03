// 1 - Palindroma
// Chiedere all'utente di inserire una parola

var parola = prompt("Inserisci una parola")

// Creare una funzione per capire se la parola inserita è palindroma

function palindroma (str) {
  // scompongo la string in un array di sottostringhe
  var stringaReverse = str.split(''); 
  console.log(stringaReverse);
  // Riordino gli elementi dell'array in ordine inverso
  stringaReverse = stringaReverse.reverse(); 
  console.log(stringaReverse);
  // Unisco nuovamente tutti gli elementi di un array in una singola stringa
  stringaReverse = stringaReverse.join('');
  console.log(stringaReverse);
  // Valore booleano per uguaglianza stringhe minuscole
  return str.toLowerCase() == stringaReverse.toLowerCase();
};

console.log(palindroma(parola));
