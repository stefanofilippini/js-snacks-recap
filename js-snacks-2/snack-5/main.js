console.log('OK JS');

/* 
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

const array_2 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const array_1 = [1,2,3,4,5,6,7,8,9]


let diff = 0
if (array_1.length > array_2.length) {

    diff = array_1.length - array_2.length
    
    for (i=0; i<diff; i++) {
        array_2.push(Math.floor(Math.random() * 14))
    }
}
else if (array_1.length < array_2.length) {
    
    diff = array_2.length - array_1.length
    
    for (i=0; i<diff; i++) {
        array_1.push(Math.floor(Math.random() * 14))
    }
}

console.log(`array 1: ${array_1}
array 2: ${array_2}`);