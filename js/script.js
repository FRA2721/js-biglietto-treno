/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)*/

// start
// ---------------------------------------------------------------------------------------

// input-data
const km = parseFloat(prompt("How many km do you want to travel?"));
const age = parseInt(prompt("How old are you?"));
// ---------------------------------------------------------------------------------------

// operations/conditions
const info = " ";

if (age < 18) {
    info = `You are under 18... You have a discount of 20%, so the price of your ticket is ${totalPrice}. Thank you for booking your ticket!`;
}else if (age > 65) {
    info = `You are over 65... You have a discount of 40%, so the price of your ticket is ${totalPrice}. Thank you for booking your ticket!`;
}else {
    info = `The price of your ticket is ${totalPrice}. Thank you for booking your ticket!`;
}
// ---------------------------------------------------------------------------------------

// output-data
alert(info);
// ---------------------------------------------------------------------------------------

// end