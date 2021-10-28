console.log('JS OK');

/* 
Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto. 
*/

const button = document.getElementById ("btn"); 

const array = [];
let num = 0;
button.addEventListener ("click", function () {
    const string = prompt('inserisci un numero');
    let somma = 0;
    let media = 0
    if (string.length === 4) {
        console.log('ciao');
        for (i=0; i<4; i++) {
            array.push(parseInt(string[i]))
        }
        console.log(array);
        for (i=0; i<4; i++) {
            somma = somma + array[i]
        }
        media = somma / 4;
        console.log(somma, media);
    }
    else {
        console.log('bau');
        
    }
})