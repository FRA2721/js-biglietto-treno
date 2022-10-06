/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)*/

// start
// ---------------------------------------------------------------------------------------

// input-data
const kmValue = parseFloat(prompt("How many km do you want to travel?"));
const userAge = parseInt(prompt("How old are you?"));
// ---------------------------------------------------------------------------------------

// operations/conditions
const infoPrice = " ";
const sentinelPrice = 0.21;
const ticketPrice = kmValue*sentinelPrice;

// discounts
const ticketPrice20 = ticketPrice - ((ticketPrice/100)*20);
const ticketPrice40 = ticketPrice - ((ticketPrice/100)*40);

if (userAge < 18) { 
    infoPrice = `You are under 18... You have a discount of 20%, so the price of your ticket is ${ticketPrice20}. Thank you for booking your ticket!`;

}else if (userAge > 65) {
    infoPrice = `You are over 65... You have a discount of 40%, so the price of your ticket is ${ticketPrice40}. Thank you for booking your ticket!`;

}else {
    infoPrice = `The price of your ticket is ${ticketPrice}. Thank you for booking your trip!`;
}
// ---------------------------------------------------------------------------------------

// output-data
alert(infoPrice);
// ---------------------------------------------------------------------------------------

// end