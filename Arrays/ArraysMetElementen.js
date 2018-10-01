/*const productsList = [];

productsList[0] = "Tandenborstel";
productsList[1] = "Deodorant";
productsList[2] = "Bakmeel";
productsList[3] = "Wortels";
productsList[4] = "Tandpasta";
productsList[5] = "Kropsla";
productsList[6] = "Maggi";
productsList[7] = "Croky Chips";
productsList[8] = "WC Papier";
productsList[9] = "Shampoo";

productsList.push("Brood");
productsList.pop();

console.table(productsList);
    //start situatie | Eindsituatie            | Wat tijdens de loop te doen
for (let index = 0; index < productsList.length; index++) {
    const element = productsList[index];
    console.log(element);
}

let newProductsArray = productsList.map(function(element, index, array){
    let newElement = element.toUpperCase();
    return newElement;
});

//Opdracht 1
let endResult = 0;
const productPrices = [2.10, 4.99, 5.60, 0.40, 5.44, 7.33, 2.33, 2.49, 2.10];
for (i = 0; i < productPrices.length; i++) { 
 console.log(endResult = endResult + productPrices[i]);
}

//Opdracht 2
let average = endResult / productPrices.length;{
    console.log("Dit is het gemiddelde ", average);
} 
*/

//Opdracht 1
const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
let R = (Math.floor(lapRounds.length * Math.random()));
console.log(lapRounds[R]);


//Opdracht 2
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

allMyRecords.forEach(element => {
    element.forEach(elem => {
        console.log(elem);
    })

});

//Opdracht 3
function checkLapRound(lap) {
    return lap < 4;
}
function filterLap() {
    const lapRounds = [2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];
    lapRoundsFilter = lapRounds.filter(checkLapRound);
    console.log(lapRoundsFilter);
}
filterLap()