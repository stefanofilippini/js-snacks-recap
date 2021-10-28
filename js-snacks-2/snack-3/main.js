console.log('OK JS');

/* 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

const name_list = ['Marco', 'Luca', 'Mirko', 'Mattia', 'Stefano']
const lastname_list = ['Davoli', 'Morellini', 'Marciano', 'Barbieri', 'Filippini']

let name_number
let lastname_number
const random_names = []

for (i=0; i<3; i++) {
    name_number = Math.floor(Math.random() * 5);
    lastname_number = Math.floor(Math.random() * 5);
    random_names.push(`${name_list[name_number]} ${lastname_list[lastname_number]}`)
}

console.log(random_names);