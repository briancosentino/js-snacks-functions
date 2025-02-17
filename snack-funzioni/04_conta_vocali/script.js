/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals (word){
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let sumVocals = 0;
    for (let i = 0; i < word.length; i++){
        const thisLetter = word[i];
        if (vocals.includes(thisLetter)){
            sumVocals += 1
        }
    } return sumVocals
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVocals('word'));
 

//Risultato atteso se si passa 'javascript': 3 (a, a, i)