console.log('OK JS');

/* 
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const array = [3, 4, 5, 6, 7, 8, 9, 10]

let somma = 0
for (i=0; i<array.length; i++) {
    if (i%2 !==0) {
        somma = somma + array[i]
    }
}

console.log(somma);