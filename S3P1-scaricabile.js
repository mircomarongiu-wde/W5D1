/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(a, b) {
  if (a == b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
}

let sum = crazySum(4, 4);
let sum2 = crazySum(4, 9);
console.log(sum);
console.log(sum2);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(a) {
  if ((a >= 20 && a <= 100) || a == 400) {
    return true;
  } else return false;
}

let num = boundary(52); //num è l'output di boundary quindi un booleano
let num2 = boundary(562);
console.log(num);
console.log(num2);

function boundary1(a) {
  return (a >= 20 && a <= 100) || a == 400; //il valore di a viene sostituito nella condizione assumendo valore true o false bypassando if/else
}

let bond1 = boundary1(32);
console.log(bond1);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(string) {
  let reversed = ""; //variabile output di reverseString che dev'essere valorizzata.
  let arrayString = string.split(""); //utilizzo split (funzione delle stringhe) per creare un array contente i caratteri della stringa.
  let reversedArrayString = []; //creo un array che conterrà i caratteri della stringa invertendone l'ordine.
  for (let i = arrayString.length - 1; i >= 0; i--) {
    reversedArrayString.push(arrayString[i]);
  }
  reversed = reversedArrayString.join("");
  return reversed;
}

let es = reverseString("i topi non avevano nipoti");
console.log(es);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function lonelyWord(string) {
  let maiuscola = "";
  let arrayString = string.split(""); //prendo la stringa e la splitto in un array.
  arrayString[0] = arrayString[0].toUpperCase(); //creo un ciclo che mi rende maiuscolo il  primo elemento dell'array.
  maiuscola = arrayString.join("");
  return maiuscola;
}

let precPhrase = "nel mezzo del cammin di nostra vita";
console.log(precPhrase);

function upperFirst(phrase) {
  let outputPhrase = "";
  let arrayPhrase = phrase.split(" ");
  for (let i = 0; i <= arrayPhrase.length - 1; i++) {
    arrayPhrase[i] = lonelyWord(arrayPhrase[i]);
  }
  outputPhrase = arrayPhrase.join(" ");
  return outputPhrase;
}

console.log(upperFirst(precPhrase));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
  let array = [];
  for (let i = 0; i <= n - 1; i++) {
    let randomNum = Math.random() * 10;
    array.push(randomNum);
  }
  return array;
}

let arrayCasuale = giveMeRandom(45);
console.log (arrayCasuale);



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
