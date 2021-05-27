//distanza da percorrere
var chilometriPercorsi = parseInt(prompt('Quanti chilometri percorrerai?'));
//log
document.getElementById('km').innerHTML += chilometriPercorsi + ' km';

//età passeggero
var eta = parseInt(prompt('Quanti anni hai?'));
//log
document.getElementById('eta').innerHTML += eta + ' anni';

//prezzo scontato con chilometri
var prezzoChilometro = 0.21;
document.getElementById('prezzo').innerHTML += prezzoChilometro + '€';

var scontoMinore = 0.8;

var scontoAdulto = 0.6;

//prezzo senza sconto
var totale = (chilometriPercorsi * prezzoChilometro).toFixed(2);
document.getElementById('prezzo-senza-sconto').innerHTML += totale + '€';

//sconto con età
//minore
if (eta < 18) {
    totale = (totale * scontoMinore).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'Sei minorenne, hai diritto ad uno sconto =' + totale + '€';
} else if (eta > 65) {
    //adulto
    totale = (totale * scontoAdulto).toFixed(2);
    document.getElementById('prezzo-scontato').innerHTML = 'Sei adulto, hai diritto ad uno sconto maggiore =' + totale + '€';
}