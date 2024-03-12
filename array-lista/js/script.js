/*

Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.

*/
// creiamo l'array contenente tutti gli elementi
let userFridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
// creiamo una variabile contenente l'elemento da aggiunger all'array e aggiungiamolo
const pesca = 'pesca';
userFridge.push(pesca);
// creiamo una funzione che ci permetta di cercare l'elemento richiesto all'interno dell'array
let btnPul = document.getElementById('openfridge');
btnPul.addEventListener('click', function() {
    let cocoFridge = false; 
    for (var i = 0; i < userFridge.length; i++) {
        if (userFridge[i] === 'cocomero') {
            cocoFridge = true; 
            let cocoOk = "Uhh... allora l'avevo comprato!";
            document.getElementById('cocomero').innerHTML = cocoOk;
        }
    }
    // nel caso in cui non sia presente allora....
    if (!cocoFridge) {
        let cocoNo = "Cavolo... non lo avevo segnato nella lista!";
        document.getElementById('cocomero').innerHTML = cocoNo;
    }
});
