// 1 - Palindroma
// Chiedere all'utente di inserire una parola

var parola = prompt("Inserisci una parola").trim().toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma

function palindroma (str) {
  // scompongo la string in un array di sottostringhe
  // Riordino gli elementi dell'array in ordine inverso
  // Unisco nuovamente tutti gli elementi di un array in una singola stringa
  var stringaReverse = str.split('').reverse().join('');
  // Valore booleano per uguaglianza stringhe (== true != false)
  return str == stringaReverse;
};

function frasePalindroma (strPhrase) {
    var fraseReverse = strPhrase.replace(/ /g,'').split('').reverse().join('');
    return strPhrase.replace(/ /g,'') == fraseReverse;
};

console.log(palindroma(parola));
console.log(frasePalindroma("i topi non avevano nipoti"));