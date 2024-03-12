//dichiaro i due array 
let arrayBig = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var arraySmall = [1, 2, 3];
//inserisco la mia utility per la generazione di numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// creo una funzione a pulsante dove alla pressione del bottone accade qualcosa
let btnPul = document.getElementById('puls');
btnPul.addEventListener('click', function() {
    // se la lunghezza dell'array più grande è > di quello più piccolo....
    if (arrayBig.length < arraySmall.length) {
        // inserisco l'operazione all'interno della variabile
        var diffLength = arraySmall.length - arrayBig.length;
        for (var i = 0; i < diffLength; i++) {
            arrayBig.push(getRndInteger(1, 100));
        }
    } else if (arraySmall.length < arrayBig.length) {
        var diffLength = arrayBig.length - arraySmall.length;
        for (var i = 0; i < diffLength; i++) {
            arraySmall.push(getRndInteger(1, 100));
        }
    }

    let outputBig = document.getElementById("big");
    // NB utilizzata l'esspressione join, la quale mi separa gli elemnti dell'array attraverso l'attributo(", ")
    outputBig.innerHTML = "Array Big: " + arrayBig.join(", ");
    
    let outputSmall = document.getElementById("small");
    outputSmall.innerHTML = "Array Small: " + arraySmall.join(", ");
});

