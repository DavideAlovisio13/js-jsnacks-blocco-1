// inseriamo la nostra utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
   // creiamo l'array contenente i numeri...
let arrayNum = [];
// generiamo una variabili contenente il bottone e l'azione che deve compiere una volta cliccato
let btnHtml= document.getElementById('generanumeri');
 btnHtml.addEventListener('click' , function() {
    // chiediamo all'utente quanti numeri vuole che siano inseriti all'interno dell'array
    let numEl = parseInt(document.getElementById("numel").value);
    console.log(arrayNum);
    // generiamo con un ciclo for i numeri casuali...
    for (var i = 0; i < numEl; i++) {
        arrayNum.push(getRndInteger(1, 100));
    }
    //stampiamo il tutto...
    const output = document.getElementById("output");
    //se l'array è maggiore di 5, stampa gli ultimi 5 elementi
    if (arrayNum.length > 5) {
        // N.B. utilizzato slice, posso indicare i valori da prendere come un nuovo array
        // N.B. utilizzando join, separo gli elementi del mio array con l'attributo (", ")
        output.innerHTML = "Ultimi 5 elementi generati: " + arrayNum.slice(-5).join(", ");
        // altrimenti chiediamo all'utente
    } else {
        let numToPrint = parseInt(prompt("Quanti elementi vuoi stampare?"));
        if (numToPrint <= arrayNum.length) {
            output.innerHTML = "Ultimi " + numToPrint + " elementi generati: " + arrayNum.slice(-numToPrint).join(", ");
        } else {
            output.innerHTML = "hai sbagliato qualcosa....";
        }
    }
});
