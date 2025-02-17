/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstWord (arr){
    let firstWordList = []
    for (let i = 0; i< arr.length; i++){
       const thisElement = arr[i];
       const firstElementWord = thisElement.charAt(0)
       firstWordList.push(firstElementWord) 
    }
    return firstWordList
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstWord(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]