// sur ce jeu j'ai essayé d'utiliser les bases de js. peut être qu'il y a plein de faute d'ortographe. désolé :)

const player1 = 'Mehmet';
const player2 = 'Seher';

let zar1;
let zar2;



let puan1 = 0;
let puan2 = 0;




while (puan1 < 10 || puan2 < 10) {


    zar1 = Math.ceil(Math.random() * 6);
    zar2 = Math.ceil(Math.random() * 6);
    console.log(`///////////////`)
    console.log(`_______________`)
    console.log(`Le jeu commence`);

    //console.log(`${player1} attigi zar: (${zar1}) puani: (${puan1})- ${player2} attigi zar (${zar2}) puani:(${puan2})`);

    console.log(`${player1} son dé:(${zar1})`);
    puan1 = puan1 + zar1;
    console.log(`${player1} score: (${puan1})`);

    console.log(`///////////////`)

    console.log(`${player2} son dé:(${zar2})`);
    puan2 = puan2 + zar2;
    console.log(`${player2} score: (${puan2})`);

    console.log(`_______________`)

}

if (puan1 > puan2) {
    console.log(`Kazanan ${player1}`)
} else {
    console.log(`Kazanan ${player2}`)
}