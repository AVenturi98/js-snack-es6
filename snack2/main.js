/*

Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

const equipe = [
    {
        nome: 'Rossa',
        'punti-fatti': 0,
        'falli-subiti': 0
    },{
        nome: 'Gialla',
        'punti-fatti': 0,
        'falli-subiti': 0
    },{
        nome: 'Blu',
        'punti-fatti': 0,
        'falli-subiti': 0
    },{
        nome: 'Verde',
        'punti-fatti': 0,
        'falli-subiti': 0
    },{
        nome: 'Nera',
        'punti-fatti': 0,
        'falli-subiti': 0
    }
]

// console.log(equipe);

const equipeScore = [];

for (let i = 0; i < equipe.length; i++) {

    const elments = equipe[i];
    
    const numberRandom = parseInt(Math.random() * 20);
    const numberRandom2 = parseInt(Math.random() * 20);
    // console.log(numberRandom);
    
    const a = elments['punti-fatti'] = numberRandom;
    const b = elments['falli-subiti'] = numberRandom2;
    // console.log(elments)


    equipeScore.push({
        nome: elments.nome,
        falli: b
    })
  
}

// console.log(equipeScore);

for (let key in equipeScore) {
    console.log(equipeScore[key])
}

