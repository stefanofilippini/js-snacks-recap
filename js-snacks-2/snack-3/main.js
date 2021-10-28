console.log('OK JS');

/* 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti con for
 e opzionalmente con while (edited) 
*/
let somma = 0
for (i=0; i<5; i++) {
    const new_Numb = parseInt(prompt('inserisci un numero'))
    somma = somma + new_Numb
}

console.log(somma);