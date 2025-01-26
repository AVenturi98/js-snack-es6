/*

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

*/

const el = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const a = 5
const b = 10

const newArray = new Array

function numbers(one, two, array) {

    const newEl = array.slice(one, two - 1)

    for (let i = 0; i < newEl.length; i++) {
        const element = newEl[i].toString();
        newArray.push(element)
    }
}
numbers(a, b, el)

console.log(newArray)