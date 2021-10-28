console.log('OK JS');

/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array
*/
const Array = []

for (i=0; i<6; i++) {
    const new_numb = parseInt(prompt('inserisci un numero'))

    if (new_numb%2 !==0) {
        Array.push(new_numb)
    }
}

console.log(Array);