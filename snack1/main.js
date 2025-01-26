/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

const objectArray = [
    {
        nome: 'Rosso',
        peso: 9
    }, {
        nome: 'Giallo',
        peso: 6
    }, {
        nome: 'Blu',
        peso: 8
    }, {
        nome: 'Verde',
        peso: 10
    }, {
        nome: 'Nero',
        peso: 12
    }
];

const listBike = document.getElementById('caracter_bike');
const bikeMinWeight = document.getElementById('minWeight');

let bikeFirstWeight = objectArray[1];

for (let i = 0; i < objectArray.length; i++) {

    const elements = objectArray[i];

    for (let key in elements) {

        // console.log(elements[key]);
        const elementToIndex = document.createElement('li');
        elementToIndex.innerText = key + ': ' + elements[key];
        listBike.appendChild(elementToIndex)
    }
}


const weightsBike = []

for (let i = 0; i < objectArray.length; i++) {

    const weightBike = objectArray[i];
    weightsBike.push(weightBike.peso)
    // console.log(weightBike.peso)
}

const minWeight = Math.min(...weightsBike)
bikeMinWeight.innerHTML = minWeight

