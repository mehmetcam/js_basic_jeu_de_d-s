let player1;
let player2;



player1 = Math.ceil(Math.random() * 7);
player2 = Math.ceil(Math.random() * 7);

console.log(`${player1}`);
console.log(`${player2}`);

// window.alert("Welcome");

function myfunction(player1, player2) {
    player1 = Math.ceil(Math.random() * 6);
    document.getElementById("player1").innerHTML = player1;
    player2 = Math.ceil(Math.random() * 6);
    document.getElementById("player2").innerHTML = player2;
    if (player1 > player2) {
        document.getElementById("resultat").innerHTML = "Player 1 WON !"
    }

    if (player1 < player2) {
        document.getElementById("resultat").innerHTML = "Player 2 WON !"
    }

    if (player1 == player2) {
        document.getElementById("resultat").innerHTML = "Egalité !"
    }


    // if (player1 > 0) {
    //     document.getElementById("zar").innerHTML = "<img src="
    //     6. jpg "/>"
}



// if (player1 > player2) {
//     window.alert(`Kazanan ${player1}`);

// } else() {
//     window.alert(`Kazanan ${player2}`);
// }




// function myfunction(player2) {
//     player2 = Math.ceil(Math.random() * 7);
//     document.getElementById("player2").innerHTML = player2;
// }