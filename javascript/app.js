const priceOfAnApple = '0.59';
const numberOfApples = '200';
const total = priceOfAnApple * numberOfApples;
console.log(`${numberOfApples} appels kosten ${total} dollar`)


let zin = 'Please vit the HZ University of Applied Science';
zin = zin.replace('Applied', 'Mad');
console.log(zin);


console.log('hij doet het');
let currentAction = 'booleans';
if (currentAction == 'calculating') {
    console.log('in Calculating');
    //optellen
    //vermenigvuldigen
    //aftrekken
    //delen
    const a = 10;
    const b = 11;
    console.log('optellen', a + b);
} else if (currentAction == 'Strings') {
    console.log('in Strings');
    //string
    const myString = 'My beautiful string';
    console.log(myString.toUpperCase());
    console.log('character at', myString.charAt(7));
    console.log('lengte van de string', myString.length);
    console.log('substring', myString.substring(3, 8));
} else if (currentAction == 'booleans') {
    console.log('in booleans');
    //boolean
    let score = 7;
    if (score >= 6) {
        console.log('master');
    } else {
        console.log('not');
    }
} else {
    console.error('oof');
}

let weight = 70;
let height = 170;
const BMI = (weight / (height * height) * 10) / 10;
console.log('Jou BMI is', BMI);

if (BMI <= 18.5) {
    console.log('Ondergewicht, Risico: Laag');
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('Normaal gewicht, Risico: Gemiddeld');
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log('Overgewicht, Risico: Verhoogd');
} else if (BMI >= 30) {
    console.log('Overgewicht, Duidelijk verhoogd risico');
} else {
    console.error('ERROR 404');
}