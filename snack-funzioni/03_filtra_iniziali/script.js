/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterWord = (arr, letter)=>{
    const filteredWordList = []
    const firstLetter = letter;
    for (let i = 0; i< arr.length; i++){
        const thisWord = arr[i]
        const filteredWord = thisWord.charAt(0) === letter
        if (filteredWord){
            filteredWordList.push(thisWord)
        }
    }
    return filteredWordList

}


// Invoca la funzione qui e stampa il risultato in console

console.log(filterWord(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]